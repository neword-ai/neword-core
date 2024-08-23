import { DocumentEntityType } from "../../types/DocumentEntityType";
import { z } from "zod";
import { DocumentCategory } from "../../types/documentCategory";
import { ZDocumentToneType } from "../../types/DocumentToneType";
const baseInputParams = z.object({
    description: z.string(),
    imageUrl: z.string().optional(),
    audienceId: z.string(),
    tone: ZDocumentToneType,
});
export const DocumentTypeFactory = {
    [DocumentEntityType.INSTAGRAM_CAPTION]: {
        inputParams: baseInputParams.extend({
            useEmoji: z.boolean(),
            useHashtag: z.boolean(),
        }),
        output: z.object({
            captionText: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.INSTAGRAM_POST_IDEA]: {
        inputParams: baseInputParams,
        output: z.object({
            ideaDescription: z.string(),
            imageDescription: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION]: {
        inputParams: baseInputParams,
        output: z.object({
            bioDescription: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.INSTAGRAM_STORY_IDEA]: {
        inputParams: baseInputParams,
        output: z.object({
            storyIdea: z.string(),
            storyDescription: z.string(),
            storyWidgets: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.INSTAGRAM_REEL_IDEA]: {
        inputParams: baseInputParams,
        output: z.object({
            reelIdea: z.string(),
            reelDescription: z.string(),
            reelWidgets: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.INSTAGRAM_REEL_SCRIPT]: {
        inputParams: baseInputParams.extend({
            script: z.string(),
        }),
        output: z.object({
            reelScript: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.FACEBOOK_POST_CAPTION]: {
        inputParams: baseInputParams.extend({
            useEmoji: z.boolean(),
            useHashtag: z.boolean(),
        }),
        output: z.object({
            postCaption: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.FACEBOOK_POST_IDEA]: {
        inputParams: baseInputParams,
        output: z.object({
            postIdea: z.string(),
            imageIdea: z.string().describe("Image idea for the post"),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.FACEBOOK_PAGE_ABOUT]: {
        inputParams: baseInputParams.extend({
            useEmoji: z.boolean(),
            useHashtag: z.boolean(),
        }),
        output: z.object({
            pageAbout: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.LINKEDIN_POST_CAPTION]: {
        inputParams: baseInputParams.extend({
            useEmoji: z.boolean(),
            useHashtag: z.boolean(),
        }),
        output: z.object({
            postCaption: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.LINKEDIN_POST_IDEA]: {
        inputParams: baseInputParams.extend({
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
        inputParams: baseInputParams,
        output: z.object({
            pageAbout: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.TWITTER_TWIT]: {
        inputParams: baseInputParams.extend({
            useEmoji: z.boolean(),
            useHashtag: z.boolean(),
        }),
        output: z.object({
            tweetContent: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.THREADS_TWIT]: {
        inputParams: baseInputParams.extend({
            useEmoji: z.boolean(),
            useHashtag: z.boolean(),
        }),
        output: z.object({
            threadContent: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.EMAIL_CONTENT]: {
        inputParams: baseInputParams,
        output: z.object({
            subject: z.string(),
            content: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.EMAIL_IDEA]: {
        inputParams: baseInputParams,
        output: z.object({
            emailIdea: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.SMS_CONTENT]: {
        inputParams: baseInputParams.extend({
            content: z.string(),
        }),
        output: z.object({
            smsContent: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.SMS_IDEA]: {
        inputParams: baseInputParams,
        output: z.object({
            smsIdea: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.PHONE_CALL_SCRIPT]: {
        inputParams: baseInputParams.extend({
            script: z.string(),
        }),
        output: z.object({
            phoneCallScript: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.GOOGLE_ADS_KEYWORDS]: {
        inputParams: baseInputParams.extend({
            keywords: z.array(z.string()),
        }),
        output: z.object({
            keywordsType: z.string(),
            adKeywords: z.array(z.string()),
        }),
        category: DocumentCategory.PAID,
    },
    [DocumentEntityType.GOOGLE_ADS_IDEA]: {
        inputParams: baseInputParams,
        output: z.object({
            adIdea: z.string(),
        }),
        category: DocumentCategory.PAID,
    },
    [DocumentEntityType.WEBSITE_ABOUT]: {
        inputParams: baseInputParams,
        output: z.object({
            aboutContent: z.string(),
        }),
        category: DocumentCategory.WEB,
    },
    [DocumentEntityType.WEBSITE_FAQ]: {
        inputParams: baseInputParams.extend({
            question: z.string(),
            answer: z.string(),
        }),
        output: z.object({
            faqEntries: z.array(z.object({ question: z.string(), answer: z.string() })),
        }),
        category: DocumentCategory.WEB,
    },
    [DocumentEntityType.WEBSITE_TESTEMONIAL]: {
        inputParams: baseInputParams,
        output: z.object({
            testimonial: z.string(),
        }),
        category: DocumentCategory.WEB,
    },
    [DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION]: {
        inputParams: baseInputParams,
        output: z.object({
            productName: z.string(),
            description: z.string(),
        }),
        category: DocumentCategory.WEB,
    },
};
//# sourceMappingURL=documentBase.js.map