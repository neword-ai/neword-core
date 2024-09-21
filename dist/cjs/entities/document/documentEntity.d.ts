import { z } from "zod";
import { DocumentEntityType } from "../../types/DocumentEntityType";
import { DocumentCategory } from "../../types/documentCategory";
export declare const ZDocumentEntity: z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.INSTAGRAM_CAPTION>;
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        captionText: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        captionText: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        captionText: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.INSTAGRAM_CAPTION;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        captionText: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        captionText: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        ideaDescription: z.ZodString;
        imageDescription: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        ideaDescription: string;
        imageDescription: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        ideaDescription: string;
        imageDescription: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.INSTAGRAM_POST_IDEA;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        ideaDescription: string;
        imageDescription: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        ideaDescription: string;
        imageDescription: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        bioDescription: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        bioDescription: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        bioDescription: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        bioDescription: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        bioDescription: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        storyIdea: z.ZodString;
        storyDescription: z.ZodString;
        storyWidgets: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        storyIdea: string;
        storyDescription: string;
        storyWidgets: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        storyIdea: string;
        storyDescription: string;
        storyWidgets: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.INSTAGRAM_STORY_IDEA;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        storyIdea: string;
        storyDescription: string;
        storyWidgets: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        storyIdea: string;
        storyDescription: string;
        storyWidgets: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        reelIdea: z.ZodString;
        reelDescription: z.ZodString;
        reelWidgets: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        reelIdea: string;
        reelDescription: string;
        reelWidgets: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        reelIdea: string;
        reelDescription: string;
        reelWidgets: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.INSTAGRAM_REEL_IDEA;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        reelIdea: string;
        reelDescription: string;
        reelWidgets: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        reelIdea: string;
        reelDescription: string;
        reelWidgets: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        reelScript: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        reelScript: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        reelScript: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.INSTAGRAM_REEL_SCRIPT;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        reelScript: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        reelScript: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        postCaption: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        postCaption: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        postCaption: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.LINKEDIN_POST_CAPTION;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        postCaption: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        postCaption: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        postIdea: z.ZodString;
        imageDescription: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        imageDescription: string;
        postIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        imageDescription: string;
        postIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.LINKEDIN_POST_IDEA;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        imageDescription: string;
        postIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        imageDescription: string;
        postIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        pageAbout: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        pageAbout: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        pageAbout: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.LINKEDIN_PAGE_ABOUT;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        pageAbout: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        pageAbout: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        postCaption: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        postCaption: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        postCaption: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.FACEBOOK_POST_CAPTION;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        postCaption: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        postCaption: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        postIdea: z.ZodString;
        imageIdea: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        postIdea: string;
        imageIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        postIdea: string;
        imageIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.FACEBOOK_POST_IDEA;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        postIdea: string;
        imageIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        postIdea: string;
        imageIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        pageAbout: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        pageAbout: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        pageAbout: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.FACEBOOK_PAGE_ABOUT;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        pageAbout: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        pageAbout: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        tweetContent: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        tweetContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        tweetContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.TWITTER_TWIT;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        tweetContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        tweetContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        threadContent: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        threadContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        threadContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.THREADS_TWIT;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        threadContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        threadContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        subject: z.ZodString;
        mailBody: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.CART_ABANDONMENT_EMAIL;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        subject: z.ZodString;
        mailBody: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.TRAFFIC_EMAIL;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        message: z.ZodString;
        title: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        message: string;
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        title: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        message: string;
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        title: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
        mainMessage: string;
        notificationGoal: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        title: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        title: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        subject: z.ZodString;
        mailBody: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.NEWSLETTER_EMAIL;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        subject: z.ZodString;
        mailBody: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.PRODUCT_UPDATE_EMAIL;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        subject: z.ZodString;
        mailBody: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.WELCOME_EMAIL;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        subject: z.ZodString;
        mailBody: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.EMAIL_CONTENT;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        mailBody: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        smsContent: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.FLASH_SALE_SMS;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
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
    };
}, {
    type: DocumentEntityType.FLASH_SALE_SMS;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
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
    };
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.NOTIFICATION_SMS>;
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        smsContent: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.NOTIFICATION_SMS;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        smsContent: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.SMS_CONTENT;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        smsIdea: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.SMS_IDEA;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        smsIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        keywordsType: z.ZodString;
        adKeywords: z.ZodArray<z.ZodString, "many">;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        keywordsType: string;
        adKeywords: string[];
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        keywordsType: string;
        adKeywords: string[];
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.GOOGLE_ADS_KEYWORDS;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        keywordsType: string;
        adKeywords: string[];
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        keywordsType: string;
        adKeywords: string[];
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        adIdea: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        adIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        adIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.GOOGLE_ADS_IDEA;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        adIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        adIdea: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        primaryText: z.ZodString;
        headline: z.ZodString;
        description: z.ZodString;
        callToActionButton: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        description: string;
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        primaryText: string;
        headline: string;
        callToActionButton: string;
        imageUrl?: string | undefined;
    }, {
        description: string;
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        primaryText: string;
        headline: string;
        callToActionButton: string;
        imageUrl?: string | undefined;
    }>, "many">;
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
        adGoal: string;
        mainMessage: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        primaryText: string;
        headline: string;
        callToActionButton: string;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        primaryText: string;
        headline: string;
        callToActionButton: string;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        subject: z.ZodString;
        content: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        content: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        content: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.EMAIL_AD_PROMO;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        content: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        subject: string;
        content: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        headlines: z.ZodString;
        descriptions: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        headlines: string;
        descriptions: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        headlines: string;
        descriptions: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.SEARCH_AD;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        headlines: string;
        descriptions: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        headlines: string;
        descriptions: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {}>, {
        adGoal: z.ZodString;
        mainMessage: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        adGoal: string;
        mainMessage: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        adGoal: string;
        mainMessage: string;
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
    };
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    };
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {}>, {
        adGoal: z.ZodString;
        mainMessage: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        adGoal: string;
        mainMessage: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        adGoal: string;
        mainMessage: string;
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
        callToActionButton: string;
        AdText: string;
        AdHeadline: string;
    }, {
        captionText: string;
        callToActionButton: string;
        AdText: string;
        AdHeadline: string;
    }>;
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
    };
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    };
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {}>, {
        adGoal: z.ZodString;
        mainMessage: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        adGoal: string;
        mainMessage: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        adGoal: string;
        mainMessage: string;
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
        callToActionButton: string;
        AdText: string;
        AdHeadline: string;
    }, {
        captionText: string;
        callToActionButton: string;
        AdText: string;
        AdHeadline: string;
    }>;
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
    };
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    };
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        aboutContent: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        aboutContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        aboutContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
    inputParams: z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        cta: z.ZodOptional<z.ZodString>;
        keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        internalLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        description?: string | undefined;
        imageUrl?: string | undefined;
        cta?: string | undefined;
        keywords?: string[] | undefined;
        internalLinks?: string[] | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        aboutContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        aboutContent: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
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
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        faqEntries: {
            question: string;
            answer: string;
        }[];
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        faqEntries: {
            question: string;
            answer: string;
        }[];
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.WEBSITE_FAQ;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        faqEntries: {
            question: string;
            answer: string;
        }[];
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        faqEntries: {
            question: string;
            answer: string;
        }[];
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        testimonial: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        testimonial: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        testimonial: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.WEBSITE_TESTEMONIAL;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        testimonial: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        testimonial: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        productName: z.ZodString;
        description: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        description: string;
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        productName: string;
        imageUrl?: string | undefined;
    }, {
        description: string;
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        productName: string;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        description: string;
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        productName: string;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        productName: string;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        blogHtml: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.ARTICLE;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        blogHtml: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.BLOG_POST_OPINION;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
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
    };
}, {
    type: DocumentEntityType.BLOG_POST_OPINION;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
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
    };
}>, z.ZodObject<z.objectUtil.extendShape<{
    websiteId: z.ZodString;
    companyId: z.ZodString;
    name: z.ZodString;
    id: z.ZodString;
}, {
    type: z.ZodLiteral<DocumentEntityType.BLOG_POST_TIPS>;
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        blogHtml: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.BLOG_POST_TIPS;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        blogHtml: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.BLOG_POST_GUIDE;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        blogHtml: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.BLOG_POST_COMPARISON;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        blogHtml: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.BLOG_POST_CASE_STUDY;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
    output: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        audienceId: z.ZodString;
        tone: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
    }, {
        blogHtml: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }, {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }>, "many">;
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
}>, "strip", z.ZodTypeAny, {
    type: DocumentEntityType.BLOG_POST_GENERAL;
    websiteId: string;
    companyId: string;
    name: string;
    id: string;
    output: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
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
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogHtml: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
    }[];
    inputParams: {
        audienceId: string;
        tone: "MARKETING" | "SOLDABLE" | "FRIENDLLY" | "INSPIRED" | "INSTRUCTIONAL" | "CONVINCING";
        blogTopic: string;
        description?: string | undefined;
        imageUrl?: string | undefined;
        cta?: string | undefined;
        keywords?: string[] | undefined;
        internalLinks?: string[] | undefined;
    };
}>]>;
export type DocumentEntity = z.infer<typeof ZDocumentEntity>;
