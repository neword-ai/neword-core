"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTypeFactory = void 0;
var DocumentEntityType_1 = require("../../types/DocumentEntityType");
var zod_1 = require("zod");
var documentCategory_1 = require("../../types/documentCategory");
var DocumentToneType_1 = require("../../types/DocumentToneType");
var baseInputParams = zod_1.z.object({
    description: zod_1.z.string().optional(),
    imageUrl: zod_1.z.string().optional(),
    audienceId: zod_1.z.string(),
    tone: DocumentToneType_1.ZDocumentToneType,
});
var categoryInputParams = (_a = {},
    _a[documentCategory_1.DocumentCategory.SOCIAL_MEDIA] = zod_1.z.object({}),
    _a[documentCategory_1.DocumentCategory.PAID] = zod_1.z.object({}),
    _a[documentCategory_1.DocumentCategory.MAILING] = zod_1.z.object({
        legalInformation: zod_1.z.string().optional(),
        additionalInformation: zod_1.z.string().optional(),
    }),
    _a[documentCategory_1.DocumentCategory.WEB] = zod_1.z.object({
        cta: zod_1.z.string().optional(),
        additionalInformation: zod_1.z.string().optional(),
    }),
    _a[documentCategory_1.DocumentCategory.BLOG] = zod_1.z.object({
        cta: zod_1.z.string().optional(),
        keywords: zod_1.z.array(zod_1.z.string()).optional(),
        internalLinks: zod_1.z.array(zod_1.z.string()).optional(),
    }),
    _a);
exports.DocumentTypeFactory = (_b = {},
    // SOCIAL MEDIA
    _b[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_CAPTION] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        output: zod_1.z.object({
            captionText: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _b[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_POST_IDEA] = {
        inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA]),
        output: zod_1.z.object({
            ideaDescription: zod_1.z.string(),
            imageDescription: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _b[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION] = {
        inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA]),
        output: zod_1.z.object({
            bioDescription: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _b[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_STORY_IDEA] = {
        inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA]),
        output: zod_1.z.object({
            storyIdea: zod_1.z.string(),
            storyDescription: zod_1.z.string(),
            storyWidgets: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _b[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_REEL_IDEA] = {
        inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA]),
        output: zod_1.z.object({
            reelIdea: zod_1.z.string(),
            reelDescription: zod_1.z.string(),
            reelWidgets: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _b[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_REEL_SCRIPT] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
            .extend({
            script: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            reelScript: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    // LinkedIn Types
    _b[DocumentEntityType_1.DocumentEntityType.LINKEDIN_POST_CAPTION] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        output: zod_1.z.object({
            postCaption: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _b[DocumentEntityType_1.DocumentEntityType.LINKEDIN_POST_IDEA] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        output: zod_1.z.object({
            postIdea: zod_1.z.string(),
            imageDescription: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _b[DocumentEntityType_1.DocumentEntityType.LINKEDIN_PAGE_ABOUT] = {
        inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA]),
        output: zod_1.z.object({
            pageAbout: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    // Facebook Types
    _b[DocumentEntityType_1.DocumentEntityType.FACEBOOK_POST_CAPTION] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        output: zod_1.z.object({
            postCaption: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _b[DocumentEntityType_1.DocumentEntityType.FACEBOOK_POST_IDEA] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
            .extend({
            imageIdea: zod_1.z.string().describe("Image idea for the post"),
        }),
        output: zod_1.z.object({
            postIdea: zod_1.z.string(),
            imageIdea: zod_1.z.string().describe("Image idea for the post"),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _b[DocumentEntityType_1.DocumentEntityType.FACEBOOK_PAGE_ABOUT] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        output: zod_1.z.object({
            pageAbout: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    // Twitter & Threads Types
    _b[DocumentEntityType_1.DocumentEntityType.TWITTER_TWIT] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        output: zod_1.z.object({
            tweetContent: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _b[DocumentEntityType_1.DocumentEntityType.THREADS_TWIT] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
            .extend({
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        output: zod_1.z.object({
            threadContent: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    // MAILING
    _b[DocumentEntityType_1.DocumentEntityType.EMAIL_CONTENT] = {
        inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.MAILING]),
        output: zod_1.z.object({
            subject: zod_1.z.string(),
            content: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.MAILING,
    },
    _b[DocumentEntityType_1.DocumentEntityType.EMAIL_IDEA] = {
        inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.MAILING]),
        output: zod_1.z.object({
            emailIdea: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.MAILING,
    },
    _b[DocumentEntityType_1.DocumentEntityType.SMS_CONTENT] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.MAILING])
            .extend({
            content: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            smsContent: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.MAILING,
    },
    _b[DocumentEntityType_1.DocumentEntityType.SMS_IDEA] = {
        inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.MAILING]),
        output: zod_1.z.object({
            smsIdea: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.MAILING,
    },
    _b[DocumentEntityType_1.DocumentEntityType.PHONE_CALL_SCRIPT] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.MAILING])
            .extend({
            script: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            phoneCallScript: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.MAILING,
    },
    // PAID
    _b[DocumentEntityType_1.DocumentEntityType.GOOGLE_ADS_KEYWORDS] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.PAID])
            .extend({
            keywords: zod_1.z.array(zod_1.z.string()),
        }),
        output: zod_1.z.object({
            keywordsType: zod_1.z.string(),
            adKeywords: zod_1.z.array(zod_1.z.string()),
        }),
        category: documentCategory_1.DocumentCategory.PAID,
    },
    _b[DocumentEntityType_1.DocumentEntityType.GOOGLE_ADS_IDEA] = {
        inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.PAID]),
        output: zod_1.z.object({
            adIdea: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.PAID,
    },
    _b[DocumentEntityType_1.DocumentEntityType.SOCIAL_AD_LINKEDIN] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.PAID])
            .extend({
            adGoal: zod_1.z.string(),
            mainMessage: zod_1.z.string(),
            introductoryText: zod_1.z.string(),
            headline: zod_1.z.string(),
            callToAction: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            primaryText: zod_1.z.string(),
            headline: zod_1.z.string(),
            description: zod_1.z.string(),
            callToActionButton: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.PAID,
    },
    _b[DocumentEntityType_1.DocumentEntityType.SOCIAL_AD_FACEBOOK_INSTAGRAM_TWITTER] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.PAID])
            .extend({
            adGoal: zod_1.z.string(),
            mainMessage: zod_1.z.string(),
            primaryText: zod_1.z.string(),
            headline: zod_1.z.string(),
            description: zod_1.z.string(),
            callToActionButton: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            primaryText: zod_1.z.string(),
            headline: zod_1.z.string(),
            description: zod_1.z.string(),
            callToActionButton: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.PAID,
    },
    _b[DocumentEntityType_1.DocumentEntityType.SEARCH_AD] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.PAID])
            .extend({
            productOrService: zod_1.z.string(),
            keywords: zod_1.z.array(zod_1.z.string()),
            cta: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            headlines: zod_1.z.array(zod_1.z.string()),
            descriptions: zod_1.z.array(zod_1.z.string()),
        }),
        category: documentCategory_1.DocumentCategory.PAID,
    },
    // WEB
    _b[DocumentEntityType_1.DocumentEntityType.WEBSITE_ABOUT] = {
        inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.WEB]),
        output: zod_1.z.object({
            aboutContent: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.WEB,
    },
    _b[DocumentEntityType_1.DocumentEntityType.WEBSITE_FAQ] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.WEB])
            .extend({
            question: zod_1.z.string(),
            answer: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            faqEntries: zod_1.z.array(zod_1.z.object({ question: zod_1.z.string(), answer: zod_1.z.string() })),
        }),
        category: documentCategory_1.DocumentCategory.WEB,
    },
    _b[DocumentEntityType_1.DocumentEntityType.WEBSITE_TESTEMONIAL] = {
        inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.WEB]),
        output: zod_1.z.object({
            testimonial: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.WEB,
    },
    _b[DocumentEntityType_1.DocumentEntityType.ARTICLE] = {
        inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.WEB]),
        output: zod_1.z.object({
            title: zod_1.z.string(),
            body: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.WEB,
    },
    _b[DocumentEntityType_1.DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION] = {
        inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.WEB]),
        output: zod_1.z.object({
            productName: zod_1.z.string(),
            description: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.WEB,
    },
    _b[DocumentEntityType_1.DocumentEntityType.BLOG_POST_OPINION] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
            .extend({
            blogTopic: zod_1.z.string().min(1),
            blogOpinion: zod_1.z.string().min(1),
            blogBrief: zod_1.z.string().min(1),
        }),
        output: zod_1.z.object({
            title: zod_1.z.string(),
            body: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.BLOG,
    },
    _b[DocumentEntityType_1.DocumentEntityType.BLOG_POST_TIPS] = {
        inputParams: baseInputParams
            .merge(categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
            .extend({
            blogTopic: zod_1.z.string(),
            blogBrief: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            title: zod_1.z.string(),
            body: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.BLOG,
    },
    _b);
//# sourceMappingURL=documentBase.js.map