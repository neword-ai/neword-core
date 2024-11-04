import { ZodObject } from "zod";
import { DocumentEntityType } from "../../types/DocumentEntityType";
export declare const schemaPerDocType: {
    INSTAGRAM_CAPTION: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.INSTAGRAM_CAPTION>;
        output: import("zod").ZodArray<ZodObject<{
            captionText: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            captionText: string;
        }, {
            captionText: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            hashtags: import("zod").ZodArray<import("zod").ZodString, "many">;
            postGoal: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.INSTAGRAM_CAPTION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            captionText: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.INSTAGRAM_CAPTION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            captionText: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    INSTAGRAM_SPONSORED_AD: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.INSTAGRAM_SPONSORED_AD>;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {}>, {
            adGoal: import("zod").ZodString;
            mainMessage: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: import("zod").ZodArray<ZodObject<{
            primaryText: import("zod").ZodString;
            callToAction: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            primaryText: string;
            callToAction: string;
        }, {
            primaryText: string;
            callToAction: string;
        }>, "many">;
        category: import("zod").ZodLiteral<import("../..").DocumentCategory.PAID>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.INSTAGRAM_SPONSORED_AD;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            primaryText: string;
            callToAction: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
        category: import("../..").DocumentCategory.PAID;
    }, {
        type: DocumentEntityType.INSTAGRAM_SPONSORED_AD;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            primaryText: string;
            callToAction: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
        category: import("../..").DocumentCategory.PAID;
    }>;
    INSTAGRAM_POST_IDEA: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.INSTAGRAM_POST_IDEA>;
        output: import("zod").ZodArray<ZodObject<{
            ideaDescription: import("zod").ZodString;
            imageDescription: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            ideaDescription: string;
            imageDescription: string;
        }, {
            ideaDescription: string;
            imageDescription: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            hashtags: import("zod").ZodArray<import("zod").ZodString, "many">;
            postGoal: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.INSTAGRAM_POST_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            ideaDescription: string;
            imageDescription: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.INSTAGRAM_POST_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            ideaDescription: string;
            imageDescription: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    INSTAGRAM_BIO_DESCRIPTION: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION>;
        output: import("zod").ZodArray<ZodObject<{
            bioDescription: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            bioDescription: string;
        }, {
            bioDescription: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            bioDescription: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            bioDescription: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    INSTAGRAM_STORY_IDEA: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.INSTAGRAM_STORY_IDEA>;
        output: import("zod").ZodArray<ZodObject<{
            storyIdea: import("zod").ZodString;
            storyDescription: import("zod").ZodString;
            storyWidgets: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            storyIdea: string;
            storyDescription: string;
            storyWidgets: string;
        }, {
            storyIdea: string;
            storyDescription: string;
            storyWidgets: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.INSTAGRAM_STORY_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            storyIdea: string;
            storyDescription: string;
            storyWidgets: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.INSTAGRAM_STORY_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            storyIdea: string;
            storyDescription: string;
            storyWidgets: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    INSTAGRAM_REEL_IDEA: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.INSTAGRAM_REEL_IDEA>;
        output: import("zod").ZodArray<ZodObject<{
            reelIdea: import("zod").ZodString;
            reelDescription: import("zod").ZodString;
            reelWidgets: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            reelIdea: string;
            reelDescription: string;
            reelWidgets: string;
        }, {
            reelIdea: string;
            reelDescription: string;
            reelWidgets: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.INSTAGRAM_REEL_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            reelIdea: string;
            reelDescription: string;
            reelWidgets: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.INSTAGRAM_REEL_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            reelIdea: string;
            reelDescription: string;
            reelWidgets: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    INSTAGRAM_REEL_SCRIPT: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.INSTAGRAM_REEL_SCRIPT>;
        output: import("zod").ZodArray<ZodObject<{
            reelScript: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            reelScript: string;
        }, {
            reelScript: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            script: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            script: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            script: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.INSTAGRAM_REEL_SCRIPT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            reelScript: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            script: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.INSTAGRAM_REEL_SCRIPT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            reelScript: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            script: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    LINKEDIN_POST_CAPTION: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.LINKEDIN_POST_CAPTION>;
        output: import("zod").ZodArray<ZodObject<{
            postCaption: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            postCaption: string;
        }, {
            postCaption: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            hashtags: import("zod").ZodArray<import("zod").ZodString, "many">;
            postGoal: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.LINKEDIN_POST_CAPTION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            postCaption: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.LINKEDIN_POST_CAPTION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            postCaption: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    LINKEDIN_POST_IDEA: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.LINKEDIN_POST_IDEA>;
        output: import("zod").ZodArray<ZodObject<{
            postIdea: import("zod").ZodString;
            imageDescription: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            imageDescription: string;
            postIdea: string;
        }, {
            imageDescription: string;
            postIdea: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            useEmoji: import("zod").ZodBoolean;
            useHashtag: import("zod").ZodBoolean;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.LINKEDIN_POST_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            imageDescription: string;
            postIdea: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.LINKEDIN_POST_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            imageDescription: string;
            postIdea: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    LINKEDIN_PAGE_ABOUT: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.LINKEDIN_PAGE_ABOUT>;
        output: import("zod").ZodArray<ZodObject<{
            pageAbout: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            pageAbout: string;
        }, {
            pageAbout: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.LINKEDIN_PAGE_ABOUT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            pageAbout: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.LINKEDIN_PAGE_ABOUT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            pageAbout: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    FACEBOOK_POST_CAPTION: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.FACEBOOK_POST_CAPTION>;
        output: import("zod").ZodArray<ZodObject<{
            postCaption: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            postCaption: string;
        }, {
            postCaption: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            hashtags: import("zod").ZodArray<import("zod").ZodString, "many">;
            postGoal: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.FACEBOOK_POST_CAPTION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            postCaption: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.FACEBOOK_POST_CAPTION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            postCaption: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    FACEBOOK_POST_IDEA: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.FACEBOOK_POST_IDEA>;
        output: import("zod").ZodArray<ZodObject<{
            postIdea: import("zod").ZodString;
            imageIdea: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            postIdea: string;
            imageIdea: string;
        }, {
            postIdea: string;
            imageIdea: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            hashtags: import("zod").ZodArray<import("zod").ZodString, "many">;
            postGoal: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.FACEBOOK_POST_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            postIdea: string;
            imageIdea: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.FACEBOOK_POST_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            postIdea: string;
            imageIdea: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            hashtags: string[];
            postGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    FACEBOOK_PAGE_ABOUT: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.FACEBOOK_PAGE_ABOUT>;
        output: import("zod").ZodArray<ZodObject<{
            pageAbout: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            pageAbout: string;
        }, {
            pageAbout: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            useEmoji: import("zod").ZodBoolean;
            useHashtag: import("zod").ZodBoolean;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.FACEBOOK_PAGE_ABOUT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            pageAbout: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.FACEBOOK_PAGE_ABOUT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            pageAbout: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    TWITTER_TWIT: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.TWITTER_TWIT>;
        output: import("zod").ZodArray<ZodObject<{
            tweetContent: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            tweetContent: string;
        }, {
            tweetContent: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            useEmoji: import("zod").ZodBoolean;
            useHashtag: import("zod").ZodBoolean;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.TWITTER_TWIT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            tweetContent: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.TWITTER_TWIT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            tweetContent: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    THREADS_TWIT: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.THREADS_TWIT>;
        output: import("zod").ZodArray<ZodObject<{
            threadContent: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            threadContent: string;
        }, {
            threadContent: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            useEmoji: import("zod").ZodBoolean;
            useHashtag: import("zod").ZodBoolean;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.THREADS_TWIT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            threadContent: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.THREADS_TWIT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            threadContent: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            useEmoji: boolean;
            useHashtag: boolean;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    CART_ABANDONMENT_EMAIL: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.CART_ABANDONMENT_EMAIL>;
        output: import("zod").ZodArray<ZodObject<{
            subject: import("zod").ZodString;
            mailBody: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            subject: string;
            mailBody: string;
        }, {
            subject: string;
            mailBody: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
        }>, {
            incentives: import("zod").ZodString;
            cartItems: import("zod").ZodString;
            customerSupport: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            incentives: string;
            cartItems: string;
            customerSupport: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            incentives: string;
            cartItems: string;
            customerSupport: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.CART_ABANDONMENT_EMAIL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            mailBody: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            incentives: string;
            cartItems: string;
            customerSupport: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }, {
        type: DocumentEntityType.CART_ABANDONMENT_EMAIL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            mailBody: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            incentives: string;
            cartItems: string;
            customerSupport: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }>;
    TRAFFIC_EMAIL: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.TRAFFIC_EMAIL>;
        output: import("zod").ZodArray<ZodObject<{
            subject: import("zod").ZodString;
            mailBody: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            subject: string;
            mailBody: string;
        }, {
            subject: string;
            mailBody: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
        }>, {
            contentTopic: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            contentTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            contentTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.TRAFFIC_EMAIL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            mailBody: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            contentTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }, {
        type: DocumentEntityType.TRAFFIC_EMAIL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            mailBody: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            contentTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }>;
    PUSH_NOTIFICATION: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.PUSH_NOTIFICATION>;
        output: import("zod").ZodArray<ZodObject<{
            message: import("zod").ZodString;
            title: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            message: string;
            title: string;
        }, {
            message: string;
            title: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
        }>, {
            notificationGoal: import("zod").ZodString;
            mainMessage: import("zod").ZodString;
            cta: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            mainMessage: string;
            notificationGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            mainMessage: string;
            notificationGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.PUSH_NOTIFICATION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            message: string;
            title: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            mainMessage: string;
            notificationGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }, {
        type: DocumentEntityType.PUSH_NOTIFICATION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            message: string;
            title: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            mainMessage: string;
            notificationGoal: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }>;
    NEWSLETTER_EMAIL: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.NEWSLETTER_EMAIL>;
        output: import("zod").ZodArray<ZodObject<{
            subject: import("zod").ZodString;
            mailBody: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            subject: string;
            mailBody: string;
        }, {
            subject: string;
            mailBody: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
        }>, {
            mainTopic: import("zod").ZodString;
            cta: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            mainTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            mainTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.NEWSLETTER_EMAIL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            mailBody: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            mainTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }, {
        type: DocumentEntityType.NEWSLETTER_EMAIL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            mailBody: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            mainTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }>;
    PRODUCT_UPDATE_EMAIL: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.PRODUCT_UPDATE_EMAIL>;
        output: import("zod").ZodArray<ZodObject<{
            subject: import("zod").ZodString;
            mailBody: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            subject: string;
            mailBody: string;
        }, {
            subject: string;
            mailBody: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
        }>, {
            productUpdates: import("zod").ZodString;
            updateBenefits: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            productUpdates: string;
            updateBenefits: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            productUpdates: string;
            updateBenefits: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.PRODUCT_UPDATE_EMAIL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            mailBody: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            productUpdates: string;
            updateBenefits: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }, {
        type: DocumentEntityType.PRODUCT_UPDATE_EMAIL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            mailBody: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            productUpdates: string;
            updateBenefits: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }>;
    WELCOME_EMAIL: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.WELCOME_EMAIL>;
        output: import("zod").ZodArray<ZodObject<{
            subject: import("zod").ZodString;
            mailBody: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            subject: string;
            mailBody: string;
        }, {
            subject: string;
            mailBody: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.WELCOME_EMAIL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            mailBody: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }, {
        type: DocumentEntityType.WELCOME_EMAIL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            mailBody: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }>;
    EMAIL_CONTENT: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.EMAIL_CONTENT>;
        output: import("zod").ZodArray<ZodObject<{
            subject: import("zod").ZodString;
            mailBody: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            subject: string;
            mailBody: string;
        }, {
            subject: string;
            mailBody: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.EMAIL_CONTENT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            mailBody: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }, {
        type: DocumentEntityType.EMAIL_CONTENT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            mailBody: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }>;
    FLASH_SALE_SMS: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.FLASH_SALE_SMS>;
        output: import("zod").ZodArray<ZodObject<{
            smsContent: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            smsContent: string;
        }, {
            smsContent: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            legalInformation: import("zod").ZodOptional<import("zod").ZodString>;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            promotionDetails: import("zod").ZodString;
            redemptionMethod: import("zod").ZodString;
            duration: import("zod").ZodOptional<import("zod").ZodString>;
            cta: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
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
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            promotionDetails: string;
            redemptionMethod: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
            duration?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.FLASH_SALE_SMS;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            smsContent: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            promotionDetails: string;
            redemptionMethod: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
            duration?: string | undefined;
        };
    }, {
        type: DocumentEntityType.FLASH_SALE_SMS;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            smsContent: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            promotionDetails: string;
            redemptionMethod: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
            duration?: string | undefined;
        };
    }>;
    NOTIFICATION_SMS: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.NOTIFICATION_SMS>;
        output: import("zod").ZodArray<ZodObject<{
            smsContent: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            smsContent: string;
        }, {
            smsContent: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            legalInformation: import("zod").ZodOptional<import("zod").ZodString>;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            notificationType: import("zod").ZodString;
            notificationDetails: import("zod").ZodString;
            supportContact: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            notificationType: string;
            notificationDetails: string;
            supportContact: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            notificationType: string;
            notificationDetails: string;
            supportContact: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.NOTIFICATION_SMS;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            smsContent: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            notificationType: string;
            notificationDetails: string;
            supportContact: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.NOTIFICATION_SMS;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            smsContent: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            notificationType: string;
            notificationDetails: string;
            supportContact: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        };
    }>;
    SMS_CONTENT: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.SMS_CONTENT>;
        output: import("zod").ZodArray<ZodObject<{
            smsContent: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            smsContent: string;
        }, {
            smsContent: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, import("zod").objectUtil.extendShape<{
            legalInformation: import("zod").ZodOptional<import("zod").ZodString>;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            cta: import("zod").ZodString;
        }>>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.SMS_CONTENT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            smsContent: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.SMS_CONTENT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            smsContent: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        };
    }>;
    SMS_IDEA: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.SMS_IDEA>;
        output: import("zod").ZodArray<ZodObject<{
            smsIdea: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            smsIdea: string;
        }, {
            smsIdea: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            legalInformation: import("zod").ZodOptional<import("zod").ZodString>;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.SMS_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            smsIdea: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.SMS_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            smsIdea: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            additionalInformation?: string | undefined;
            legalInformation?: string | undefined;
        };
    }>;
    GOOGLE_ADS_KEYWORDS: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.GOOGLE_ADS_KEYWORDS>;
        output: import("zod").ZodArray<ZodObject<{
            keywordsType: import("zod").ZodString;
            adKeywords: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            keywordsType: string;
            adKeywords: string[];
        }, {
            keywordsType: string;
            adKeywords: string[];
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {}>, {
            keywords: import("zod").ZodArray<import("zod").ZodString, "many">;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            keywords: string[];
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            keywords: string[];
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.GOOGLE_ADS_KEYWORDS;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            keywordsType: string;
            adKeywords: string[];
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            keywords: string[];
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }, {
        type: DocumentEntityType.GOOGLE_ADS_KEYWORDS;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            keywordsType: string;
            adKeywords: string[];
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            keywords: string[];
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }>;
    GOOGLE_ADS_IDEA: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.GOOGLE_ADS_IDEA>;
        output: import("zod").ZodArray<ZodObject<{
            adIdea: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            adIdea: string;
        }, {
            adIdea: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {}>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.GOOGLE_ADS_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            adIdea: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }, {
        type: DocumentEntityType.GOOGLE_ADS_IDEA;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            adIdea: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }>;
    SOCIAL_AD: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.SOCIAL_AD>;
        output: import("zod").ZodArray<ZodObject<{
            primaryText: import("zod").ZodString;
            headline: import("zod").ZodString;
            description: import("zod").ZodString;
            callToActionButton: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            description: string;
            primaryText: string;
            headline: string;
            callToActionButton: string;
        }, {
            description: string;
            primaryText: string;
            headline: string;
            callToActionButton: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {}>, {
            adGoal: import("zod").ZodString;
            mainMessage: import("zod").ZodString;
            cta: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.SOCIAL_AD;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            description: string;
            primaryText: string;
            headline: string;
            callToActionButton: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }, {
        type: DocumentEntityType.SOCIAL_AD;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            description: string;
            primaryText: string;
            headline: string;
            callToActionButton: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }>;
    EMAIL_AD_PROMO: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.EMAIL_AD_PROMO>;
        output: import("zod").ZodArray<ZodObject<{
            subject: import("zod").ZodString;
            content: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            subject: string;
            content: string;
        }, {
            subject: string;
            content: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {}>, {
            offerPromotion: import("zod").ZodString;
            cta: import("zod").ZodString;
            personalization: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            offerPromotion: string;
            personalization: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            offerPromotion: string;
            personalization: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.EMAIL_AD_PROMO;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            content: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            offerPromotion: string;
            personalization: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }, {
        type: DocumentEntityType.EMAIL_AD_PROMO;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            subject: string;
            content: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            offerPromotion: string;
            personalization: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }>;
    SEARCH_AD: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.SEARCH_AD>;
        output: import("zod").ZodArray<ZodObject<{
            headlines: import("zod").ZodString;
            descriptions: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            headlines: string;
            descriptions: string;
        }, {
            headlines: string;
            descriptions: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {}>, {
            productOrService: import("zod").ZodString;
            keywords: import("zod").ZodArray<import("zod").ZodString, "many">;
            cta: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            keywords: string[];
            productOrService: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            keywords: string[];
            productOrService: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.SEARCH_AD;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            headlines: string;
            descriptions: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            keywords: string[];
            productOrService: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }, {
        type: DocumentEntityType.SEARCH_AD;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            headlines: string;
            descriptions: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            cta: string;
            keywords: string[];
            productOrService: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
    }>;
    WEBSITE_ABOUT: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.WEBSITE_ABOUT>;
        output: import("zod").ZodArray<ZodObject<{
            aboutContent: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            aboutContent: string;
        }, {
            aboutContent: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodOptional<import("zod").ZodString>;
            keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            internalLinks: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.WEBSITE_ABOUT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            aboutContent: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }, {
        type: DocumentEntityType.WEBSITE_ABOUT;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            aboutContent: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }>;
    WEBSITE_FAQ: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.WEBSITE_FAQ>;
        output: import("zod").ZodArray<ZodObject<{
            faqEntries: import("zod").ZodArray<ZodObject<{
                question: import("zod").ZodString;
                answer: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                question: string;
                answer: string;
            }, {
                question: string;
                answer: string;
            }>, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            faqEntries: {
                question: string;
                answer: string;
            }[];
        }, {
            faqEntries: {
                question: string;
                answer: string;
            }[];
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodOptional<import("zod").ZodString>;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            question: import("zod").ZodString;
            answer: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            question: string;
            answer: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            question: string;
            answer: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.WEBSITE_FAQ;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            faqEntries: {
                question: string;
                answer: string;
            }[];
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            question: string;
            answer: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.WEBSITE_FAQ;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            faqEntries: {
                question: string;
                answer: string;
            }[];
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            question: string;
            answer: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    WEBSITE_TESTEMONIAL: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.WEBSITE_TESTEMONIAL>;
        output: import("zod").ZodArray<ZodObject<{
            testimonial: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            testimonial: string;
        }, {
            testimonial: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodOptional<import("zod").ZodString>;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.WEBSITE_TESTEMONIAL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            testimonial: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.WEBSITE_TESTEMONIAL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            testimonial: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    WEBSITE_PRODUCT_DESCRIPTION: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION>;
        output: import("zod").ZodArray<ZodObject<{
            productName: import("zod").ZodString;
            description: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            description: string;
            productName: string;
        }, {
            description: string;
            productName: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodOptional<import("zod").ZodString>;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            description: string;
            productName: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            description: string;
            productName: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    ARTICLE: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.ARTICLE>;
        output: import("zod").ZodArray<ZodObject<{
            blogHtml: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodOptional<import("zod").ZodString>;
            additionalInformation: import("zod").ZodOptional<import("zod").ZodString>;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.ARTICLE;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }, {
        type: DocumentEntityType.ARTICLE;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            additionalInformation?: string | undefined;
        };
    }>;
    BLOG_POST_OPINION: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.BLOG_POST_OPINION>;
        output: import("zod").ZodArray<ZodObject<{
            blogHtml: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodOptional<import("zod").ZodString>;
            keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            internalLinks: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        }>, {
            blogTopic: import("zod").ZodString;
            blogOpinion: import("zod").ZodString;
            blogBrief: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
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
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            blogOpinion: string;
            blogBrief: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.BLOG_POST_OPINION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            blogOpinion: string;
            blogBrief: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }, {
        type: DocumentEntityType.BLOG_POST_OPINION;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            blogOpinion: string;
            blogBrief: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }>;
    BLOG_POST_TIPS: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.BLOG_POST_TIPS>;
        output: import("zod").ZodArray<ZodObject<{
            blogHtml: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodOptional<import("zod").ZodString>;
            keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            internalLinks: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        }>, {
            blogTopic: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.BLOG_POST_TIPS;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }, {
        type: DocumentEntityType.BLOG_POST_TIPS;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }>;
    BLOG_POST_GUIDE: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.BLOG_POST_GUIDE>;
        output: import("zod").ZodArray<ZodObject<{
            blogHtml: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodOptional<import("zod").ZodString>;
            keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            internalLinks: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        }>, {
            blogTopic: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.BLOG_POST_GUIDE;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }, {
        type: DocumentEntityType.BLOG_POST_GUIDE;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }>;
    BLOG_POST_COMPARISON: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.BLOG_POST_COMPARISON>;
        output: import("zod").ZodArray<ZodObject<{
            blogHtml: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodOptional<import("zod").ZodString>;
            keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            internalLinks: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        }>, {
            blogTopic: import("zod").ZodString;
            comparisonFocusPoints: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            comparisonFocusPoints: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            comparisonFocusPoints: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.BLOG_POST_COMPARISON;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            comparisonFocusPoints: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }, {
        type: DocumentEntityType.BLOG_POST_COMPARISON;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            comparisonFocusPoints: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }>;
    BLOG_POST_CASE_STUDY: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.BLOG_POST_CASE_STUDY>;
        output: import("zod").ZodArray<ZodObject<{
            blogHtml: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodOptional<import("zod").ZodString>;
            keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            internalLinks: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        }>, {
            solutionDescription: import("zod").ZodString;
            results: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            solutionDescription: string;
            results: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            solutionDescription: string;
            results: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.BLOG_POST_CASE_STUDY;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            solutionDescription: string;
            results: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }, {
        type: DocumentEntityType.BLOG_POST_CASE_STUDY;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            solutionDescription: string;
            results: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }>;
    BLOG_POST_GENERAL: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.BLOG_POST_GENERAL>;
        output: import("zod").ZodArray<ZodObject<{
            blogHtml: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            blogHtml: string;
        }, {
            blogHtml: string;
        }>, "many">;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {
            cta: import("zod").ZodOptional<import("zod").ZodString>;
            keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            internalLinks: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        }>, {
            blogTopic: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.BLOG_POST_GENERAL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }, {
        type: DocumentEntityType.BLOG_POST_GENERAL;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            blogHtml: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            blogTopic: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
            cta?: string | undefined;
            keywords?: string[] | undefined;
            internalLinks?: string[] | undefined;
        };
    }>;
    LINKEDIN_SPONSORED_AD: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.LINKEDIN_SPONSORED_AD>;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {}>, {
            adGoal: import("zod").ZodString;
            mainMessage: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: import("zod").ZodArray<ZodObject<{
            AdText: import("zod").ZodString;
            AdHeadline: import("zod").ZodString;
            captionText: import("zod").ZodString;
            callToActionButton: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            captionText: string;
            callToActionButton: string;
            AdText: string;
            AdHeadline: string;
        }, {
            captionText: string;
            callToActionButton: string;
            AdText: string;
            AdHeadline: string;
        }>, "many">;
        category: import("zod").ZodLiteral<import("../..").DocumentCategory.PAID>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.LINKEDIN_SPONSORED_AD;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            captionText: string;
            callToActionButton: string;
            AdText: string;
            AdHeadline: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
        category: import("../..").DocumentCategory.PAID;
    }, {
        type: DocumentEntityType.LINKEDIN_SPONSORED_AD;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            captionText: string;
            callToActionButton: string;
            AdText: string;
            AdHeadline: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
        category: import("../..").DocumentCategory.PAID;
    }>;
    FACEBOOK_SPONSORED_AD: ZodObject<import("zod").objectUtil.extendShape<{
        websiteId: import("zod").ZodString;
        companyId: import("zod").ZodString;
        name: import("zod").ZodString;
        id: import("zod").ZodString;
    }, {
        type: import("zod").ZodLiteral<DocumentEntityType.FACEBOOK_SPONSORED_AD>;
        inputParams: ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            description: import("zod").ZodOptional<import("zod").ZodString>;
            imageUrl: import("zod").ZodOptional<import("zod").ZodString>;
            audienceId: import("zod").ZodString;
            tone: import("zod").ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
        }, {}>, {
            adGoal: import("zod").ZodString;
            mainMessage: import("zod").ZodString;
        }>, "strip", import("zod").ZodTypeAny, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }, {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        }>;
        output: import("zod").ZodArray<ZodObject<{
            AdText: import("zod").ZodString;
            AdHeadline: import("zod").ZodString;
            captionText: import("zod").ZodString;
            callToActionButton: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            captionText: string;
            callToActionButton: string;
            AdText: string;
            AdHeadline: string;
        }, {
            captionText: string;
            callToActionButton: string;
            AdText: string;
            AdHeadline: string;
        }>, "many">;
        category: import("zod").ZodLiteral<import("../..").DocumentCategory.PAID>;
    }>, "strip", import("zod").ZodTypeAny, {
        type: DocumentEntityType.FACEBOOK_SPONSORED_AD;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            captionText: string;
            callToActionButton: string;
            AdText: string;
            AdHeadline: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
        category: import("../..").DocumentCategory.PAID;
    }, {
        type: DocumentEntityType.FACEBOOK_SPONSORED_AD;
        websiteId: string;
        companyId: string;
        name: string;
        id: string;
        output: {
            captionText: string;
            callToActionButton: string;
            AdText: string;
            AdHeadline: string;
        }[];
        inputParams: {
            audienceId: string;
            tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING" | "HOMORISTIC";
            adGoal: string;
            mainMessage: string;
            description?: string | undefined;
            imageUrl?: string | undefined;
        };
        category: import("../..").DocumentCategory.PAID;
    }>;
};
