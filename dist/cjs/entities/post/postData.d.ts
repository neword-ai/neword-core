import { z } from "zod";
export declare const ZPostData: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"INSTAGRAM_POST">;
    media_type: z.ZodEnum<["IMAGE", "VIDEO", "CAROUSEL_ALBUM"]>;
    like_count: z.ZodNumber;
    comments_count: z.ZodOptional<z.ZodNumber>;
    permalink: z.ZodString;
    children: z.ZodOptional<z.ZodObject<{
        data: z.ZodOptional<z.ZodArray<z.ZodObject<{
            media_url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            media_url: string;
        }, {
            media_url: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        data?: {
            media_url: string;
        }[] | undefined;
    }, {
        data?: {
            media_url: string;
        }[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "INSTAGRAM_POST";
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    like_count: number;
    permalink: string;
    comments_count?: number | undefined;
    children?: {
        data?: {
            media_url: string;
        }[] | undefined;
    } | undefined;
}, {
    type: "INSTAGRAM_POST";
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    like_count: number;
    permalink: string;
    comments_count?: number | undefined;
    children?: {
        data?: {
            media_url: string;
        }[] | undefined;
    } | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"TWITTER_TWEET">;
    text: z.ZodString;
    public_metrics: z.ZodObject<{
        retweet_count: z.ZodNumber;
        reply_count: z.ZodNumber;
        like_count: z.ZodNumber;
        quote_count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        like_count: number;
        retweet_count: number;
        reply_count: number;
        quote_count: number;
    }, {
        like_count: number;
        retweet_count: number;
        reply_count: number;
        quote_count: number;
    }>;
    entities: z.ZodOptional<z.ZodObject<{
        hashtags: z.ZodOptional<z.ZodArray<z.ZodObject<{
            tag: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tag: string;
        }, {
            tag: string;
        }>, "many">>;
        mentions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            username: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            username: string;
        }, {
            username: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        hashtags?: {
            tag: string;
        }[] | undefined;
        mentions?: {
            username: string;
        }[] | undefined;
    }, {
        hashtags?: {
            tag: string;
        }[] | undefined;
        mentions?: {
            username: string;
        }[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "TWITTER_TWEET";
    text: string;
    public_metrics: {
        like_count: number;
        retweet_count: number;
        reply_count: number;
        quote_count: number;
    };
    entities?: {
        hashtags?: {
            tag: string;
        }[] | undefined;
        mentions?: {
            username: string;
        }[] | undefined;
    } | undefined;
}, {
    type: "TWITTER_TWEET";
    text: string;
    public_metrics: {
        like_count: number;
        retweet_count: number;
        reply_count: number;
        quote_count: number;
    };
    entities?: {
        hashtags?: {
            tag: string;
        }[] | undefined;
        mentions?: {
            username: string;
        }[] | undefined;
    } | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"FACEBOOK_POST">;
    message: z.ZodOptional<z.ZodString>;
    published: z.ZodBoolean;
    imageUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "FACEBOOK_POST";
    published: boolean;
    message?: string | undefined;
    imageUrl?: string | undefined;
}, {
    type: "FACEBOOK_POST";
    published: boolean;
    message?: string | undefined;
    imageUrl?: string | undefined;
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
