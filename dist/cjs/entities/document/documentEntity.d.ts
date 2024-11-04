import { z } from "zod";
import { DocumentEntityType } from "../../types/DocumentEntityType";
import { DocumentCategory } from "../../types/documentCategory";
export declare const ZDocumentEntityBase: z.ZodObject<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
}, {
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
}>;
export declare const baseInputParams: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodString>;
    audienceId: z.ZodString;
    tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
}, "strip", z.ZodTypeAny, {
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
export declare const categoryInputParams: {
    SOCIAL_MEDIA: z.ZodObject<{
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        cta: string;
        additionalInformation?: string | undefined;
    }, {
        cta: string;
        additionalInformation?: string | undefined;
    }>;
    PAID: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    SMS: z.ZodObject<{
        legalInformation: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        additionalInformation?: string | undefined;
        legalInformation?: string | undefined;
    }, {
        additionalInformation?: string | undefined;
        legalInformation?: string | undefined;
    }>;
    MAILING: z.ZodObject<{
        cta: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        cta: string;
    }, {
        cta: string;
    }>;
    WEB: z.ZodObject<{
        cta: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        cta?: string | undefined;
        additionalInformation?: string | undefined;
    }, {
        cta?: string | undefined;
        additionalInformation?: string | undefined;
    }>;
    BLOG: z.ZodObject<{
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        cta?: string | undefined;
        keywords?: string[] | undefined;
        internalLinks?: string[] | undefined;
    }, {
        cta?: string | undefined;
        keywords?: string[] | undefined;
        internalLinks?: string[] | undefined;
    }>;
};
export declare const instagramCaptionSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_CAPTION>;
    output: z.ZodArray<z.ZodObject<{
        captionText: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        captionText: string;
    }, {
        captionText: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        hashtags: z.ZodArray<z.ZodString, "many">;
        postGoal: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const instagramSponsoredAdSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_SPONSORED_AD>;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        adGoal: z.ZodString;
        mainMessage: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
    output: z.ZodArray<z.ZodObject<{
        primaryText: z.ZodString;
        callToAction: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        primaryText: string;
        callToAction: string;
    }, {
        primaryText: string;
        callToAction: string;
    }>, "many">;
    category: z.ZodLiteral<DocumentCategory.PAID>;
}>, "strip", z.ZodTypeAny, {
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
    category: DocumentCategory.PAID;
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
    category: DocumentCategory.PAID;
}>;
export declare const instagramPostIdeaSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_POST_IDEA>;
    output: z.ZodArray<z.ZodObject<{
        ideaDescription: z.ZodString;
        imageDescription: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        ideaDescription: string;
        imageDescription: string;
    }, {
        ideaDescription: string;
        imageDescription: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        hashtags: z.ZodArray<z.ZodString, "many">;
        postGoal: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const instagramBioDescriptionSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION>;
    output: z.ZodArray<z.ZodObject<{
        bioDescription: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        bioDescription: string;
    }, {
        bioDescription: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const instagramStoryIdeaSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_STORY_IDEA>;
    output: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const instagramReelIdeaSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_REEL_IDEA>;
    output: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const instagramReelScriptSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_REEL_SCRIPT>;
    output: z.ZodArray<z.ZodObject<{
        reelScript: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        reelScript: string;
    }, {
        reelScript: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        script: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const linkedInPostCaptionSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.LINKEDIN_POST_CAPTION>;
    output: z.ZodArray<z.ZodObject<{
        postCaption: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        postCaption: string;
    }, {
        postCaption: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        hashtags: z.ZodArray<z.ZodString, "many">;
        postGoal: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const linkedInPostIdeaSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.LINKEDIN_POST_IDEA>;
    output: z.ZodArray<z.ZodObject<{
        postIdea: z.ZodString;
        imageDescription: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        imageDescription: string;
        postIdea: string;
    }, {
        imageDescription: string;
        postIdea: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        useEmoji: z.ZodBoolean;
        useHashtag: z.ZodBoolean;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const linkedInPageAboutSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.LINKEDIN_PAGE_ABOUT>;
    output: z.ZodArray<z.ZodObject<{
        pageAbout: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        pageAbout: string;
    }, {
        pageAbout: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const facebookPostCaptionSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.FACEBOOK_POST_CAPTION>;
    output: z.ZodArray<z.ZodObject<{
        postCaption: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        postCaption: string;
    }, {
        postCaption: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        hashtags: z.ZodArray<z.ZodString, "many">;
        postGoal: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const facebookPostIdeaSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.FACEBOOK_POST_IDEA>;
    output: z.ZodArray<z.ZodObject<{
        postIdea: z.ZodString;
        imageIdea: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        postIdea: string;
        imageIdea: string;
    }, {
        postIdea: string;
        imageIdea: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        hashtags: z.ZodArray<z.ZodString, "many">;
        postGoal: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const facebookPageAboutSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.FACEBOOK_PAGE_ABOUT>;
    output: z.ZodArray<z.ZodObject<{
        pageAbout: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        pageAbout: string;
    }, {
        pageAbout: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        useEmoji: z.ZodBoolean;
        useHashtag: z.ZodBoolean;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const twitterTwitSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.TWITTER_TWIT>;
    output: z.ZodArray<z.ZodObject<{
        tweetContent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tweetContent: string;
    }, {
        tweetContent: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        useEmoji: z.ZodBoolean;
        useHashtag: z.ZodBoolean;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const threadsTwitSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.THREADS_TWIT>;
    output: z.ZodArray<z.ZodObject<{
        threadContent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        threadContent: string;
    }, {
        threadContent: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        useEmoji: z.ZodBoolean;
        useHashtag: z.ZodBoolean;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const cartAbandonmentEmailSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.CART_ABANDONMENT_EMAIL>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        mailBody: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        mailBody: string;
    }, {
        subject: string;
        mailBody: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, {
        incentives: z.ZodString;
        cartItems: z.ZodString;
        customerSupport: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const trafficEmailSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.TRAFFIC_EMAIL>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        mailBody: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        mailBody: string;
    }, {
        subject: string;
        mailBody: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, {
        contentTopic: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const pushNotificationSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.PUSH_NOTIFICATION>;
    output: z.ZodArray<z.ZodObject<{
        message: z.ZodString;
        title: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        title: string;
    }, {
        message: string;
        title: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, {
        notificationGoal: z.ZodString;
        mainMessage: z.ZodString;
        cta: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const newsletterEmailSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.NEWSLETTER_EMAIL>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        mailBody: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        mailBody: string;
    }, {
        subject: string;
        mailBody: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, {
        mainTopic: z.ZodString;
        cta: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const googleAdsKeywordsSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.GOOGLE_ADS_KEYWORDS>;
    output: z.ZodArray<z.ZodObject<{
        keywordsType: z.ZodString;
        adKeywords: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        keywordsType: string;
        adKeywords: string[];
    }, {
        keywordsType: string;
        adKeywords: string[];
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        keywords: z.ZodArray<z.ZodString, "many">;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const blogPostOpinionSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.BLOG_POST_OPINION>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
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
}>, "strip", z.ZodTypeAny, {
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
export declare const productUpdateEmailSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.PRODUCT_UPDATE_EMAIL>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        mailBody: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        mailBody: string;
    }, {
        subject: string;
        mailBody: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, {
        productUpdates: z.ZodString;
        updateBenefits: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const welcomeEmailSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.WELCOME_EMAIL>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        mailBody: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        mailBody: string;
    }, {
        subject: string;
        mailBody: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const emailContentSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.EMAIL_CONTENT>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        mailBody: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        mailBody: string;
    }, {
        subject: string;
        mailBody: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const flashSaleSmsSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.FLASH_SALE_SMS>;
    output: z.ZodArray<z.ZodObject<{
        smsContent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        smsContent: string;
    }, {
        smsContent: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
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
}>, "strip", z.ZodTypeAny, {
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
export declare const notificationSmsSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.NOTIFICATION_SMS>;
    output: z.ZodArray<z.ZodObject<{
        smsContent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        smsContent: string;
    }, {
        smsContent: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        legalInformation: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        notificationType: z.ZodString;
        notificationDetails: z.ZodString;
        supportContact: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const smsContentSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.SMS_CONTENT>;
    output: z.ZodArray<z.ZodObject<{
        smsContent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        smsContent: string;
    }, {
        smsContent: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, z.objectUtil.extendShape<{
        legalInformation: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }, {
        cta: z.ZodString;
    }>>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const smsIdeaSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.SMS_IDEA>;
    output: z.ZodArray<z.ZodObject<{
        smsIdea: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        smsIdea: string;
    }, {
        smsIdea: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        legalInformation: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const googleAdsIdeaSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.GOOGLE_ADS_IDEA>;
    output: z.ZodArray<z.ZodObject<{
        adIdea: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        adIdea: string;
    }, {
        adIdea: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const socialAdSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.SOCIAL_AD>;
    output: z.ZodArray<z.ZodObject<{
        primaryText: z.ZodString;
        headline: z.ZodString;
        description: z.ZodString;
        callToActionButton: z.ZodString;
    }, "strip", z.ZodTypeAny, {
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
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        adGoal: z.ZodString;
        mainMessage: z.ZodString;
        cta: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const emailAdPromoSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.EMAIL_AD_PROMO>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        content: string;
    }, {
        subject: string;
        content: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        offerPromotion: z.ZodString;
        cta: z.ZodString;
        personalization: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const searchAdSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.SEARCH_AD>;
    output: z.ZodArray<z.ZodObject<{
        headlines: z.ZodString;
        descriptions: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        headlines: string;
        descriptions: string;
    }, {
        headlines: string;
        descriptions: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        productOrService: z.ZodString;
        keywords: z.ZodArray<z.ZodString, "many">;
        cta: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const blogPostTipsSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.BLOG_POST_TIPS>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }>, {
        blogTopic: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const blogPostGuideSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.BLOG_POST_GUIDE>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }>, {
        blogTopic: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const blogPostComparisonSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.BLOG_POST_COMPARISON>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }>, {
        blogTopic: z.ZodString;
        comparisonFocusPoints: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const blogPostCaseStudySchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.BLOG_POST_CASE_STUDY>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }>, {
        solutionDescription: z.ZodString;
        results: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const blogPostGeneralSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.BLOG_POST_GENERAL>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }>, {
        blogTopic: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const websiteAboutSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.WEBSITE_ABOUT>;
    output: z.ZodArray<z.ZodObject<{
        aboutContent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        aboutContent: string;
    }, {
        aboutContent: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const websiteFaqSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.WEBSITE_FAQ>;
    output: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        question: z.ZodString;
        answer: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const websiteTestimonialSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.WEBSITE_TESTEMONIAL>;
    output: z.ZodArray<z.ZodObject<{
        testimonial: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        testimonial: string;
    }, {
        testimonial: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const articleSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.ARTICLE>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const websiteProductDescriptionSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION>;
    output: z.ZodArray<z.ZodObject<{
        productName: z.ZodString;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        productName: string;
    }, {
        description: string;
        productName: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const linkedinSponsoredAdSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.LINKEDIN_SPONSORED_AD>;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        adGoal: z.ZodString;
        mainMessage: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
    output: z.ZodArray<z.ZodObject<{
        AdText: z.ZodString;
        AdHeadline: z.ZodString;
        captionText: z.ZodString;
        callToActionButton: z.ZodString;
    }, "strip", z.ZodTypeAny, {
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
    category: z.ZodLiteral<DocumentCategory.PAID>;
}>, "strip", z.ZodTypeAny, {
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
    category: DocumentCategory.PAID;
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
    category: DocumentCategory.PAID;
}>;
export declare const facebookSponsoredAdSchema: z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.FACEBOOK_SPONSORED_AD>;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        adGoal: z.ZodString;
        mainMessage: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
    output: z.ZodArray<z.ZodObject<{
        AdText: z.ZodString;
        AdHeadline: z.ZodString;
        captionText: z.ZodString;
        callToActionButton: z.ZodString;
    }, "strip", z.ZodTypeAny, {
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
    category: z.ZodLiteral<DocumentCategory.PAID>;
}>, "strip", z.ZodTypeAny, {
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
    category: DocumentCategory.PAID;
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
    category: DocumentCategory.PAID;
}>;
export declare const ZDocumentEntity: z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_CAPTION>;
    output: z.ZodArray<z.ZodObject<{
        captionText: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        captionText: string;
    }, {
        captionText: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        hashtags: z.ZodArray<z.ZodString, "many">;
        postGoal: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_POST_IDEA>;
    output: z.ZodArray<z.ZodObject<{
        ideaDescription: z.ZodString;
        imageDescription: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        ideaDescription: string;
        imageDescription: string;
    }, {
        ideaDescription: string;
        imageDescription: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        hashtags: z.ZodArray<z.ZodString, "many">;
        postGoal: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION>;
    output: z.ZodArray<z.ZodObject<{
        bioDescription: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        bioDescription: string;
    }, {
        bioDescription: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_STORY_IDEA>;
    output: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_REEL_IDEA>;
    output: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_REEL_SCRIPT>;
    output: z.ZodArray<z.ZodObject<{
        reelScript: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        reelScript: string;
    }, {
        reelScript: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        script: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.LINKEDIN_POST_CAPTION>;
    output: z.ZodArray<z.ZodObject<{
        postCaption: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        postCaption: string;
    }, {
        postCaption: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        hashtags: z.ZodArray<z.ZodString, "many">;
        postGoal: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.LINKEDIN_POST_IDEA>;
    output: z.ZodArray<z.ZodObject<{
        postIdea: z.ZodString;
        imageDescription: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        imageDescription: string;
        postIdea: string;
    }, {
        imageDescription: string;
        postIdea: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        useEmoji: z.ZodBoolean;
        useHashtag: z.ZodBoolean;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.LINKEDIN_PAGE_ABOUT>;
    output: z.ZodArray<z.ZodObject<{
        pageAbout: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        pageAbout: string;
    }, {
        pageAbout: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.FACEBOOK_POST_CAPTION>;
    output: z.ZodArray<z.ZodObject<{
        postCaption: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        postCaption: string;
    }, {
        postCaption: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        hashtags: z.ZodArray<z.ZodString, "many">;
        postGoal: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.FACEBOOK_POST_IDEA>;
    output: z.ZodArray<z.ZodObject<{
        postIdea: z.ZodString;
        imageIdea: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        postIdea: string;
        imageIdea: string;
    }, {
        postIdea: string;
        imageIdea: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        hashtags: z.ZodArray<z.ZodString, "many">;
        postGoal: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.FACEBOOK_PAGE_ABOUT>;
    output: z.ZodArray<z.ZodObject<{
        pageAbout: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        pageAbout: string;
    }, {
        pageAbout: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        useEmoji: z.ZodBoolean;
        useHashtag: z.ZodBoolean;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.TWITTER_TWIT>;
    output: z.ZodArray<z.ZodObject<{
        tweetContent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tweetContent: string;
    }, {
        tweetContent: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        useEmoji: z.ZodBoolean;
        useHashtag: z.ZodBoolean;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.THREADS_TWIT>;
    output: z.ZodArray<z.ZodObject<{
        threadContent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        threadContent: string;
    }, {
        threadContent: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        useEmoji: z.ZodBoolean;
        useHashtag: z.ZodBoolean;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.CART_ABANDONMENT_EMAIL>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        mailBody: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        mailBody: string;
    }, {
        subject: string;
        mailBody: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, {
        incentives: z.ZodString;
        cartItems: z.ZodString;
        customerSupport: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.TRAFFIC_EMAIL>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        mailBody: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        mailBody: string;
    }, {
        subject: string;
        mailBody: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, {
        contentTopic: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.PUSH_NOTIFICATION>;
    output: z.ZodArray<z.ZodObject<{
        message: z.ZodString;
        title: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        title: string;
    }, {
        message: string;
        title: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, {
        notificationGoal: z.ZodString;
        mainMessage: z.ZodString;
        cta: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.NEWSLETTER_EMAIL>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        mailBody: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        mailBody: string;
    }, {
        subject: string;
        mailBody: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, {
        mainTopic: z.ZodString;
        cta: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.PRODUCT_UPDATE_EMAIL>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        mailBody: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        mailBody: string;
    }, {
        subject: string;
        mailBody: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, {
        productUpdates: z.ZodString;
        updateBenefits: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.WELCOME_EMAIL>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        mailBody: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        mailBody: string;
    }, {
        subject: string;
        mailBody: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.EMAIL_CONTENT>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        mailBody: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        mailBody: string;
    }, {
        subject: string;
        mailBody: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.FLASH_SALE_SMS>;
    output: z.ZodArray<z.ZodObject<{
        smsContent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        smsContent: string;
    }, {
        smsContent: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.NOTIFICATION_SMS>;
    output: z.ZodArray<z.ZodObject<{
        smsContent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        smsContent: string;
    }, {
        smsContent: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        legalInformation: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        notificationType: z.ZodString;
        notificationDetails: z.ZodString;
        supportContact: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.SMS_CONTENT>;
    output: z.ZodArray<z.ZodObject<{
        smsContent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        smsContent: string;
    }, {
        smsContent: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, z.objectUtil.extendShape<{
        legalInformation: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }, {
        cta: z.ZodString;
    }>>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.SMS_IDEA>;
    output: z.ZodArray<z.ZodObject<{
        smsIdea: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        smsIdea: string;
    }, {
        smsIdea: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        legalInformation: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.GOOGLE_ADS_KEYWORDS>;
    output: z.ZodArray<z.ZodObject<{
        keywordsType: z.ZodString;
        adKeywords: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        keywordsType: string;
        adKeywords: string[];
    }, {
        keywordsType: string;
        adKeywords: string[];
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        keywords: z.ZodArray<z.ZodString, "many">;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.GOOGLE_ADS_IDEA>;
    output: z.ZodArray<z.ZodObject<{
        adIdea: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        adIdea: string;
    }, {
        adIdea: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.SOCIAL_AD>;
    output: z.ZodArray<z.ZodObject<{
        primaryText: z.ZodString;
        headline: z.ZodString;
        description: z.ZodString;
        callToActionButton: z.ZodString;
    }, "strip", z.ZodTypeAny, {
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
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        adGoal: z.ZodString;
        mainMessage: z.ZodString;
        cta: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.EMAIL_AD_PROMO>;
    output: z.ZodArray<z.ZodObject<{
        subject: z.ZodString;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        subject: string;
        content: string;
    }, {
        subject: string;
        content: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        offerPromotion: z.ZodString;
        cta: z.ZodString;
        personalization: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.SEARCH_AD>;
    output: z.ZodArray<z.ZodObject<{
        headlines: z.ZodString;
        descriptions: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        headlines: string;
        descriptions: string;
    }, {
        headlines: string;
        descriptions: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        productOrService: z.ZodString;
        keywords: z.ZodArray<z.ZodString, "many">;
        cta: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_SPONSORED_AD>;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        adGoal: z.ZodString;
        mainMessage: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
    output: z.ZodArray<z.ZodObject<{
        primaryText: z.ZodString;
        callToAction: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        primaryText: string;
        callToAction: string;
    }, {
        primaryText: string;
        callToAction: string;
    }>, "many">;
    category: z.ZodLiteral<DocumentCategory.PAID>;
}>, "strip", z.ZodTypeAny, {
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
    category: DocumentCategory.PAID;
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
    category: DocumentCategory.PAID;
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.LINKEDIN_SPONSORED_AD>;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        adGoal: z.ZodString;
        mainMessage: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
    output: z.ZodArray<z.ZodObject<{
        AdText: z.ZodString;
        AdHeadline: z.ZodString;
        captionText: z.ZodString;
        callToActionButton: z.ZodString;
    }, "strip", z.ZodTypeAny, {
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
    category: z.ZodLiteral<DocumentCategory.PAID>;
}>, "strip", z.ZodTypeAny, {
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
    category: DocumentCategory.PAID;
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
    category: DocumentCategory.PAID;
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.FACEBOOK_SPONSORED_AD>;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {}>, {
        adGoal: z.ZodString;
        mainMessage: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
    output: z.ZodArray<z.ZodObject<{
        AdText: z.ZodString;
        AdHeadline: z.ZodString;
        captionText: z.ZodString;
        callToActionButton: z.ZodString;
    }, "strip", z.ZodTypeAny, {
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
    category: z.ZodLiteral<DocumentCategory.PAID>;
}>, "strip", z.ZodTypeAny, {
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
    category: DocumentCategory.PAID;
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
    category: DocumentCategory.PAID;
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.WEBSITE_ABOUT>;
    output: z.ZodArray<z.ZodObject<{
        aboutContent: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        aboutContent: string;
    }, {
        aboutContent: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.WEBSITE_FAQ>;
    output: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, {
        question: z.ZodString;
        answer: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.WEBSITE_TESTEMONIAL>;
    output: z.ZodArray<z.ZodObject<{
        testimonial: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        testimonial: string;
    }, {
        testimonial: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION>;
    output: z.ZodArray<z.ZodObject<{
        productName: z.ZodString;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        productName: string;
    }, {
        description: string;
        productName: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.ARTICLE>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        additionalInformation: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.BLOG_POST_OPINION>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.BLOG_POST_TIPS>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }>, {
        blogTopic: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.BLOG_POST_GUIDE>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }>, {
        blogTopic: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.BLOG_POST_COMPARISON>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }>, {
        blogTopic: z.ZodString;
        comparisonFocusPoints: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.BLOG_POST_CASE_STUDY>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }>, {
        solutionDescription: z.ZodString;
        results: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.BLOG_POST_GENERAL>;
    output: z.ZodArray<z.ZodObject<{
        blogHtml: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        blogHtml: string;
    }, {
        blogHtml: string;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING", "HOMORISTIC"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }>, {
        blogTopic: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
}>]>;
export type DocumentEntity = z.infer<typeof ZDocumentEntity>;
