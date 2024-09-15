import { PostEntityType } from "./postEntityType";
export type InstagramPost = {
    id: string;
    caption?: string;
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    media_url: string;
    timestamp: string;
    owner: {
        id: string;
        username: string;
    };
    like_count: number;
    comments_count?: number;
    permalink: string;
    children?: {
        data?: {
            media_url: string;
        }[];
    };
};
export type TwitterTweet = {
    id: string;
    text: string;
    created_at: string;
    author_id: string;
    public_metrics: {
        retweet_count: number;
        reply_count: number;
        like_count: number;
        quote_count: number;
    };
    entities?: {
        hashtags?: {
            tag: string;
        }[];
        mentions?: {
            username: string;
        }[];
    };
};
export type FacebookPost = {
    id: string;
    message?: string;
    created_time: string;
    from?: {
        id: string;
        name: string;
    };
    likes?: {
        summary: {
            total_count: number;
        };
    };
    comments?: {
        summary: {
            total_count: number;
        };
    };
    shares?: {
        count: number;
    };
    attachments?: {
        data: {
            media?: {
                image?: {
                    src: string;
                };
            };
        }[];
    };
};
export type TiktokPost = {
    id: string;
    description: string;
    created_at: string;
    author: {
        id: string;
        unique_id: string;
    };
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
};
export type PostFactory = {
    [PostEntityType.INSTAGRAM_POST]: InstagramPost;
    [PostEntityType.TWITTER_TWIT]: TwitterTweet;
    [PostEntityType.FACEBOOK_POST]: FacebookPost;
    [PostEntityType.TIKTOK_POST]: TiktokPost;
    [PostEntityType.ARTICLE]: TiktokPost;
    [PostEntityType.EMAIL]: TiktokPost;
    [PostEntityType.SMS]: TiktokPost;
    [PostEntityType.WEBSITE]: TiktokPost;
    [PostEntityType.LINKEDIN_POST]: TiktokPost;
    [PostEntityType.THREADS_TWIT]: TiktokPost;
};
