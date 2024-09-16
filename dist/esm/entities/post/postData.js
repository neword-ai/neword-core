import { z } from "zod";
// Base Schema for common fields
const BasePostSchema = z.object({
    id: z.string(), // Post ID
    content: z.string().optional(), // Common content field (caption/message/description)
    media_url: z.string().optional(), // URL to media
    created_at: z.string(), // Creation timestamp
    owner_id: z.string(), // ID of the user who created the post
});
// Instagram Post Schema
const InstagramPostSchema = BasePostSchema.extend({
    type: z.literal("INSTAGRAM_POST"), // Literal type for identification
    media_type: z.enum(["IMAGE", "VIDEO", "CAROUSEL_ALBUM"]), // Instagram-specific field
    like_count: z.number(), // Instagram-specific field
    comments_count: z.number().optional(), // Instagram-specific field
    permalink: z.string(), // Instagram-specific field
    children: z
        .object({
        data: z
            .array(z.object({
            media_url: z.string(),
        }))
            .optional(),
    })
        .optional(), // Instagram-specific carousel field
});
// Twitter Tweet Schema
const TwitterTweetSchema = BasePostSchema.extend({
    type: z.literal("TWITTER_TWEET"), // Literal type for identification
    text: z.string().max(280), // Twitter-specific field (max 280 characters)
    public_metrics: z.object({
        retweet_count: z.number(),
        reply_count: z.number(),
        like_count: z.number(),
        quote_count: z.number(),
    }), // Twitter-specific field
    entities: z
        .object({
        hashtags: z
            .array(z.object({
            tag: z.string(),
        }))
            .optional(),
        mentions: z
            .array(z.object({
            username: z.string(),
        }))
            .optional(),
    })
        .optional(), // Twitter-specific field
});
// Facebook Post Schema
const FacebookPostSchema = BasePostSchema.extend({
    type: z.literal("FACEBOOK_POST"), // Literal type for identification
    message: z.string().optional(), // Facebook-specific field
    created_time: z.string(), // Facebook-specific field
    from: z
        .object({
        id: z.string(),
        name: z.string(),
    })
        .optional(), // Facebook-specific field
    likes: z
        .object({
        summary: z.object({
            total_count: z.number(),
        }),
    })
        .optional(), // Facebook-specific field
    comments: z
        .object({
        summary: z.object({
            total_count: z.number(),
        }),
    })
        .optional(), // Facebook-specific field
    shares: z
        .object({
        count: z.number(),
    })
        .optional(), // Facebook-specific field
    attachments: z
        .object({
        data: z.array(z.object({
            media: z
                .object({
                image: z
                    .object({
                    src: z.string(),
                })
                    .optional(),
            })
                .optional(),
        })),
    })
        .optional(), // Facebook-specific field
});
// TikTok Post Schema
const TiktokPostSchema = BasePostSchema.extend({
    type: z.literal("TIKTOK_POST"), // Literal type for identification
    description: z.string(), // TikTok-specific field
    statistics: z.object({
        like_count: z.number(),
        comment_count: z.number(),
        share_count: z.number(),
        play_count: z.number(),
    }), // TikTok-specific field
    video: z.object({
        url: z.string(),
        duration: z.number(),
        cover: z.string(),
    }), // TikTok-specific field
});
// Union of all post types based on "type"
export const ZPostData = z.discriminatedUnion("type", [
    InstagramPostSchema,
    TwitterTweetSchema,
    FacebookPostSchema,
    TiktokPostSchema,
]);
//# sourceMappingURL=postData.js.map