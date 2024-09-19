import { z } from "zod";
import { DocumentCategory } from "../../types/documentCategory";
export declare const DocumentTypeFactory: {
    INSTAGRAM_CAPTION: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, {
            hashtags: z.ZodArray<z.ZodString, "many">;
            postGoal: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            captionText: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            captionText: string;
        }, {
            captionText: string;
        }>;
        category: DocumentCategory;
    };
    INSTAGRAM_POST_IDEA: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, z.objectUtil.extendShape<{
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }, {
            hashtags: z.ZodArray<z.ZodString, "many">;
            postGoal: z.ZodString;
        }>>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            ideaDescription: z.ZodString;
            imageDescription: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            ideaDescription: string;
            imageDescription: string;
        }, {
            ideaDescription: string;
            imageDescription: string;
        }>;
        category: DocumentCategory;
    };
    INSTAGRAM_BIO_DESCRIPTION: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            bioDescription: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            bioDescription: string;
        }, {
            bioDescription: string;
        }>;
        category: DocumentCategory;
    };
    INSTAGRAM_STORY_IDEA: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            storyIdea: z.ZodString;
            storyDescription: z.ZodString;
            storyWidgets: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            storyIdea: string;
            storyDescription: string;
            storyWidgets: string;
        }, {
            storyIdea: string;
            storyDescription: string;
            storyWidgets: string;
        }>;
        category: DocumentCategory;
    };
    INSTAGRAM_REEL_IDEA: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            reelIdea: z.ZodString;
            reelDescription: z.ZodString;
            reelWidgets: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            reelIdea: string;
            reelDescription: string;
            reelWidgets: string;
        }, {
            reelIdea: string;
            reelDescription: string;
            reelWidgets: string;
        }>;
        category: DocumentCategory;
    };
    INSTAGRAM_REEL_SCRIPT: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, {
            script: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            script: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            script: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            reelScript: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            reelScript: string;
        }, {
            reelScript: string;
        }>;
        category: DocumentCategory;
    };
    LINKEDIN_POST_CAPTION: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, {
            hashtags: z.ZodArray<z.ZodString, "many">;
            postGoal: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            postCaption: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            postCaption: string;
        }, {
            postCaption: string;
        }>;
        category: DocumentCategory;
    };
    LINKEDIN_POST_IDEA: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, {
            useEmoji: z.ZodBoolean;
            useHashtag: z.ZodBoolean;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            postIdea: z.ZodString;
            imageDescription: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            imageDescription: string;
            postIdea: string;
        }, {
            imageDescription: string;
            postIdea: string;
        }>;
        category: DocumentCategory;
    };
    LINKEDIN_PAGE_ABOUT: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            pageAbout: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            pageAbout: string;
        }, {
            pageAbout: string;
        }>;
        category: DocumentCategory;
    };
    FACEBOOK_POST_CAPTION: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, {
            hashtags: z.ZodArray<z.ZodString, "many">;
            postGoal: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            postCaption: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            postCaption: string;
        }, {
            postCaption: string;
        }>;
        category: DocumentCategory;
    };
    FACEBOOK_POST_IDEA: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, {
            hashtags: z.ZodArray<z.ZodString, "many">;
            postGoal: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            postIdea: z.ZodString;
            imageIdea: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            postIdea: string;
            imageIdea: string;
        }, {
            postIdea: string;
            imageIdea: string;
        }>;
        category: DocumentCategory;
    };
    FACEBOOK_PAGE_ABOUT: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, {
            useEmoji: z.ZodBoolean;
            useHashtag: z.ZodBoolean;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            pageAbout: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            pageAbout: string;
        }, {
            pageAbout: string;
        }>;
        category: DocumentCategory;
    };
    TWITTER_TWIT: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, {
            useEmoji: z.ZodBoolean;
            useHashtag: z.ZodBoolean;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            tweetContent: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tweetContent: string;
        }, {
            tweetContent: string;
        }>;
        category: DocumentCategory;
    };
    THREADS_TWIT: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, {
            useEmoji: z.ZodBoolean;
            useHashtag: z.ZodBoolean;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            threadContent: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            threadContent: string;
        }, {
            threadContent: string;
        }>;
        category: DocumentCategory;
    };
    CART_ABANDONMENT_EMAIL: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
        }>, {
            incentives: z.ZodString;
            cartItems: z.ZodString;
            customerSupport: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            incentives: string;
            cartItems: string;
            customerSupport: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            incentives: string;
            cartItems: string;
            customerSupport: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            subject: z.ZodString;
            mailBody: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            subject: string;
            mailBody: string;
        }, {
            subject: string;
            mailBody: string;
        }>;
        category: DocumentCategory;
    };
    TRAFFIC_EMAIL: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
        }>, {
            contentTopic: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            contentTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            contentTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            subject: z.ZodString;
            mailBody: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            subject: string;
            mailBody: string;
        }, {
            subject: string;
            mailBody: string;
        }>;
        category: DocumentCategory;
    };
    PUSH_NOTIFICATION: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
        }>, {
            notificationGoal: z.ZodString;
            mainMessage: z.ZodString;
            cta: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            notificationGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            notificationGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            message: z.ZodString;
            title: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
            title: string;
        }, {
            message: string;
            title: string;
        }>;
        category: DocumentCategory;
    };
    NEWSLETTER_EMAIL: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
        }>, {
            mainTopic: z.ZodString;
            cta: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            mainTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            mainTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            subject: z.ZodString;
            mailBody: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            subject: string;
            mailBody: string;
        }, {
            subject: string;
            mailBody: string;
        }>;
        category: DocumentCategory;
    };
    PRODUCT_UPDATE_EMAIL: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
        }>, {
            productUpdates: z.ZodString;
            updateBenefits: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            productUpdates: string;
            updateBenefits: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            productUpdates: string;
            updateBenefits: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            subject: z.ZodString;
            mailBody: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            subject: string;
            mailBody: string;
        }, {
            subject: string;
            mailBody: string;
        }>;
        category: DocumentCategory;
    };
    WELCOME_EMAIL: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            subject: z.ZodString;
            mailBody: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            subject: string;
            mailBody: string;
        }, {
            subject: string;
            mailBody: string;
        }>;
        category: DocumentCategory;
    };
    EMAIL_CONTENT: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            subject: z.ZodString;
            mailBody: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            subject: string;
            mailBody: string;
        }, {
            subject: string;
            mailBody: string;
        }>;
        category: DocumentCategory;
    };
    FLASH_SALE_SMS: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            legalInformation: z.ZodOptional<z.ZodString>;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, {
            promotionDetails: z.ZodString;
            redemptionMethod: z.ZodString;
            duration: z.ZodOptional<z.ZodString>;
            cta: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            promotionDetails: string;
            redemptionMethod: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
            duration?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            promotionDetails: string;
            redemptionMethod: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
            duration?: string | undefined;
        }>;
        output: z.ZodObject<{
            smsContent: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            smsContent: string;
        }, {
            smsContent: string;
        }>;
        category: DocumentCategory;
    };
    NOTIFICATION_SMS: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            legalInformation: z.ZodOptional<z.ZodString>;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, {
            notificationType: z.ZodString;
            notificationDetails: z.ZodString;
            supportContact: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            notificationType: string;
            notificationDetails: string;
            supportContact: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            notificationType: string;
            notificationDetails: string;
            supportContact: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            smsContent: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            smsContent: string;
        }, {
            smsContent: string;
        }>;
        category: DocumentCategory;
    };
    SMS_CONTENT: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, z.objectUtil.extendShape<{
            legalInformation: z.ZodOptional<z.ZodString>;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }, {
            cta: z.ZodString;
        }>>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            smsContent: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            smsContent: string;
        }, {
            smsContent: string;
        }>;
        category: DocumentCategory;
    };
    SMS_IDEA: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            legalInformation: z.ZodOptional<z.ZodString>;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            smsIdea: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            smsIdea: string;
        }, {
            smsIdea: string;
        }>;
        category: DocumentCategory;
    };
    PHONE_CALL_SCRIPT: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodString;
        }>, {
            script: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            script: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            script: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            phoneCallScript: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            phoneCallScript: string;
        }, {
            phoneCallScript: string;
        }>;
        category: DocumentCategory;
    };
    LINKEDIN_SPONSORED_AD: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {}>, {
            adGoal: z.ZodString;
            mainMessage: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            mainMessage: string;
            adGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            mainMessage: string;
            adGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            AdText: z.ZodString;
            AdHeadline: z.ZodString;
            captionText: z.ZodString;
            callToActionButton: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            captionText: string;
            AdText: string;
            AdHeadline: string;
            callToActionButton: string;
        }, {
            captionText: string;
            AdText: string;
            AdHeadline: string;
            callToActionButton: string;
        }>;
        category: DocumentCategory;
    };
    FACEBOOK_SPONSORED_AD: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {}>, {
            adGoal: z.ZodString;
            mainMessage: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            mainMessage: string;
            adGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            mainMessage: string;
            adGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            AdText: z.ZodString;
            AdHeadline: z.ZodString;
            captionText: z.ZodString;
            callToActionButton: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            captionText: string;
            AdText: string;
            AdHeadline: string;
            callToActionButton: string;
        }, {
            captionText: string;
            AdText: string;
            AdHeadline: string;
            callToActionButton: string;
        }>;
        category: DocumentCategory;
    };
    INSTAGRAM_SPONSORED_AD: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {}>, {
            adGoal: z.ZodString;
            mainMessage: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            mainMessage: string;
            adGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            mainMessage: string;
            adGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            primaryText: z.ZodString;
            callToAction: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            primaryText: string;
            callToAction: string;
        }, {
            primaryText: string;
            callToAction: string;
        }>;
        category: DocumentCategory;
    };
    TWITTER_SPONSORED_AD: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {}>, {
            adGoal: z.ZodString;
            mainMessage: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            mainMessage: string;
            adGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            mainMessage: string;
            adGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            introductoryText: z.ZodString;
            headline: z.ZodString;
            description: z.ZodString;
            callToActionButton: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            description: string;
            callToActionButton: string;
            introductoryText: string;
            headline: string;
        }, {
            description: string;
            callToActionButton: string;
            introductoryText: string;
            headline: string;
        }>;
        category: DocumentCategory;
    };
    GOOGLE_ADS_KEYWORDS: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {}>, {
            keywords: z.ZodArray<z.ZodString, "many">;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            keywords: string[];
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            keywords: string[];
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            keywordsType: z.ZodString;
            adKeywords: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            keywordsType: string;
            adKeywords: string[];
        }, {
            keywordsType: string;
            adKeywords: string[];
        }>;
        category: DocumentCategory;
    };
    GOOGLE_ADS_IDEA: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {}>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            adIdea: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            adIdea: string;
        }, {
            adIdea: string;
        }>;
        category: DocumentCategory;
    };
    SOCIAL_AD: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {}>, {
            adGoal: z.ZodString;
            mainMessage: z.ZodString;
            cta: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            mainMessage: string;
            adGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            mainMessage: string;
            adGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            primaryText: z.ZodString;
            headline: z.ZodString;
            description: z.ZodString;
            callToActionButton: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            description: string;
            callToActionButton: string;
            primaryText: string;
            headline: string;
        }, {
            description: string;
            callToActionButton: string;
            primaryText: string;
            headline: string;
        }>;
        category: DocumentCategory;
    };
    EMAIL_AD_PROMO: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {}>, {
            offerPromotion: z.ZodString;
            cta: z.ZodString;
            personalization: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            offerPromotion: string;
            personalization: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            offerPromotion: string;
            personalization: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            subject: z.ZodString;
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            subject: string;
            content: string;
        }, {
            subject: string;
            content: string;
        }>;
        category: DocumentCategory;
    };
    SEARCH_AD: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {}>, {
            productOrService: z.ZodString;
            keywords: z.ZodArray<z.ZodString, "many">;
            cta: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            keywords: string[];
            productOrService: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            cta: string;
            keywords: string[];
            productOrService: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: z.ZodObject<{
            headlines: z.ZodArray<z.ZodString, "many">;
            descriptions: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            headlines: string[];
            descriptions: string;
        }, {
            headlines: string[];
            descriptions: string;
        }>;
        category: DocumentCategory;
    };
    WEBSITE_ABOUT: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodOptional<z.ZodString>;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            aboutContent: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            aboutContent: string;
        }, {
            aboutContent: string;
        }>;
        category: DocumentCategory;
    };
    WEBSITE_FAQ: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodOptional<z.ZodString>;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, {
            question: z.ZodString;
            answer: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            question: string;
            answer: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            question: string;
            answer: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            faqEntries: z.ZodArray<z.ZodObject<{
                question: z.ZodString;
                answer: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                question: string;
                answer: string;
            }, {
                question: string;
                answer: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            faqEntries: {
                question: string;
                answer: string;
            }[];
        }, {
            faqEntries: {
                question: string;
                answer: string;
            }[];
        }>;
        category: DocumentCategory;
    };
    WEBSITE_TESTEMONIAL: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodOptional<z.ZodString>;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            testimonial: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            testimonial: string;
        }, {
            testimonial: string;
        }>;
        category: DocumentCategory;
    };
    ARTICLE: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodOptional<z.ZodString>;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            blogHtml: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>;
        category: DocumentCategory;
    };
    WEBSITE_PRODUCT_DESCRIPTION: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodOptional<z.ZodString>;
            additionalInformation: z.ZodOptional<z.ZodString>;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
        output: z.ZodObject<{
            productName: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            description: string;
            productName: string;
        }, {
            description: string;
            productName: string;
        }>;
        category: DocumentCategory;
    };
    BLOG_POST_OPINION: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodOptional<z.ZodString>;
            keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }>, {
            blogTopic: z.ZodString;
            blogOpinion: z.ZodString;
            blogBrief: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            blogTopic: string;
            blogOpinion: string;
            blogBrief: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            blogTopic: string;
            blogOpinion: string;
            blogBrief: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }>;
        output: z.ZodObject<{
            blogHtml: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>;
        category: DocumentCategory;
    };
    BLOG_POST_TIPS: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodOptional<z.ZodString>;
            keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }>, {
            blogTopic: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }>;
        output: z.ZodObject<{
            blogHtml: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>;
        category: DocumentCategory;
    };
    BLOG_POST_GUIDE: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodOptional<z.ZodString>;
            keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }>, {
            blogTopic: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }>;
        output: z.ZodObject<{
            blogHtml: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>;
        category: DocumentCategory;
    };
    BLOG_POST_COMPARISON: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodOptional<z.ZodString>;
            keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }>, {
            blogTopic: z.ZodString;
            comparisonFocusPoints: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            blogTopic: string;
            comparisonFocusPoints: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            blogTopic: string;
            comparisonFocusPoints: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }>;
        output: z.ZodObject<{
            blogHtml: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>;
        category: DocumentCategory;
    };
    BLOG_POST_CASE_STUDY: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodOptional<z.ZodString>;
            keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }>, {
            solutionDescription: z.ZodString;
            results: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            solutionDescription: string;
            results: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            solutionDescription: string;
            results: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }>;
        output: z.ZodObject<{
            blogHtml: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>;
        category: DocumentCategory;
    };
    BLOG_POST_GENERAL: {
        inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            description: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            audienceId: z.ZodString;
            tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
        }, {
            cta: z.ZodOptional<z.ZodString>;
            keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }>, {
            blogTopic: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }>;
        output: z.ZodObject<{
            blogHtml: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>;
        category: DocumentCategory;
    };
};
