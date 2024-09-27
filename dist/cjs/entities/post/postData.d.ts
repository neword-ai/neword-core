import { z } from "zod";
export declare const ZPostData: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"INSTAGRAM_POST">;
    media_type: z.ZodEnum<["IMAGE", "VIDEO", "CAROUSEL_ALBUM"]>;
    media_ids: z.ZodArray<z.ZodString, "many">;
    caption: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    disable_comments: z.ZodOptional<z.ZodBoolean>;
    children: z.ZodOptional<z.ZodObject<{
        media_ids: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        media_ids: string[];
    }, {
        media_ids: string[];
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "INSTAGRAM_POST";
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    media_ids: string[];
    caption?: string | undefined;
    location?: string | undefined;
    disable_comments?: boolean | undefined;
    children?: {
        media_ids: string[];
    } | undefined;
}, {
    type: "INSTAGRAM_POST";
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    media_ids: string[];
    caption?: string | undefined;
    location?: string | undefined;
    disable_comments?: boolean | undefined;
    children?: {
        media_ids: string[];
    } | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"TWITTER_POST">;
    text: z.ZodOptional<z.ZodString>;
    media_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    link: z.ZodOptional<z.ZodString>;
    in_reply_to_status_id: z.ZodOptional<z.ZodString>;
    possibly_sensitive: z.ZodOptional<z.ZodBoolean>;
    reply_settings: z.ZodOptional<z.ZodEnum<["everyone", "mentioned_users", "following"]>>;
    scheduled_publish_time: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "TWITTER_POST";
    media_ids?: string[] | undefined;
    text?: string | undefined;
    link?: string | undefined;
    in_reply_to_status_id?: string | undefined;
    possibly_sensitive?: boolean | undefined;
    reply_settings?: "everyone" | "mentioned_users" | "following" | undefined;
    scheduled_publish_time?: number | undefined;
}, {
    type: "TWITTER_POST";
    media_ids?: string[] | undefined;
    text?: string | undefined;
    link?: string | undefined;
    in_reply_to_status_id?: string | undefined;
    possibly_sensitive?: boolean | undefined;
    reply_settings?: "everyone" | "mentioned_users" | "following" | undefined;
    scheduled_publish_time?: number | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"FACEBOOK_POST">;
    message: z.ZodOptional<z.ZodString>;
    link: z.ZodOptional<z.ZodString>;
    media_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    scheduled_publish_time: z.ZodOptional<z.ZodNumber>;
    published: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    type: "FACEBOOK_POST";
    published: boolean;
    message?: string | undefined;
    media_ids?: string[] | undefined;
    link?: string | undefined;
    scheduled_publish_time?: number | undefined;
}, {
    type: "FACEBOOK_POST";
    published: boolean;
    message?: string | undefined;
    media_ids?: string[] | undefined;
    link?: string | undefined;
    scheduled_publish_time?: number | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"TIKTOK_POST">;
    description: z.ZodString;
    statistics: z.ZodObject<{
        like_count: z.ZodNumber;
        comment_count: z.ZodNumber;
        share_count: z.ZodNumber;
        play_count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        like_count: number;
        comment_count: number;
        share_count: number;
        play_count: number;
    }, {
        like_count: number;
        comment_count: number;
        share_count: number;
        play_count: number;
    }>;
    video: z.ZodObject<{
        url: z.ZodString;
        duration: z.ZodNumber;
        cover: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        duration: number;
        url: string;
        cover: string;
    }, {
        duration: number;
        url: string;
        cover: string;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "TIKTOK_POST";
    description: string;
    statistics: {
        like_count: number;
        comment_count: number;
        share_count: number;
        play_count: number;
    };
    video: {
        duration: number;
        url: string;
        cover: string;
    };
}, {
    type: "TIKTOK_POST";
    description: string;
    statistics: {
        like_count: number;
        comment_count: number;
        share_count: number;
        play_count: number;
    };
    video: {
        duration: number;
        url: string;
        cover: string;
    };
}>]>;
export type PostData = z.infer<typeof ZPostData>;
