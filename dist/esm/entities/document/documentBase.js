import { DocumentEntityType } from "../../types/DocumentEntityType";
import { z } from "zod";
import { DocumentCategory } from "../../types/documentCategory";
import { ZDocumentToneType } from "../../types/DocumentToneType";
const baseInputParams = z.object({
    description: z.string().optional(),
    imageUrl: z.string().optional(),
    audienceId: z.string(),
    tone: ZDocumentToneType,
});
const categoryInputParams = {
    [DocumentCategory.SOCIAL_MEDIA]: z.object({}),
    [DocumentCategory.PAID]: z.object({}),
    [DocumentCategory.MAILING]: z.object({
        legalInformation: z.string().optional(),
        additionalInformation: z.string().optional(),
    }),
    [DocumentCategory.WEB]: z.object({
        cta: z.string().optional(),
        additionalInformation: z.string().optional(),
    }),
    [DocumentCategory.BLOG]: z.object({
        cta: z.string().optional(),
        keywords: z.array(z.string()).optional(),
        internalLinks: z.array(z.string()).optional(),
    }),
};
export const DocumentTypeFactory = {
    // SOCIAL MEDIA
    [DocumentEntityType.INSTAGRAM_CAPTION]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: z.boolean(),
            useHashtag: z.boolean(),
        }),
        output: z.object({
            captionText: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.INSTAGRAM_POST_IDEA]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA]),
        output: z.object({
            ideaDescription: z.string(),
            imageDescription: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA]),
        output: z.object({
            bioDescription: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.INSTAGRAM_STORY_IDEA]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA]),
        output: z.object({
            storyIdea: z.string(),
            storyDescription: z.string(),
            storyWidgets: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.INSTAGRAM_REEL_IDEA]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA]),
        output: z.object({
            reelIdea: z.string(),
            reelDescription: z.string(),
            reelWidgets: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.INSTAGRAM_REEL_SCRIPT]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
            .extend({
            script: z.string(),
        }),
        output: z.object({
            reelScript: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    // LinkedIn Types
    [DocumentEntityType.LINKEDIN_POST_CAPTION]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: z.boolean(),
            useHashtag: z.boolean(),
        }),
        output: z.object({
            postCaption: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.LINKEDIN_POST_IDEA]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: z.boolean(),
            useHashtag: z.boolean(),
        }),
        output: z.object({
            postIdea: z.string(),
            imageDescription: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.LINKEDIN_PAGE_ABOUT]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA]),
        output: z.object({
            pageAbout: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    // Facebook Types
    [DocumentEntityType.FACEBOOK_POST_CAPTION]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: z.boolean(),
            useHashtag: z.boolean(),
        }),
        output: z.object({
            postCaption: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.FACEBOOK_POST_IDEA]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
            .extend({
            imageIdea: z.string().describe("Image idea for the post"),
        }),
        output: z.object({
            postIdea: z.string(),
            imageIdea: z.string().describe("Image idea for the post"),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.FACEBOOK_PAGE_ABOUT]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: z.boolean(),
            useHashtag: z.boolean(),
        }),
        output: z.object({
            pageAbout: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    // Twitter & Threads Types
    [DocumentEntityType.TWITTER_TWIT]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: z.boolean(),
            useHashtag: z.boolean(),
        }),
        output: z.object({
            tweetContent: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.THREADS_TWIT]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: z.boolean(),
            useHashtag: z.boolean(),
        }),
        output: z.object({
            threadContent: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    // MAILING
    [DocumentEntityType.EMAIL_CONTENT]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.MAILING]),
        output: z.object({
            subject: z.string(),
            content: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.EMAIL_IDEA]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.MAILING]),
        output: z.object({
            emailIdea: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.SMS_CONTENT]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.MAILING])
            .extend({
            content: z.string(),
        }),
        output: z.object({
            smsContent: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.SMS_IDEA]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.MAILING]),
        output: z.object({
            smsIdea: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.PHONE_CALL_SCRIPT]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.MAILING])
            .extend({
            script: z.string(),
        }),
        output: z.object({
            phoneCallScript: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    // PAID
    [DocumentEntityType.GOOGLE_ADS_KEYWORDS]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.PAID])
            .extend({
            keywords: z.array(z.string()),
        }),
        output: z.object({
            keywordsType: z.string(),
            adKeywords: z.array(z.string()),
        }),
        category: DocumentCategory.PAID,
    },
    [DocumentEntityType.GOOGLE_ADS_IDEA]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.PAID]),
        output: z.object({
            adIdea: z.string(),
        }),
        category: DocumentCategory.PAID,
    },
    [DocumentEntityType.SOCIAL_AD_LINKEDIN]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.PAID])
            .extend({
            adGoal: z.string(),
            mainMessage: z.string(),
            introductoryText: z.string(),
            headline: z.string(),
            callToAction: z.string(),
        }),
        output: z.object({
            primaryText: z.string(),
            headline: z.string(),
            description: z.string(),
            callToActionButton: z.string(),
        }),
        category: DocumentCategory.PAID,
    },
    [DocumentEntityType.SOCIAL_AD_FACEBOOK_INSTAGRAM_TWITTER]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.PAID])
            .extend({
            adGoal: z.string(),
            mainMessage: z.string(),
            primaryText: z.string(),
            headline: z.string(),
            description: z.string(),
            callToActionButton: z.string(),
        }),
        output: z.object({
            primaryText: z.string(),
            headline: z.string(),
            description: z.string(),
            callToActionButton: z.string(),
        }),
        category: DocumentCategory.PAID,
    },
    [DocumentEntityType.SEARCH_AD]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.PAID])
            .extend({
            productOrService: z.string(),
            keywords: z.array(z.string()),
            cta: z.string(),
        }),
        output: z.object({
            headlines: z.array(z.string()),
            descriptions: z.array(z.string()),
        }),
        category: DocumentCategory.PAID,
    },
    // WEB
    [DocumentEntityType.WEBSITE_ABOUT]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.WEB]),
        output: z.object({
            aboutContent: z.string(),
        }),
        category: DocumentCategory.WEB,
    },
    [DocumentEntityType.WEBSITE_FAQ]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.WEB])
            .extend({
            question: z.string(),
            answer: z.string(),
        }),
        output: z.object({
            faqEntries: z.array(z.object({ question: z.string(), answer: z.string() })),
        }),
        category: DocumentCategory.WEB,
    },
    [DocumentEntityType.WEBSITE_TESTEMONIAL]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.WEB]),
        output: z.object({
            testimonial: z.string(),
        }),
        category: DocumentCategory.WEB,
    },
    [DocumentEntityType.ARTICLE]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.WEB]),
        output: z.object({
            title: z.string(),
            body: z.string(),
        }),
        category: DocumentCategory.WEB,
    },
    [DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.WEB]),
        output: z.object({
            productName: z.string(),
            description: z.string(),
        }),
        category: DocumentCategory.WEB,
    },
    [DocumentEntityType.BLOG_POST_OPINION]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.BLOG])
            .extend({
            blogTopic: z.string(),
            blogOpinion: z.string(),
            blogBrief: z.string(),
        }),
        output: z.object({
            title: z.string(),
            body: z.string(),
        }),
        category: DocumentCategory.BLOG,
    },
    [DocumentEntityType.BLOG_POST_TIPS]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.BLOG])
            .extend({
            blogTopic: z.string(),
            blogBrief: z.string(),
        }),
        output: z.object({
            title: z.string(),
            body: z.string(),
        }),
        category: DocumentCategory.BLOG,
    },
};
//# sourceMappingURL=documentBase.js.map