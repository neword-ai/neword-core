"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTypeFactory = void 0;
var DocumentEntityType_1 = require("../../types/DocumentEntityType");
var zod_1 = require("zod");
var documentCategory_1 = require("../../types/documentCategory");
var DocumentToneType_1 = require("../../types/DocumentToneType");
var baseInputParams = zod_1.z.object({
    description: zod_1.z.string(),
    imageUrl: zod_1.z.string().optional(),
    audienceId: zod_1.z.string(),
    tone: DocumentToneType_1.ZDocumentToneType,
});
exports.DocumentTypeFactory = (_a = {},
    _a[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_CAPTION] = {
        inputParams: baseInputParams.extend({
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        output: zod_1.z.object({
            captionText: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_POST_IDEA] = {
        inputParams: baseInputParams,
        output: zod_1.z.object({
            ideaDescription: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION] = {
        inputParams: baseInputParams,
        output: zod_1.z.object({
            bioDescription: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_STORY_IDEA] = {
        inputParams: baseInputParams,
        output: zod_1.z.object({
            storyIdea: zod_1.z.string(),
            storyDescription: zod_1.z.string(),
            storyWidgets: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_REEL_IDEA] = {
        inputParams: baseInputParams,
        output: zod_1.z.object({
            reelIdea: zod_1.z.string(),
            reelDescription: zod_1.z.string(),
            reelWidgets: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_REEL_SCRIPT] = {
        inputParams: baseInputParams.extend({
            script: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            reelScript: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.FACEBOOK_POST_CAPTION] = {
        inputParams: baseInputParams.extend({
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        output: zod_1.z.object({
            postCaption: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.FACEBOOK_POST_IDEA] = {
        inputParams: baseInputParams,
        output: zod_1.z.object({
            postIdea: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.FACEBOOK_PAGE_ABOUT] = {
        inputParams: baseInputParams.extend({
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        output: zod_1.z.object({
            pageAbout: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.LINKEDIN_POST_CAPTION] = {
        inputParams: baseInputParams.extend({
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        output: zod_1.z.object({
            postCaption: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.LINKEDIN_POST_IDEA] = {
        inputParams: baseInputParams,
        output: zod_1.z.object({
            postIdea: zod_1.z.string(),
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.LINKEDIN_PAGE_ABOUT] = {
        inputParams: baseInputParams,
        output: zod_1.z.object({
            pageAbout: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.TWITTER_TWIT] = {
        inputParams: baseInputParams.extend({
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        output: zod_1.z.object({
            tweetContent: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.THREADS_TWIT] = {
        inputParams: baseInputParams.extend({
            useEmoji: zod_1.z.boolean(),
            useHashtag: zod_1.z.boolean(),
        }),
        output: zod_1.z.object({
            threadContent: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    },
    _a[DocumentEntityType_1.DocumentEntityType.EMAIL_CONTENT] = {
        inputParams: baseInputParams,
        output: zod_1.z.object({
            subject: zod_1.z.string(),
            content: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.MAILING,
    },
    _a[DocumentEntityType_1.DocumentEntityType.EMAIL_IDEA] = {
        inputParams: baseInputParams,
        output: zod_1.z.object({
            emailIdea: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.MAILING,
    },
    _a[DocumentEntityType_1.DocumentEntityType.SMS_CONTENT] = {
        inputParams: baseInputParams.extend({
            content: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            smsContent: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.MAILING,
    },
    _a[DocumentEntityType_1.DocumentEntityType.SMS_IDEA] = {
        inputParams: baseInputParams,
        output: zod_1.z.object({
            smsIdea: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.MAILING,
    },
    _a[DocumentEntityType_1.DocumentEntityType.PHONE_CALL_SCRIPT] = {
        inputParams: baseInputParams.extend({
            script: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            phoneCallScript: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.MAILING,
    },
    _a[DocumentEntityType_1.DocumentEntityType.GOOGLE_ADS_KEYWORDS] = {
        inputParams: baseInputParams.extend({
            keywords: zod_1.z.array(zod_1.z.string()),
        }),
        output: zod_1.z.object({
            adKeywords: zod_1.z.array(zod_1.z.string()),
        }),
        category: documentCategory_1.DocumentCategory.PAID,
    },
    _a[DocumentEntityType_1.DocumentEntityType.GOOGLE_ADS_IDEA] = {
        inputParams: baseInputParams,
        output: zod_1.z.object({
            adIdea: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.PAID,
    },
    _a[DocumentEntityType_1.DocumentEntityType.WEBSITE_ABOUT] = {
        inputParams: baseInputParams,
        output: zod_1.z.object({
            aboutContent: zod_1.z.string(),
        }),
        category: documentCategory_1.DocumentCategory.WEB,
    },
    _a[DocumentEntityType_1.DocumentEntityType.WEBSITE_FAQ] = {
        inputParams: baseInputParams.extend({
            question: zod_1.z.string(),
            answer: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            faqEntries: zod_1.z.array(zod_1.z.object({ question: zod_1.z.string(), answer: zod_1.z.string() })),
        }),
        category: documentCategory_1.DocumentCategory.WEB,
    },
    _a[DocumentEntityType_1.DocumentEntityType.WEBSITE_TESTEMONIAL] = {
        inputParams: baseInputParams.extend({
            testimonial: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            testimonials: zod_1.z.array(zod_1.z.string()),
        }),
        category: documentCategory_1.DocumentCategory.WEB,
    },
    _a[DocumentEntityType_1.DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION] = {
        inputParams: baseInputParams.extend({
            productName: zod_1.z.string(),
        }),
        output: zod_1.z.object({
            productDescriptions: zod_1.z.array(zod_1.z.object({ productName: zod_1.z.string(), description: zod_1.z.string() })),
        }),
        category: documentCategory_1.DocumentCategory.WEB,
    },
    _a);
//# sourceMappingURL=documentBase.js.map