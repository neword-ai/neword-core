import { z } from "zod";
export declare const ZPostData: z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    media_url: z.ZodOptional<z.ZodString>;
    created_at: z.ZodString;
    owner_id: z.ZodString;
}, {
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
}>, "strip", z.ZodTypeAny, {
    type: "INSTAGRAM_POST";
    id: string;
    created_at: string;
    owner_id: string;
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    like_count: number;
    permalink: string;
    content?: string | undefined;
    media_url?: string | undefined;
    comments_count?: number | undefined;
    children?: {
        data?: {
            media_url: string;
        }[] | undefined;
    } | undefined;
}, {
    type: "INSTAGRAM_POST";
    id: string;
    created_at: string;
    owner_id: string;
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    like_count: number;
    permalink: string;
    content?: string | undefined;
    media_url?: string | undefined;
    comments_count?: number | undefined;
    children?: {
        data?: {
            media_url: string;
        }[] | undefined;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    media_url: z.ZodOptional<z.ZodString>;
    created_at: z.ZodString;
    owner_id: z.ZodString;
}, {
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
}>, "strip", z.ZodTypeAny, {
    type: "TWITTER_TWEET";
    id: string;
    created_at: string;
    owner_id: string;
    text: string;
    public_metrics: {
        like_count: number;
        retweet_count: number;
        reply_count: number;
        quote_count: number;
    };
    content?: string | undefined;
    media_url?: string | undefined;
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
    id: string;
    created_at: string;
    owner_id: string;
    text: string;
    public_metrics: {
        like_count: number;
        retweet_count: number;
        reply_count: number;
        quote_count: number;
    };
    content?: string | undefined;
    media_url?: string | undefined;
    entities?: {
        hashtags?: {
            tag: string;
        }[] | undefined;
        mentions?: {
            username: string;
        }[] | undefined;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    media_url: z.ZodOptional<z.ZodString>;
    created_at: z.ZodString;
    owner_id: z.ZodString;
}, {
    type: z.ZodLiteral<"FACEBOOK_POST">;
    message: z.ZodOptional<z.ZodString>;
    created_time: z.ZodString;
    from: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    likes: z.ZodOptional<z.ZodObject<{
        summary: z.ZodObject<{
            total_count: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            total_count: number;
        }, {
            total_count: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        summary: {
            total_count: number;
        };
    }, {
        summary: {
            total_count: number;
        };
    }>>;
    comments: z.ZodOptional<z.ZodObject<{
        summary: z.ZodObject<{
            total_count: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            total_count: number;
        }, {
            total_count: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        summary: {
            total_count: number;
        };
    }, {
        summary: {
            total_count: number;
        };
    }>>;
    shares: z.ZodOptional<z.ZodObject<{
        count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        count: number;
    }, {
        count: number;
    }>>;
    attachments: z.ZodOptional<z.ZodObject<{
        data: z.ZodArray<z.ZodObject<{
            media: z.ZodOptional<z.ZodObject<{
                image: z.ZodOptional<z.ZodObject<{
                    src: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    src: string;
                }, {
                    src: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                image?: {
                    src: string;
                } | undefined;
            }, {
                image?: {
                    src: string;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            media?: {
                image?: {
                    src: string;
                } | undefined;
            } | undefined;
        }, {
            media?: {
                image?: {
                    src: string;
                } | undefined;
            } | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        data: {
            media?: {
                image?: {
                    src: string;
                } | undefined;
            } | undefined;
        }[];
    }, {
        data: {
            media?: {
                image?: {
                    src: string;
                } | undefined;
            } | undefined;
        }[];
    }>>;
}>, "strip", z.ZodTypeAny, {
    type: "FACEBOOK_POST";
    id: string;
    created_at: string;
    owner_id: string;
    created_time: string;
    message?: string | undefined;
    content?: string | undefined;
    media_url?: string | undefined;
    from?: {
        id: string;
        name: string;
    } | undefined;
    likes?: {
        summary: {
            total_count: number;
        };
    } | undefined;
    comments?: {
        summary: {
            total_count: number;
        };
    } | undefined;
    shares?: {
        count: number;
    } | undefined;
    attachments?: {
        data: {
            media?: {
                image?: {
                    src: string;
                } | undefined;
            } | undefined;
        }[];
    } | undefined;
}, {
    type: "FACEBOOK_POST";
    id: string;
    created_at: string;
    owner_id: string;
    created_time: string;
    message?: string | undefined;
    content?: string | undefined;
    media_url?: string | undefined;
    from?: {
        id: string;
        name: string;
    } | undefined;
    likes?: {
        summary: {
            total_count: number;
        };
    } | undefined;
    comments?: {
        summary: {
            total_count: number;
        };
    } | undefined;
    shares?: {
        count: number;
    } | undefined;
    attachments?: {
        data: {
            media?: {
                image?: {
                    src: string;
                } | undefined;
            } | undefined;
        }[];
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    media_url: z.ZodOptional<z.ZodString>;
    created_at: z.ZodString;
    owner_id: z.ZodString;
}, {
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
        url: string;
        duration: number;
        cover: string;
    }, {
        url: string;
        duration: number;
        cover: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    type: "TIKTOK_POST";
    description: string;
    id: string;
    created_at: string;
    owner_id: string;
    statistics: {
        like_count: number;
        comment_count: number;
        share_count: number;
        play_count: number;
    };
    video: {
        url: string;
        duration: number;
        cover: string;
    };
    content?: string | undefined;
    media_url?: string | undefined;
}, {
    type: "TIKTOK_POST";
    description: string;
    id: string;
    created_at: string;
    owner_id: string;
    statistics: {
        like_count: number;
        comment_count: number;
        share_count: number;
        play_count: number;
    };
    video: {
        url: string;
        duration: number;
        cover: string;
    };
    content?: string | undefined;
    media_url?: string | undefined;
}>]>;
export type PostData = z.infer<typeof ZPostData>;
