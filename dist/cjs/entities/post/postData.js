"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZPostData = void 0;
var zod_1 = require("zod");
// Instagram Post Schema
var InstagramPostSchema = zod_1.z.object({
    imageUrl: zod_1.z.string().optional(),
    type: zod_1.z.literal("INSTAGRAM_POST"), // Literal type for identification
    media_type: zod_1.z.enum(["IMAGE", "VIDEO", "CAROUSEL_ALBUM"]), // Required media type
    media_ids: zod_1.z.array(zod_1.z.string()), // Media IDs (must be obtained after uploading media to Instagram API)
    message: zod_1.z.string(), // Optional caption for the post
    location: zod_1.z.string().optional(), // Optional location tag
    disable_comments: zod_1.z.boolean().optional(), // Optional flag to disable comments
    children: zod_1.z
        .object({
        media_ids: zod_1.z.array(zod_1.z.string()), // Media IDs for carousel
    })
        .optional(), // Only required for CAROUSEL_ALBUM
});
// Twitter Tweet Schema
var TwitterTweetSchema = zod_1.z.object({
    type: zod_1.z.literal("TWITTER_TWIT"), // Literal type for identification
    message: zod_1.z.string(), // Optional: The text content of the tweet
    imageUrl: zod_1.z.string().optional(),
    media_ids: zod_1.z.array(zod_1.z.string()).optional(), // Optional: Media IDs for images or videos (uploaded beforehand)
    link: zod_1.z.string().optional(), // Optional: URL to include in the tweet
    in_reply_to_status_id: zod_1.z.string().optional(), // Optional: ID of the tweet being replied to
    possibly_sensitive: zod_1.z.boolean().optional(), // Optional: Flag to mark content as potentially sensitive
    reply_settings: zod_1.z
        .enum(["everyone", "mentioned_users", "following"])
        .optional(), // Optional: Who can reply to the tweet
    scheduled_publish_time: zod_1.z.number().optional(), // Optional: Scheduled time to publish the tweet (Unix timestamp)
});
// Facebook Post Schema
var FacebookPostSchema = zod_1.z.object({
    imageUrl: zod_1.z.string().optional(),
    type: zod_1.z.literal("FACEBOOK_POST"), // Literal type for identification
    message: zod_1.z.string(), // Optional message for the post
    link: zod_1.z.string().optional(), // Optional link to be shared in the post
    media_ids: zod_1.z.array(zod_1.z.string()).optional(), // Media IDs for image/video, optional
    scheduled_publish_time: zod_1.z.number().optional(), // Optional time for scheduled publishing (Unix timestamp)
    published: zod_1.z.boolean(), // Whether the post is published immediately or as a draft
});
var LinkedInPostSchema = zod_1.z.object({
    message: zod_1.z.string(),
    content: zod_1.z
        .string()
        .min(1, "Content cannot be empty")
        .max(1300, "Content exceeds the maximum length of 1300 characters"), // LinkedIn content max length is 1300 characters
    imageUrl: zod_1.z.string().url("Invalid URL format").optional(), // Optional field for image
    hashtags: zod_1.z
        .array(zod_1.z.string().min(1, "Hashtag cannot be empty"))
        .max(30, "Cannot have more than 30 hashtags") // LinkedIn max hashtags is 30
        .optional(),
    mentions: zod_1.z
        .array(zod_1.z.string().min(1, "Mention cannot be empty"))
        .max(20, "Cannot have more than 20 mentions") // Limit number of mentions
        .optional(),
    type: zod_1.z.literal("LINKEDIN_POST"), // Post type must be one of the LinkedInPostType values
});
// TikTok Post Schema
var TiktokPostSchema = zod_1.z.object({
    type: zod_1.z.literal("TIKTOK_POST"), // Literal type for identification
    message: zod_1.z.string(), // TikTok-specific field
    imageUrl: zod_1.z.string().optional(),
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
    LinkedInPostSchema,
]);
//# sourceMappingURL=postData.js.map