"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZDocumentEntity = void 0;
var zod_1 = require("zod");
var DocumentEntityType_1 = require("../../types/DocumentEntityType");
var DocumentToneType_1 = require("../../types/DocumentToneType");
var documentCategory_1 = require("../../types/documentCategory");
// Base Schema for Document Entity
var ZDocumentEntityBase = zod_1.z.object({
    websiteId: zod_1.z.string(),
    companyId: zod_1.z.string(),
    name: zod_1.z.string(),
});
// Base Output Schema
var baseOutputSchema = zod_1.z.object({
    description: zod_1.z.string().optional(),
    imageUrl: zod_1.z.string().optional(),
    audienceId: zod_1.z.string(),
    tone: DocumentToneType_1.ZDocumentToneType,
});
// Base Input Params
var baseInputParams = zod_1.z.object({
    description: zod_1.z.string().optional(),
    imageUrl: zod_1.z.string().optional(),
    audienceId: zod_1.z.string(),
    tone: DocumentToneType_1.ZDocumentToneType,
});
// Category Input Params
var categoryInputParams = (_a = {},
    _a[documentCategory_1.DocumentCategory.SOCIAL_MEDIA] = zod_1.z.object({
        cta: zod_1.z.string().describe("קריאה לפעולה"),
        additionalInformation: zod_1.z.string().optional(),
    }),
    _a[documentCategory_1.DocumentCategory.PAID] = zod_1.z.object({}),
    _a[documentCategory_1.DocumentCategory.SMS] = zod_1.z.object({
        legalInformation: zod_1.z.string().optional(),
        additionalInformation: zod_1.z.string().optional(),
    }),
    _a[documentCategory_1.DocumentCategory.MAILING] = zod_1.z.object({
        cta: zod_1.z.string().describe("קריאה לפעולה"),
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
// SOCIAL MEDIA Schemas
var instagramCaptionSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.INSTAGRAM_CAPTION),
    output: baseOutputSchema.extend({
        captionText: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        hashtags: zod_1.z.array(zod_1.z.string()),
        postGoal: zod_1.z.string().describe("מטרת הפוסט"),
    }),
});
var instagramPostIdeaSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.INSTAGRAM_POST_IDEA),
    output: baseOutputSchema.extend({
        ideaDescription: zod_1.z.string(),
        imageDescription: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        hashtags: zod_1.z.array(zod_1.z.string()),
        postGoal: zod_1.z.string().describe("מטרת הפוסט"),
    }),
});
var instagramBioDescriptionSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION),
    output: baseOutputSchema.extend({
        bioDescription: zod_1.z.string(),
    }),
    inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA]),
});
var instagramStoryIdeaSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.INSTAGRAM_STORY_IDEA),
    output: baseOutputSchema.extend({
        storyIdea: zod_1.z.string(),
        storyDescription: zod_1.z.string(),
        storyWidgets: zod_1.z.string(),
    }),
    inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA]),
});
var instagramReelIdeaSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.INSTAGRAM_REEL_IDEA),
    output: baseOutputSchema.extend({
        reelIdea: zod_1.z.string(),
        reelDescription: zod_1.z.string(),
        reelWidgets: zod_1.z.string(),
    }),
    inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA]),
});
var instagramReelScriptSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.INSTAGRAM_REEL_SCRIPT),
    output: baseOutputSchema.extend({
        reelScript: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        script: zod_1.z.string(),
    }),
});
// LinkedIn Types
var linkedInPostCaptionSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.LINKEDIN_POST_CAPTION),
    output: baseOutputSchema.extend({
        postCaption: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        hashtags: zod_1.z.array(zod_1.z.string()),
        postGoal: zod_1.z.string().describe("מטרת הפוסט"),
    }),
});
var linkedInPostIdeaSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.LINKEDIN_POST_IDEA),
    output: baseOutputSchema.extend({
        postIdea: zod_1.z.string(),
        imageDescription: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        useEmoji: zod_1.z.boolean(),
        useHashtag: zod_1.z.boolean(),
    }),
});
var linkedInPageAboutSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.LINKEDIN_PAGE_ABOUT),
    output: baseOutputSchema.extend({
        pageAbout: zod_1.z.string(),
    }),
    inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA]),
});
// Facebook Types
var facebookPostCaptionSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.FACEBOOK_POST_CAPTION),
    output: baseOutputSchema.extend({
        postCaption: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        hashtags: zod_1.z.array(zod_1.z.string()),
        postGoal: zod_1.z.string().describe("מטרת הפוסט"),
    }),
});
var facebookPostIdeaSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.FACEBOOK_POST_IDEA),
    output: baseOutputSchema.extend({
        postIdea: zod_1.z.string(),
        imageIdea: zod_1.z.string().describe("Image idea for the post"),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        hashtags: zod_1.z.array(zod_1.z.string()),
        postGoal: zod_1.z.string().describe("מטרת הפוסט"),
    }),
});
var facebookPageAboutSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.FACEBOOK_PAGE_ABOUT),
    output: baseOutputSchema.extend({
        pageAbout: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        useEmoji: zod_1.z.boolean(),
        useHashtag: zod_1.z.boolean(),
    }),
});
// Twitter & Threads Types
var twitterTwitSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.TWITTER_TWIT),
    output: baseOutputSchema.extend({
        tweetContent: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        useEmoji: zod_1.z.boolean(),
        useHashtag: zod_1.z.boolean(),
    }),
});
var threadsTwitSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.THREADS_TWIT),
    output: baseOutputSchema.extend({
        threadContent: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        useEmoji: zod_1.z.boolean(),
        useHashtag: zod_1.z.boolean(),
    }),
});
// MAILING Types
var cartAbandonmentEmailSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.CART_ABANDONMENT_EMAIL),
    output: baseOutputSchema.extend({
        subject: zod_1.z.string(),
        mailBody: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.MAILING])
        .extend({
        incentives: zod_1.z
            .string()
            .describe("Incentives to encourage customers to return and complete the purchase"),
        cartItems: zod_1.z.string().describe("Items left in the cart"),
        customerSupport: zod_1.z.string().describe("Ways to contact support"),
    }),
});
var trafficEmailSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.TRAFFIC_EMAIL),
    output: baseOutputSchema.extend({
        subject: zod_1.z.string(),
        mailBody: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.MAILING])
        .extend({
        contentTopic: zod_1.z.string().describe("Content topic you want to share"),
    }),
});
var pushNotificationSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.PUSH_NOTIFICATION),
    output: baseOutputSchema.extend({
        message: zod_1.z.string(),
        title: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.MAILING])
        .extend({
        notificationGoal: zod_1.z.string().describe("Goal of the push notification"),
        mainMessage: zod_1.z.string().describe("Main message of the push notification"),
        cta: zod_1.z.string().describe("Call to action"),
    }),
});
var newsletterEmailSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.NEWSLETTER_EMAIL),
    output: baseOutputSchema.extend({
        subject: zod_1.z.string(),
        mailBody: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.MAILING])
        .extend({
        mainTopic: zod_1.z.string().describe("Main topic of the email"),
        cta: zod_1.z.string().describe("Call to action"),
    }),
});
// More mailing schemas...
// PAID Schemas
var googleAdsKeywordsSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.GOOGLE_ADS_KEYWORDS),
    output: baseOutputSchema.extend({
        keywordsType: zod_1.z.string(),
        adKeywords: zod_1.z.array(zod_1.z.string()),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.PAID])
        .extend({
        keywords: zod_1.z.array(zod_1.z.string()),
    }),
});
// More paid schemas...
// BLOG Schemas
var blogPostOpinionSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.BLOG_POST_OPINION),
    output: baseOutputSchema.extend({
        blogHtml: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
        .extend({
        blogTopic: zod_1.z.string().min(1),
        blogOpinion: zod_1.z.string().min(1),
        blogBrief: zod_1.z.string().min(1),
    }),
});
var productUpdateEmailSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.PRODUCT_UPDATE_EMAIL),
    output: baseOutputSchema.extend({
        subject: zod_1.z.string(),
        mailBody: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.MAILING])
        .extend({
        productUpdates: zod_1.z
            .string()
            .describe("העדכונים העיקריים והתכונות החדשות של המוצר"),
        updateBenefits: zod_1.z
            .string()
            .describe("יתרונות העדכון וכיצד הם מועילים ללקוחות"),
    }),
});
var welcomeEmailSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.WELCOME_EMAIL),
    output: baseOutputSchema.extend({
        subject: zod_1.z.string(),
        mailBody: zod_1.z.string(),
    }),
    inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.MAILING]),
});
var emailContentSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.EMAIL_CONTENT),
    output: baseOutputSchema.extend({
        subject: zod_1.z.string(),
        mailBody: zod_1.z.string(),
    }),
    inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.MAILING]),
});
var flashSaleSmsSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.FLASH_SALE_SMS),
    output: baseOutputSchema.extend({
        smsContent: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.SMS])
        .extend({
        promotionDetails: zod_1.z.string().describe("פרטי המבצע שברצונכם לקדם"),
        redemptionMethod: zod_1.z.string().describe("אופן מימוש המבצע"),
        duration: zod_1.z.string().optional().describe("משך זמן המבצע"),
        cta: zod_1.z.string().describe("קריאה לפעולה"),
    }),
});
var notificationSmsSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.NOTIFICATION_SMS),
    output: baseOutputSchema.extend({
        smsContent: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.SMS])
        .extend({
        notificationType: zod_1.z.string().describe("סוג ההתראה"),
        notificationDetails: zod_1.z.string().describe("פרטי ההתראה"),
        supportContact: zod_1.z
            .string()
            .describe("כיצד לקוחות יכולים לפנות אם יש להם שאלות או זקוקים לסיוע"),
    }),
});
var smsContentSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.SMS_CONTENT),
    output: baseOutputSchema.extend({
        smsContent: zod_1.z.string(),
    }),
    inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.SMS].extend({
        cta: zod_1.z.string().describe("קריאה לפעולה"),
    })),
});
var smsIdeaSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.SMS_IDEA),
    output: baseOutputSchema.extend({
        smsIdea: zod_1.z.string(),
    }),
    inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.SMS]),
});
var googleAdsIdeaSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.GOOGLE_ADS_IDEA),
    output: baseOutputSchema.extend({
        adIdea: zod_1.z.string(),
    }),
    inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.PAID]),
});
var socialAdSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.SOCIAL_AD),
    output: baseOutputSchema.extend({
        primaryText: zod_1.z.string(),
        headline: zod_1.z.string(),
        description: zod_1.z.string(),
        callToActionButton: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.PAID])
        .extend({
        adGoal: zod_1.z.string(),
        mainMessage: zod_1.z.string(),
        cta: zod_1.z.string(),
    }),
});
var emailAdPromoSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.EMAIL_AD_PROMO),
    output: baseOutputSchema.extend({
        subject: zod_1.z.string(),
        content: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.PAID])
        .extend({
        offerPromotion: zod_1.z.string(),
        cta: zod_1.z.string(),
        personalization: zod_1.z.string(),
    }),
});
var searchAdSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.SEARCH_AD),
    output: baseOutputSchema.extend({
        headlines: zod_1.z.string(),
        descriptions: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.PAID])
        .extend({
        productOrService: zod_1.z.string(),
        keywords: zod_1.z.array(zod_1.z.string()),
        cta: zod_1.z.string(),
    }),
});
var blogPostTipsSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.BLOG_POST_TIPS),
    output: baseOutputSchema.extend({
        blogHtml: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
        .extend({
        blogTopic: zod_1.z.string(),
    }),
});
var blogPostGuideSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.BLOG_POST_GUIDE),
    output: baseOutputSchema.extend({
        blogHtml: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
        .extend({
        blogTopic: zod_1.z.string(),
    }),
});
var blogPostComparisonSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.BLOG_POST_COMPARISON),
    output: baseOutputSchema.extend({
        blogHtml: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
        .extend({
        blogTopic: zod_1.z.string(),
        comparisonFocusPoints: zod_1.z.string(),
    }),
});
var blogPostCaseStudySchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.BLOG_POST_CASE_STUDY),
    output: baseOutputSchema.extend({
        blogHtml: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
        .extend({
        solutionDescription: zod_1.z.string(),
        results: zod_1.z.string(),
    }),
});
var blogPostGeneralSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.BLOG_POST_GENERAL),
    output: baseOutputSchema.extend({
        blogHtml: zod_1.z.string(),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
        .extend({
        blogTopic: zod_1.z.string(),
    }),
});
var websiteAboutSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.WEBSITE_ABOUT),
    output: baseOutputSchema.extend({
        aboutContent: zod_1.z.string(),
    }),
    inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.WEB]),
});
var websiteFaqSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.WEBSITE_FAQ),
    output: baseOutputSchema.extend({
        faqEntries: zod_1.z.array(zod_1.z.object({ question: zod_1.z.string(), answer: zod_1.z.string() })),
    }),
    inputParams: baseInputParams
        .merge(categoryInputParams[documentCategory_1.DocumentCategory.WEB])
        .extend({
        question: zod_1.z.string(),
        answer: zod_1.z.string(),
    }),
});
var websiteTestimonialSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.WEBSITE_TESTEMONIAL),
    output: baseOutputSchema.extend({
        testimonial: zod_1.z.string(),
    }),
    inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.WEB]),
});
var articleSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.ARTICLE),
    output: baseOutputSchema.extend({
        blogHtml: zod_1.z.string(),
    }),
    inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.WEB]),
});
var websiteProductDescriptionSchema = ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION),
    output: baseOutputSchema.extend({
        productName: zod_1.z.string(),
        description: zod_1.z.string(),
    }),
    inputParams: baseInputParams.merge(categoryInputParams[documentCategory_1.DocumentCategory.WEB]),
});
exports.ZDocumentEntity = zod_1.z.discriminatedUnion("type", [
    // SOCIAL MEDIA
    instagramCaptionSchema,
    instagramPostIdeaSchema,
    instagramBioDescriptionSchema,
    instagramStoryIdeaSchema,
    instagramReelIdeaSchema,
    instagramReelScriptSchema,
    // LinkedIn
    linkedInPostCaptionSchema,
    linkedInPostIdeaSchema,
    linkedInPageAboutSchema,
    // Facebook
    facebookPostCaptionSchema,
    facebookPostIdeaSchema,
    facebookPageAboutSchema,
    // Twitter & Threads
    twitterTwitSchema,
    threadsTwitSchema,
    // MAILING
    cartAbandonmentEmailSchema,
    trafficEmailSchema,
    pushNotificationSchema,
    newsletterEmailSchema,
    productUpdateEmailSchema,
    welcomeEmailSchema,
    emailContentSchema,
    // SMS
    flashSaleSmsSchema,
    notificationSmsSchema,
    smsContentSchema,
    smsIdeaSchema,
    // PAID
    googleAdsKeywordsSchema,
    googleAdsIdeaSchema,
    socialAdSchema,
    emailAdPromoSchema,
    searchAdSchema,
    // WEB
    websiteAboutSchema,
    websiteFaqSchema,
    websiteTestimonialSchema,
    articleSchema,
    websiteProductDescriptionSchema,
    // BLOG
    blogPostOpinionSchema,
    blogPostTipsSchema,
    blogPostGuideSchema,
    blogPostComparisonSchema,
    blogPostCaseStudySchema,
    blogPostGeneralSchema,
]);
//# sourceMappingURL=documentEntity.js.map