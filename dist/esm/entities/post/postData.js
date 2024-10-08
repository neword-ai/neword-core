import { z } from "zod";
// Instagram Post Schema
const InstagramPostSchema = z.object({
    imageUrl: z.string().optional(),
    type: z.literal("INSTAGRAM_POST"), // Literal type for identification
    media_type: z.enum(["IMAGE", "VIDEO", "CAROUSEL_ALBUM"]), // Required media type
    media_ids: z.array(z.string()), // Media IDs (must be obtained after uploading media to Instagram API)
    message: z.string(), // Optional caption for the post
    location: z.string().optional(), // Optional location tag
    disable_comments: z.boolean().optional(), // Optional flag to disable comments
    children: z
        .object({
        media_ids: z.array(z.string()), // Media IDs for carousel
    })
        .optional(), // Only required for CAROUSEL_ALBUM
});
// Twitter Tweet Schema
const TwitterTweetSchema = z.object({
    type: z.literal("TWITTER_TWIT"), // Literal type for identification
    message: z.string(), // Optional: The text content of the tweet
    imageUrl: z.string().optional(),
    media_ids: z.array(z.string()).optional(), // Optional: Media IDs for images or videos (uploaded beforehand)
    link: z.string().optional(), // Optional: URL to include in the tweet
    in_reply_to_status_id: z.string().optional(), // Optional: ID of the tweet being replied to
    possibly_sensitive: z.boolean().optional(), // Optional: Flag to mark content as potentially sensitive
    reply_settings: z
        .enum(["everyone", "mentioned_users", "following"])
        .optional(), // Optional: Who can reply to the tweet
    scheduled_publish_time: z.number().optional(), // Optional: Scheduled time to publish the tweet (Unix timestamp)
});
// Facebook Post Schema
const FacebookPostSchema = z.object({
    imageUrl: z.string().optional(),
    type: z.literal("FACEBOOK_POST"), // Literal type for identification
    message: z.string(), // Optional message for the post
    link: z.string().optional(), // Optional link to be shared in the post
    media_ids: z.array(z.string()).optional(), // Media IDs for image/video, optional
    scheduled_publish_time: z.number().optional(), // Optional time for scheduled publishing (Unix timestamp)
    published: z.boolean(), // Whether the post is published immediately or as a draft
});
const LinkedInPostSchema = z.object({
    message: z.string(),
    imageUrl: z.string().optional(), // Optional field for image
    hashtags: z
        .array(z.string().min(1, "Hashtag cannot be empty"))
        .max(30, "Cannot have more than 30 hashtags") // LinkedIn max hashtags is 30
        .optional(),
    mentions: z
        .array(z.string().min(1, "Mention cannot be empty"))
        .max(20, "Cannot have more than 20 mentions") // Limit number of mentions
        .optional(),
    type: z.literal("LINKEDIN_POST"), // Post type must be one of the LinkedInPostType values
});
// TikTok Post Schema
const TiktokPostSchema = z.object({
    type: z.literal("TIKTOK_POST"), // Literal type for identification
    message: z.string(), // TikTok-specific field
    imageUrl: z.string().optional(),
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
    LinkedInPostSchema,
]);
//# sourceMappingURL=postData.js.map