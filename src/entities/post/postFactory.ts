import { PostEntityType } from "./postEntityType";

// Instagram Post Type
export type InstagramPost = {
  id: string; // Post ID
  caption?: string; // Caption text
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"; // Type of media
  media_url: string; // URL to the media
  timestamp: string; // Time when the post was created
  owner: {
    id: string; // Owner’s user ID
    username: string; // Owner’s username
  };
  like_count: number; // Number of likes
  comments_count?: number; // Number of comments
  permalink: string; // URL to the post
  children?: {
    data?: {
      media_url: string;
    }[];
  }; // Media in a carousel
};

// Twitter Tweet Type
export type TwitterTweet = {
  id: string; // Unique Tweet ID
  text: string; // Tweet content (up to 280 characters)
  created_at: string; // Timestamp in ISO 8601
  author_id: string; // Author’s user ID
  public_metrics: {
    retweet_count: number; // Retweet count
    reply_count: number; // Reply count
    like_count: number; // Like count
    quote_count: number; // Quote count
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

// Facebook Post Type
export type FacebookPost = {
  id: string; // Post ID
  message?: string; // Content of the post
  created_time: string; // Time when the post was created
  from?: {
    id: string; // User ID who posted
    name: string; // Name of the poster
  };
  likes?: {
    summary: {
      total_count: number; // Number of likes
    };
  };
  comments?: {
    summary: {
      total_count: number; // Number of comments
    };
  };
  shares?: {
    count: number; // Number of shares
  };
  attachments?: {
    data: {
      media?: {
        image?: {
          src: string; // Image URL if post contains media
        };
      };
    }[];
  };
};

// TikTok Post Type
export type TiktokPost = {
  id: string; // Post ID
  description: string; // Video description
  created_at: string; // Creation time
  author: {
    id: string; // Author’s ID
    unique_id: string; // Author’s username
  };
  statistics: {
    like_count: number; // Number of likes
    comment_count: number; // Number of comments
    share_count: number; // Number of shares
    play_count: number; // Number of plays
  };
  video: {
    url: string; // Video URL
    duration: number; // Duration in seconds
    cover: string; // Cover image URL
  };
};

// PostFactory Types
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
