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
    [DocumentCategory.SOCIAL_MEDIA]: z.object({
        cta: z.string().describe("קריאה לפעולה"),
        additionalInformation: z.string().optional(),
    }),
    [DocumentCategory.PAID]: z.object({}),
    [DocumentCategory.SMS]: z.object({
        legalInformation: z.string().optional(),
        additionalInformation: z.string().optional(),
    }),
    [DocumentCategory.MAILING]: z.object({
        cta: z.string().describe("קריאה לפעולה"),
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
            hashtags: z.array(z.string()),
            postGoal: z.string().describe("מטרת הפוסט"),
        }),
        output: z.object({
            captionText: z.string(),
        }),
        category: DocumentCategory.SOCIAL_MEDIA,
    },
    [DocumentEntityType.INSTAGRAM_POST_IDEA]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA].extend({
            hashtags: z.array(z.string()),
            postGoal: z.string().describe("מטרת הפוסט"),
        })),
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
            hashtags: z.array(z.string()),
            postGoal: z.string().describe("מטרת הפוסט"),
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
            hashtags: z.array(z.string()),
            postGoal: z.string().describe("מטרת הפוסט"),
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
            hashtags: z.array(z.string()),
            postGoal: z.string().describe("מטרת הפוסט"),
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
    [DocumentEntityType.CART_ABANDONMENT_EMAIL]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.MAILING])
            .extend({
            incentives: z
                .string()
                .describe("תמריצים לשכנוע לקוחות לחזור ולהשלים את הרכישה"),
            cartItems: z.string().describe("הפריטים שנותרו בעגלה"),
            customerSupport: z.string().describe("דרכים ליצירת קשר לתמיכה"),
        }),
        output: z.object({
            subject: z.string(),
            mailBody: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.TRAFFIC_EMAIL]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.MAILING])
            .extend({
            contentTopic: z.string().describe("נושא התוכן שתרצו לשתף"),
        }),
        output: z.object({
            subject: z.string(),
            mailBody: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.PUSH_NOTIFICATION]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.MAILING])
            .extend({
            notificationGoal: z.string().describe("מטרת הודעת הפוש"),
            mainMessage: z.string().describe("המסר המרכזי של הודעת הפוש"),
            cta: z.string().describe("קריאה לפעולה"),
        }),
        output: z.object({
            message: z.string(),
            title: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.NEWSLETTER_EMAIL]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.MAILING])
            .extend({
            mainTopic: z.string().describe("הנושא העיקרי של המייל"),
            cta: z.string().describe("קריאה לפעולה"),
        }),
        output: z.object({
            subject: z.string(),
            mailBody: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.PRODUCT_UPDATE_EMAIL]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.MAILING])
            .extend({
            productUpdates: z
                .string()
                .describe("העדכונים העיקריים והתכונות החדשות של המוצר"),
            updateBenefits: z
                .string()
                .describe("יתרונות העדכון וכיצד הם מועילים ללקוחות"),
        }),
        output: z.object({
            subject: z.string(),
            mailBody: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.WELCOME_EMAIL]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.MAILING]),
        output: z.object({
            subject: z.string(),
            mailBody: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    [DocumentEntityType.EMAIL_CONTENT]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.MAILING]),
        output: z.object({
            subject: z.string(),
            mailBody: z.string(),
        }),
        category: DocumentCategory.MAILING,
    },
    //SMS
    [DocumentEntityType.FLASH_SALE_SMS]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.SMS])
            .extend({
            promotionDetails: z.string().describe("פרטי המבצע שברצונכם לקדם"),
            redemptionMethod: z.string().describe("אופן מימוש המבצע"),
            duration: z.string().optional().describe("משך זמן המבצע"),
            cta: z.string().describe("קריאה לפעולה"),
        }),
        output: z.object({
            smsContent: z.string(),
        }),
        category: DocumentCategory.SMS,
    },
    [DocumentEntityType.NOTIFICATION_SMS]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.SMS])
            .extend({
            notificationType: z.string().describe("סוג ההתראה"),
            notificationDetails: z.string().describe("פרטי ההתראה"),
            supportContact: z
                .string()
                .describe("כיצד לקוחות יכולים לפנות אם יש להם שאלות או זקוקים לסיוע"),
        }),
        output: z.object({
            smsContent: z.string(),
        }),
        category: DocumentCategory.SMS,
    },
    [DocumentEntityType.SMS_CONTENT]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.SMS].extend({
            cta: z.string().describe("קריאה לפעולה"),
        })),
        output: z.object({
            smsContent: z.string(),
        }),
        category: DocumentCategory.SMS,
    },
    [DocumentEntityType.SMS_IDEA]: {
        inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.SMS]),
        output: z.object({
            smsIdea: z.string(),
        }),
        category: DocumentCategory.SMS,
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
    [DocumentEntityType.LINKEDIN_SPONSORED_AD]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.PAID])
            .extend({
            adGoal: z.string().describe("מטרת הפרסומת"),
            mainMessage: z.string().describe("המסר המרכזי בפרסומת"),
        }),
        output: z.object({
            AdText: z.string(),
            AdHeadline: z.string(),
            captionText: z.string(),
            callToActionButton: z.string(),
        }),
        category: DocumentCategory.PAID,
    },
    [DocumentEntityType.FACEBOOK_SPONSORED_AD]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.PAID])
            .extend({
            adGoal: z.string().describe("מטרת הפרסומת"),
            mainMessage: z.string().describe("המסר המרכזי בפרסומת"),
        }),
        output: z.object({
            AdText: z.string(),
            AdHeadline: z.string(),
            captionText: z.string(),
            callToActionButton: z.string(),
        }),
        category: DocumentCategory.PAID,
    },
    [DocumentEntityType.INSTAGRAM_SPONSORED_AD]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.PAID])
            .extend({
            adGoal: z.string().describe("מטרת הפרסומת"),
            mainMessage: z.string().describe("המסר המרכזי בפרסומת"),
        }),
        output: z.object({
            primaryText: z.string(),
            callToAction: z.string(),
        }),
        category: DocumentCategory.PAID,
    },
    [DocumentEntityType.TWITTER_SPONSORED_AD]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.PAID])
            .extend({
            adGoal: z.string().describe("מטרת הפרסומת"),
            mainMessage: z.string().describe("המסר המרכזי בפרסומת"),
        }),
        output: z.object({
            introductoryText: z.string(),
            headline: z.string(),
            description: z.string(),
            callToActionButton: z.string(),
        }),
        category: DocumentCategory.PAID,
    },
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
    [DocumentEntityType.SOCIAL_AD]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.PAID])
            .extend({
            adGoal: z.string(),
            mainMessage: z.string(),
            cta: z.string(),
        }),
        output: z.object({
            primaryText: z.string(),
            headline: z.string(),
            description: z.string(),
            callToActionButton: z.string(),
        }),
        category: DocumentCategory.PAID,
    },
    [DocumentEntityType.EMAIL_AD_PROMO]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.PAID])
            .extend({
            offerPromotion: z.string(),
            cta: z.string(),
            personalization: z.string(),
        }),
        output: z.object({
            subject: z.string(),
            content: z.string(),
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
            descriptions: z.string(),
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
            blogHtml: z.string(),
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
            blogTopic: z.string().min(1),
            blogOpinion: z.string().min(1),
            blogBrief: z.string().min(1),
        }),
        output: z.object({
            blogHtml: z.string(),
        }),
        category: DocumentCategory.BLOG,
    },
    [DocumentEntityType.BLOG_POST_TIPS]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.BLOG])
            .extend({
            blogTopic: z.string(),
        }),
        output: z.object({
            blogHtml: z.string(),
        }),
        category: DocumentCategory.BLOG,
    },
    [DocumentEntityType.BLOG_POST_GUIDE]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.BLOG])
            .extend({
            blogTopic: z.string(),
        }),
        output: z.object({
            blogHtml: z.string(),
        }),
        category: DocumentCategory.BLOG,
    },
    [DocumentEntityType.BLOG_POST_COMPARISON]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.BLOG])
            .extend({
            blogTopic: z.string(),
            comparisonFocusPoints: z.string(),
        }),
        output: z.object({
            blogHtml: z.string(),
        }),
        category: DocumentCategory.BLOG,
    },
    [DocumentEntityType.BLOG_POST_CASE_STUDY]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.BLOG])
            .extend({
            solutionDescription: z.string(),
            results: z.string(),
        }),
        output: z.object({
            blogHtml: z.string(),
        }),
        category: DocumentCategory.BLOG,
    },
    [DocumentEntityType.BLOG_POST_GENERAL]: {
        inputParams: baseInputParams
            .merge(categoryInputParams[DocumentCategory.BLOG])
            .extend({
            blogTopic: z.string(),
        }),
        output: z.object({
            blogHtml: z.string(),
        }),
        category: DocumentCategory.BLOG,
    },
};
//# sourceMappingURL=documentBase.js.map