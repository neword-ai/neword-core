"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZDocumentEntity = exports.facebookSponsoredAdSchema = exports.linkedinSponsoredAdSchema = exports.websiteProductDescriptionSchema = exports.articleSchema = exports.websiteTestimonialSchema = exports.websiteFaqSchema = exports.websiteAboutSchema = exports.blogPostGeneralSchema = exports.blogPostCaseStudySchema = exports.blogPostComparisonSchema = exports.blogPostGuideSchema = exports.blogPostTipsSchema = exports.searchAdSchema = exports.emailAdPromoSchema = exports.socialAdSchema = exports.googleAdsIdeaSchema = exports.smsIdeaSchema = exports.smsContentSchema = exports.notificationSmsSchema = exports.flashSaleSmsSchema = exports.emailContentSchema = exports.welcomeEmailSchema = exports.productUpdateEmailSchema = exports.blogPostOpinionSchema = exports.googleAdsKeywordsSchema = exports.newsletterEmailSchema = exports.pushNotificationSchema = exports.trafficEmailSchema = exports.cartAbandonmentEmailSchema = exports.threadsTwitSchema = exports.twitterTwitSchema = exports.facebookPageAboutSchema = exports.facebookPostIdeaSchema = exports.facebookPostCaptionSchema = exports.linkedInPageAboutSchema = exports.linkedInPostIdeaSchema = exports.linkedInPostCaptionSchema = exports.instagramReelScriptSchema = exports.instagramReelIdeaSchema = exports.instagramStoryIdeaSchema = exports.instagramBioDescriptionSchema = exports.instagramPostIdeaSchema = exports.instagramSponsoredAdSchema = exports.instagramCaptionSchema = exports.categoryInputParams = exports.baseInputParams = exports.ZDocumentEntityBase = void 0;
var zod_1 = require("zod");
var DocumentEntityType_1 = require("../../types/DocumentEntityType");
var DocumentToneType_1 = require("../../types/DocumentToneType");
var documentCategory_1 = require("../../types/documentCategory");
// Base Schema for Document Entity
exports.ZDocumentEntityBase = zod_1.z.object({
    websiteId: zod_1.z.string(),
    companyId: zod_1.z.string(),
    name: zod_1.z.string(),
    id: zod_1.z.string(),
});
// Base Input Params
exports.baseInputParams = zod_1.z.object({
    description: zod_1.z.string().optional(),
    imageUrl: zod_1.z.string().optional(),
    audienceId: zod_1.z.string(),
    tone: DocumentToneType_1.ZDocumentToneType,
});
// Category Input Params
exports.categoryInputParams = (_a = {},
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
exports.instagramCaptionSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.INSTAGRAM_CAPTION),
    output: zod_1.z.array(zod_1.z.object({
        captionText: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        hashtags: zod_1.z.array(zod_1.z.string()),
        postGoal: zod_1.z.string().describe("מטרת הפוסט"),
    }),
});
exports.instagramSponsoredAdSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.INSTAGRAM_SPONSORED_AD),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.PAID])
        .extend({
        adGoal: zod_1.z.string().describe("מטרת הפרסומת"),
        mainMessage: zod_1.z.string().describe("המסר המרכזי בפרסומת"),
    }),
    output: zod_1.z.array(zod_1.z.object({
        primaryText: zod_1.z.string(),
        callToAction: zod_1.z.string(),
    })),
    category: zod_1.z.literal(documentCategory_1.DocumentCategory.PAID),
});
exports.instagramPostIdeaSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.INSTAGRAM_POST_IDEA),
    output: zod_1.z.array(zod_1.z.object({
        ideaDescription: zod_1.z.string(),
        imageDescription: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        hashtags: zod_1.z.array(zod_1.z.string()),
        postGoal: zod_1.z.string().describe("מטרת הפוסט"),
    }),
});
exports.instagramBioDescriptionSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION),
    output: zod_1.z.array(zod_1.z.object({
        bioDescription: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams.merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA]),
});
exports.instagramStoryIdeaSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.INSTAGRAM_STORY_IDEA),
    output: zod_1.z.array(zod_1.z.object({
        storyIdea: zod_1.z.string(),
        storyDescription: zod_1.z.string(),
        storyWidgets: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams.merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA]),
});
exports.instagramReelIdeaSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.INSTAGRAM_REEL_IDEA),
    output: zod_1.z.array(zod_1.z.object({
        reelIdea: zod_1.z.string(),
        reelDescription: zod_1.z.string(),
        reelWidgets: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams.merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA]),
});
exports.instagramReelScriptSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.INSTAGRAM_REEL_SCRIPT),
    output: zod_1.z.array(zod_1.z.object({
        reelScript: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        script: zod_1.z.string(),
    }),
});
// LinkedIn Types
exports.linkedInPostCaptionSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.LINKEDIN_POST_CAPTION),
    output: zod_1.z.array(zod_1.z.object({
        postCaption: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        hashtags: zod_1.z.array(zod_1.z.string()),
        postGoal: zod_1.z.string().describe("מטרת הפוסט"),
    }),
});
exports.linkedInPostIdeaSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.LINKEDIN_POST_IDEA),
    output: zod_1.z.array(zod_1.z.object({
        postIdea: zod_1.z.string(),
        imageDescription: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        useEmoji: zod_1.z.boolean(),
        useHashtag: zod_1.z.boolean(),
    }),
});
exports.linkedInPageAboutSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.LINKEDIN_PAGE_ABOUT),
    output: zod_1.z.array(zod_1.z.object({
        pageAbout: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams.merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA]),
});
// Facebook Types
exports.facebookPostCaptionSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.FACEBOOK_POST_CAPTION),
    output: zod_1.z.array(zod_1.z.object({
        postCaption: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        hashtags: zod_1.z.array(zod_1.z.string()),
        postGoal: zod_1.z.string().describe("מטרת הפוסט"),
    }),
});
exports.facebookPostIdeaSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.FACEBOOK_POST_IDEA),
    output: zod_1.z.array(zod_1.z.object({
        postIdea: zod_1.z.string(),
        imageIdea: zod_1.z.string().describe("Image idea for the post"),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        hashtags: zod_1.z.array(zod_1.z.string()),
        postGoal: zod_1.z.string().describe("מטרת הפוסט"),
    }),
});
exports.facebookPageAboutSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.FACEBOOK_PAGE_ABOUT),
    output: zod_1.z.array(zod_1.z.object({
        pageAbout: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        useEmoji: zod_1.z.boolean(),
        useHashtag: zod_1.z.boolean(),
    }),
});
// Twitter & Threads Types
exports.twitterTwitSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.TWITTER_TWIT),
    output: zod_1.z.array(zod_1.z.object({
        tweetContent: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        useEmoji: zod_1.z.boolean(),
        useHashtag: zod_1.z.boolean(),
    }),
});
exports.threadsTwitSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.THREADS_TWIT),
    output: zod_1.z.array(zod_1.z.object({
        threadContent: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SOCIAL_MEDIA])
        .extend({
        useEmoji: zod_1.z.boolean(),
        useHashtag: zod_1.z.boolean(),
    }),
});
// MAILING Types
exports.cartAbandonmentEmailSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.CART_ABANDONMENT_EMAIL),
    output: zod_1.z.array(zod_1.z.object({
        subject: zod_1.z.string(),
        mailBody: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.MAILING])
        .extend({
        incentives: zod_1.z
            .string()
            .describe("Incentives to encourage customers to return and complete the purchase"),
        cartItems: zod_1.z.string().describe("Items left in the cart"),
        customerSupport: zod_1.z.string().describe("Ways to contact support"),
    }),
});
exports.trafficEmailSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.TRAFFIC_EMAIL),
    output: zod_1.z.array(zod_1.z.object({
        subject: zod_1.z.string(),
        mailBody: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.MAILING])
        .extend({
        contentTopic: zod_1.z.string().describe("Content topic you want to share"),
    }),
});
exports.pushNotificationSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.PUSH_NOTIFICATION),
    output: zod_1.z.array(zod_1.z.object({
        message: zod_1.z.string(),
        title: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.MAILING])
        .extend({
        notificationGoal: zod_1.z.string().describe("Goal of the push notification"),
        mainMessage: zod_1.z.string().describe("Main message of the push notification"),
        cta: zod_1.z.string().describe("Call to action"),
    }),
});
exports.newsletterEmailSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.NEWSLETTER_EMAIL),
    output: zod_1.z.array(zod_1.z.object({
        subject: zod_1.z.string(),
        mailBody: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.MAILING])
        .extend({
        mainTopic: zod_1.z.string().describe("Main topic of the email"),
        cta: zod_1.z.string().describe("Call to action"),
    }),
});
// PAID Schemas
exports.googleAdsKeywordsSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.GOOGLE_ADS_KEYWORDS),
    output: zod_1.z.array(zod_1.z.object({
        keywordsType: zod_1.z.string(),
        adKeywords: zod_1.z.array(zod_1.z.string()),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.PAID])
        .extend({
        keywords: zod_1.z.array(zod_1.z.string()),
    }),
});
// BLOG Schemas
exports.blogPostOpinionSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.BLOG_POST_OPINION),
    output: zod_1.z.array(zod_1.z.object({
        blogHtml: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
        .extend({
        blogTopic: zod_1.z.string().min(1),
        blogOpinion: zod_1.z.string().min(1),
        blogBrief: zod_1.z.string().min(1),
    }),
});
exports.productUpdateEmailSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.PRODUCT_UPDATE_EMAIL),
    output: zod_1.z.array(zod_1.z.object({
        subject: zod_1.z.string(),
        mailBody: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.MAILING])
        .extend({
        productUpdates: zod_1.z
            .string()
            .describe("העדכונים העיקריים והתכונות החדשות של המוצר"),
        updateBenefits: zod_1.z
            .string()
            .describe("יתרונות העדכון וכיצד הם מועילים ללקוחות"),
    }),
});
exports.welcomeEmailSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.WELCOME_EMAIL),
    output: zod_1.z.array(zod_1.z.object({
        subject: zod_1.z.string(),
        mailBody: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams.merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.MAILING]),
});
exports.emailContentSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.EMAIL_CONTENT),
    output: zod_1.z.array(zod_1.z.object({
        subject: zod_1.z.string(),
        mailBody: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams.merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.MAILING]),
});
exports.flashSaleSmsSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.FLASH_SALE_SMS),
    output: zod_1.z.array(zod_1.z.object({
        smsContent: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SMS])
        .extend({
        promotionDetails: zod_1.z.string().describe("פרטי המבצע שברצונכם לקדם"),
        redemptionMethod: zod_1.z.string().describe("אופן מימוש המבצע"),
        duration: zod_1.z.string().optional().describe("משך זמן המבצע"),
        cta: zod_1.z.string().describe("קריאה לפעולה"),
    }),
});
exports.notificationSmsSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.NOTIFICATION_SMS),
    output: zod_1.z.array(zod_1.z.object({
        smsContent: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SMS])
        .extend({
        notificationType: zod_1.z.string().describe("סוג ההתראה"),
        notificationDetails: zod_1.z.string().describe("פרטי ההתראה"),
        supportContact: zod_1.z
            .string()
            .describe("כיצד לקוחות יכולים לפנות אם יש להם שאלות או זקוקים לסיוע"),
    }),
});
exports.smsContentSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.SMS_CONTENT),
    output: zod_1.z.array(zod_1.z.object({
        smsContent: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams.merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SMS].extend({
        cta: zod_1.z.string().describe("קריאה לפעולה"),
    })),
});
exports.smsIdeaSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.SMS_IDEA),
    output: zod_1.z.array(zod_1.z.object({
        smsIdea: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams.merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.SMS]),
});
exports.googleAdsIdeaSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.GOOGLE_ADS_IDEA),
    output: zod_1.z.array(zod_1.z.object({
        adIdea: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams.merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.PAID]),
});
exports.socialAdSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.SOCIAL_AD),
    output: zod_1.z.array(zod_1.z.object({
        primaryText: zod_1.z.string(),
        headline: zod_1.z.string(),
        description: zod_1.z.string(),
        callToActionButton: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.PAID])
        .extend({
        adGoal: zod_1.z.string(),
        mainMessage: zod_1.z.string(),
        cta: zod_1.z.string(),
    }),
});
exports.emailAdPromoSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.EMAIL_AD_PROMO),
    output: zod_1.z.array(zod_1.z.object({
        subject: zod_1.z.string(),
        content: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.PAID])
        .extend({
        offerPromotion: zod_1.z.string(),
        cta: zod_1.z.string(),
        personalization: zod_1.z.string(),
    }),
});
exports.searchAdSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.SEARCH_AD),
    output: zod_1.z.array(zod_1.z.object({
        headlines: zod_1.z.string(),
        descriptions: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.PAID])
        .extend({
        productOrService: zod_1.z.string(),
        keywords: zod_1.z.array(zod_1.z.string()),
        cta: zod_1.z.string(),
    }),
});
exports.blogPostTipsSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.BLOG_POST_TIPS),
    output: zod_1.z.array(zod_1.z.object({
        blogHtml: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
        .extend({
        blogTopic: zod_1.z.string(),
    }),
});
exports.blogPostGuideSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.BLOG_POST_GUIDE),
    output: zod_1.z.array(zod_1.z.object({
        blogHtml: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
        .extend({
        blogTopic: zod_1.z.string(),
    }),
});
exports.blogPostComparisonSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.BLOG_POST_COMPARISON),
    output: zod_1.z.array(zod_1.z.object({
        blogHtml: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
        .extend({
        blogTopic: zod_1.z.string(),
        comparisonFocusPoints: zod_1.z.string(),
    }),
});
exports.blogPostCaseStudySchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.BLOG_POST_CASE_STUDY),
    output: zod_1.z.array(zod_1.z.object({
        blogHtml: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
        .extend({
        solutionDescription: zod_1.z.string(),
        results: zod_1.z.string(),
    }),
});
exports.blogPostGeneralSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.BLOG_POST_GENERAL),
    output: zod_1.z.array(zod_1.z.object({
        blogHtml: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.BLOG])
        .extend({
        blogTopic: zod_1.z.string(),
    }),
});
exports.websiteAboutSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.WEBSITE_ABOUT),
    output: zod_1.z.array(zod_1.z.object({
        aboutContent: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams.merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.BLOG]),
});
exports.websiteFaqSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.WEBSITE_FAQ),
    output: zod_1.z.array(zod_1.z.object({
        faqEntries: zod_1.z.array(zod_1.z.object({ question: zod_1.z.string(), answer: zod_1.z.string() })),
    })),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.WEB])
        .extend({
        question: zod_1.z.string(),
        answer: zod_1.z.string(),
    }),
});
exports.websiteTestimonialSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.WEBSITE_TESTEMONIAL),
    output: zod_1.z.array(zod_1.z.object({
        testimonial: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams.merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.WEB]),
});
exports.articleSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.ARTICLE),
    output: zod_1.z.array(zod_1.z.object({
        blogHtml: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams.merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.WEB]),
});
exports.websiteProductDescriptionSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION),
    output: zod_1.z.array(zod_1.z.object({
        productName: zod_1.z.string(),
        description: zod_1.z.string(),
    })),
    inputParams: exports.baseInputParams.merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.WEB]),
});
exports.linkedinSponsoredAdSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.LINKEDIN_SPONSORED_AD),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.PAID])
        .extend({
        adGoal: zod_1.z.string().describe("מטרת הפרסומת"),
        mainMessage: zod_1.z.string().describe("המסר המרכזי בפרסומת"),
    }),
    output: zod_1.z.array(zod_1.z.object({
        AdText: zod_1.z.string(),
        AdHeadline: zod_1.z.string(),
        captionText: zod_1.z.string(),
        callToActionButton: zod_1.z.string(),
    })),
    category: zod_1.z.literal(documentCategory_1.DocumentCategory.PAID),
});
// FACEBOOK_SPONSORED_AD Schema
exports.facebookSponsoredAdSchema = exports.ZDocumentEntityBase.extend({
    type: zod_1.z.literal(DocumentEntityType_1.DocumentEntityType.FACEBOOK_SPONSORED_AD),
    inputParams: exports.baseInputParams
        .merge(exports.categoryInputParams[documentCategory_1.DocumentCategory.PAID])
        .extend({
        adGoal: zod_1.z.string().describe("מטרת הפרסומת"),
        mainMessage: zod_1.z.string().describe("המסר המרכזי בפרסומת"),
    }),
    output: zod_1.z.array(zod_1.z.object({
        AdText: zod_1.z.string(),
        AdHeadline: zod_1.z.string(),
        captionText: zod_1.z.string(),
        callToActionButton: zod_1.z.string(),
    })),
    category: zod_1.z.literal(documentCategory_1.DocumentCategory.PAID),
});
exports.ZDocumentEntity = zod_1.z.discriminatedUnion("type", [
    // SOCIAL MEDIA
    exports.instagramCaptionSchema,
    exports.instagramPostIdeaSchema,
    exports.instagramBioDescriptionSchema,
    exports.instagramStoryIdeaSchema,
    exports.instagramReelIdeaSchema,
    exports.instagramReelScriptSchema,
    // LinkedIn
    exports.linkedInPostCaptionSchema,
    exports.linkedInPostIdeaSchema,
    exports.linkedInPageAboutSchema,
    // Facebook
    exports.facebookPostCaptionSchema,
    exports.facebookPostIdeaSchema,
    exports.facebookPageAboutSchema,
    // Twitter & Threads
    exports.twitterTwitSchema,
    exports.threadsTwitSchema,
    // MAILING
    exports.cartAbandonmentEmailSchema,
    exports.trafficEmailSchema,
    exports.pushNotificationSchema,
    exports.newsletterEmailSchema,
    exports.productUpdateEmailSchema,
    exports.welcomeEmailSchema,
    exports.emailContentSchema,
    // SMS
    exports.flashSaleSmsSchema,
    exports.notificationSmsSchema,
    exports.smsContentSchema,
    exports.smsIdeaSchema,
    // PAID
    exports.googleAdsKeywordsSchema,
    exports.googleAdsIdeaSchema,
    exports.socialAdSchema,
    exports.emailAdPromoSchema,
    exports.searchAdSchema,
    exports.instagramSponsoredAdSchema,
    exports.linkedinSponsoredAdSchema,
    exports.facebookSponsoredAdSchema,
    // WEB
    exports.websiteAboutSchema,
    exports.websiteFaqSchema,
    exports.websiteTestimonialSchema,
    exports.websiteProductDescriptionSchema,
    // BLOG
    exports.articleSchema,
    exports.blogPostOpinionSchema,
    exports.blogPostTipsSchema,
    exports.blogPostGuideSchema,
    exports.blogPostComparisonSchema,
    exports.blogPostCaseStudySchema,
    exports.blogPostGeneralSchema,
]);
//# sourceMappingURL=documentEntity.js.map