"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZPostData = void 0;
var zod_1 = require("zod");
// Base Schema for common fields
var BasePostSchema = zod_1.z.object({
    id: zod_1.z.string(), // Post ID
    content: zod_1.z.string().optional(), // Common content field (caption/message/description)
    media_url: zod_1.z.string().optional(), // URL to media
    created_at: zod_1.z.string(), // Creation timestamp
    owner_id: zod_1.z.string(), // ID of the user who created the post
});
// Instagram Post Schema
var InstagramPostSchema = BasePostSchema.extend({
    type: zod_1.z.literal("INSTAGRAM_POST"), // Literal type for identification
    media_type: zod_1.z.enum(["IMAGE", "VIDEO", "CAROUSEL_ALBUM"]), // Instagram-specific field
    like_count: zod_1.z.number(), // Instagram-specific field
    comments_count: zod_1.z.number().optional(), // Instagram-specific field
    permalink: zod_1.z.string(), // Instagram-specific field
    children: zod_1.z
        .object({
        data: zod_1.z
            .array(zod_1.z.object({
            media_url: zod_1.z.string(),
        }))
            .optional(),
    })
        .optional(), // Instagram-specific carousel field
});
// Twitter Tweet Schema
var TwitterTweetSchema = BasePostSchema.extend({
    type: zod_1.z.literal("TWITTER_TWEET"), // Literal type for identification
    text: zod_1.z.string().max(280), // Twitter-specific field (max 280 characters)
    public_metrics: zod_1.z.object({
        retweet_count: zod_1.z.number(),
        reply_count: zod_1.z.number(),
        like_count: zod_1.z.number(),
        quote_count: zod_1.z.number(),
    }), // Twitter-specific field
    entities: zod_1.z
        .object({
        hashtags: zod_1.z
            .array(zod_1.z.object({
            tag: zod_1.z.string(),
        }))
            .optional(),
        mentions: zod_1.z
            .array(zod_1.z.object({
            username: zod_1.z.string(),
        }))
            .optional(),
    })
        .optional(), // Twitter-specific field
});
// Facebook Post Schema
var FacebookPostSchema = BasePostSchema.extend({
    type: zod_1.z.literal("FACEBOOK_POST"), // Literal type for identification
    message: zod_1.z.string().optional(), // Facebook-specific field
    created_time: zod_1.z.string(), // Facebook-specific field
    from: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(), // Facebook-specific field
    likes: zod_1.z
        .object({
        summary: zod_1.z.object({
            total_count: zod_1.z.number(),
        }),
    })
        .optional(), // Facebook-specific field
    comments: zod_1.z
        .object({
        summary: zod_1.z.object({
            total_count: zod_1.z.number(),
        }),
    })
        .optional(), // Facebook-specific field
    shares: zod_1.z
        .object({
        count: zod_1.z.number(),
    })
        .optional(), // Facebook-specific field
    attachments: zod_1.z
        .object({
        data: zod_1.z.array(zod_1.z.object({
            media: zod_1.z
                .object({
                image: zod_1.z
                    .object({
                    src: zod_1.z.string(),
                })
                    .optional(),
            })
                .optional(),
        })),
    })
        .optional(), // Facebook-specific field
});
// TikTok Post Schema
var TiktokPostSchema = BasePostSchema.extend({
    type: zod_1.z.literal("TIKTOK_POST"), // Literal type for identification
    description: zod_1.z.string(), // TikTok-specific field
    statistics: zod_1.z.object({
        like_count: zod_1.z.number(),
        comment_count: zod_1.z.number(),
        share_count: zod_1.z.number(),
        play_count: zod_1.z.number(),
    }), // TikTok-specific field
    video: zod_1.z.object({
        url: zod_1.z.string(),
        duration: zod_1.z.number(),
        cover: zod_1.z.string(),
    }), // TikTok-specific field
});
// Union of all post types based on "type"
exports.ZPostData = zod_1.z.discriminatedUnion("type", [
    InstagramPostSchema,
    TwitterTweetSchema,
    FacebookPostSchema,
    TiktokPostSchema,
]);
//# sourceMappingURL=postData.js.map