import { z } from "zod";
import { DocumentEntityType } from "../../types/DocumentEntityType";
import { ZDocumentToneType } from "../../types/DocumentToneType";
import { DocumentCategory } from "../../types/documentCategory";

// Base Schema for Document Entity
export const ZDocumentEntityBase = z.object({
  websiteId: z.string(),
  companyId: z.string(),
  name: z.string(),
  id: z.string(),
});

// Base Input Params
export const baseInputParams = z.object({
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  audienceId: z.string(),
  tone: ZDocumentToneType,
});

// Category Input Params
export const categoryInputParams = {
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

// SOCIAL MEDIA Schemas
export const instagramCaptionSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.INSTAGRAM_CAPTION),
  output: z.array(
    z.object({
      captionText: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
    .extend({
      hashtags: z.array(z.string()),
      postGoal: z.string().describe("מטרת הפוסט"),
    }),
});

export const instagramSponsoredAdSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.INSTAGRAM_SPONSORED_AD),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.PAID])
    .extend({
      adGoal: z.string().describe("מטרת הפרסומת"),
      mainMessage: z.string().describe("המסר המרכזי בפרסומת"),
    }),
  output: z.array(
    z.object({
      primaryText: z.string(),
      callToAction: z.string(),
    })
  ),
  category: z.literal(DocumentCategory.PAID),
});

export const instagramPostIdeaSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.INSTAGRAM_POST_IDEA),
  output: z
    .array(
      z.object({
        ideaDescription: z.string(),
        imageDescription: z.string(),
      })
    )
    .length(3),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
    .extend({
      hashtags: z.array(z.string()),
      postGoal: z.string().describe("מטרת הפוסט"),
    }),
});

export const instagramBioDescriptionSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION),
  output: z.array(
    z.object({
      bioDescription: z.string(),
    })
  ),
  inputParams: baseInputParams.merge(
    categoryInputParams[DocumentCategory.SOCIAL_MEDIA]
  ),
});

export const instagramStoryIdeaSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.INSTAGRAM_STORY_IDEA),
  output: z.array(
    z.object({
      storyIdea: z.string(),
      storyDescription: z.string(),
      storyWidgets: z.string(),
    })
  ),
  inputParams: baseInputParams.merge(
    categoryInputParams[DocumentCategory.SOCIAL_MEDIA]
  ),
});

export const instagramReelIdeaSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.INSTAGRAM_REEL_IDEA),
  output: z
    .array(
      z.object({
        reelIdea: z.string(),
        reelDescription: z.string(),
        reelWidgets: z.string(),
      })
    )
    .length(3),
  inputParams: baseInputParams.merge(
    categoryInputParams[DocumentCategory.SOCIAL_MEDIA]
  ),
});

export const instagramReelScriptSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.INSTAGRAM_REEL_SCRIPT),
  output: z.array(
    z.object({
      reelScript: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
    .extend({
      script: z.string(),
    }),
});

// LinkedIn Types
export const linkedInPostCaptionSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.LINKEDIN_POST_CAPTION),
  output: z
    .array(
      z.object({
        postCaption: z.string(),
      })
    )
    .length(3),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
    .extend({
      hashtags: z.array(z.string()),
      postGoal: z.string().describe("מטרת הפוסט"),
    }),
});

export const linkedInPostIdeaSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.LINKEDIN_POST_IDEA),
  output: z.array(
    z.object({
      postIdea: z.string(),
      imageDescription: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
    .extend({
      useEmoji: z.boolean(),
      useHashtag: z.boolean(),
    }),
});

export const linkedInPageAboutSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.LINKEDIN_PAGE_ABOUT),
  output: z.array(
    z.object({
      pageAbout: z.string(),
    })
  ),
  inputParams: baseInputParams.merge(
    categoryInputParams[DocumentCategory.SOCIAL_MEDIA]
  ),
});

// Facebook Types
export const facebookPostCaptionSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.FACEBOOK_POST_CAPTION),
  output: z.array(
    z.object({
      postCaption: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
    .extend({
      hashtags: z.array(z.string()),
      postGoal: z.string().describe("מטרת הפוסט"),
    }),
});

export const facebookPostIdeaSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.FACEBOOK_POST_IDEA),
  output: z.array(
    z.object({
      postIdea: z.string(),
      imageIdea: z.string().describe("Image idea for the post"),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
    .extend({
      hashtags: z.array(z.string()),
      postGoal: z.string().describe("מטרת הפוסט"),
    }),
});

export const facebookPageAboutSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.FACEBOOK_PAGE_ABOUT),
  output: z.array(
    z.object({
      pageAbout: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
    .extend({
      useEmoji: z.boolean(),
      useHashtag: z.boolean(),
    }),
});

// Twitter & Threads Types
export const twitterTwitSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.TWITTER_TWIT),
  output: z.array(
    z.object({
      tweetContent: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
    .extend({
      useEmoji: z.boolean(),
      useHashtag: z.boolean(),
    }),
});

export const threadsTwitSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.THREADS_TWIT),
  output: z.array(
    z.object({
      threadContent: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.SOCIAL_MEDIA])
    .extend({
      useEmoji: z.boolean(),
      useHashtag: z.boolean(),
    }),
});

// MAILING Types
export const cartAbandonmentEmailSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.CART_ABANDONMENT_EMAIL),
  output: z.array(
    z.object({
      subject: z.string(),
      mailBody: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.MAILING])
    .extend({
      incentives: z
        .string()
        .describe(
          "Incentives to encourage customers to return and complete the purchase"
        ),
      cartItems: z.string().describe("Items left in the cart"),
      customerSupport: z.string().describe("Ways to contact support"),
    }),
});

export const trafficEmailSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.TRAFFIC_EMAIL),
  output: z.array(
    z.object({
      subject: z.string(),
      mailBody: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.MAILING])
    .extend({
      contentTopic: z.string().describe("Content topic you want to share"),
    }),
});

export const pushNotificationSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.PUSH_NOTIFICATION),
  output: z.array(
    z.object({
      message: z.string(),
      title: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.MAILING])
    .extend({
      notificationGoal: z.string().describe("Goal of the push notification"),
      mainMessage: z.string().describe("Main message of the push notification"),
      cta: z.string().describe("Call to action"),
    }),
});

export const newsletterEmailSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.NEWSLETTER_EMAIL),
  output: z.array(
    z.object({
      subject: z.string(),
      mailBody: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.MAILING])
    .extend({
      mainTopic: z.string().describe("Main topic of the email"),
      cta: z.string().describe("Call to action"),
    }),
});

// PAID Schemas
export const googleAdsKeywordsSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.GOOGLE_ADS_KEYWORDS),
  output: z.array(
    z.object({
      keywordsType: z.string(),
      adKeywords: z.array(z.string()),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.PAID])
    .extend({
      keywords: z.array(z.string()),
    }),
});

// BLOG Schemas
export const blogPostOpinionSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.BLOG_POST_OPINION),
  output: z.array(
    z.object({
      blogHtml: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.BLOG])
    .extend({
      blogTopic: z.string().min(1),
      blogOpinion: z.string().min(1),
      blogBrief: z.string().min(1),
    }),
});

export const productUpdateEmailSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.PRODUCT_UPDATE_EMAIL),
  output: z.array(
    z.object({
      subject: z.string(),
      mailBody: z.string(),
    })
  ),
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
});

export const welcomeEmailSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.WELCOME_EMAIL),
  output: z.array(
    z.object({
      subject: z.string(),
      mailBody: z.string(),
    })
  ),
  inputParams: baseInputParams.merge(
    categoryInputParams[DocumentCategory.MAILING]
  ),
});

export const emailContentSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.EMAIL_CONTENT),
  output: z.array(
    z.object({
      subject: z.string(),
      mailBody: z.string(),
    })
  ),
  inputParams: baseInputParams.merge(
    categoryInputParams[DocumentCategory.MAILING]
  ),
});

export const flashSaleSmsSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.FLASH_SALE_SMS),
  output: z.array(
    z.object({
      smsContent: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.SMS])
    .extend({
      promotionDetails: z.string().describe("פרטי המבצע שברצונכם לקדם"),
      redemptionMethod: z.string().describe("אופן מימוש המבצע"),
      duration: z.string().optional().describe("משך זמן המבצע"),
      cta: z.string().describe("קריאה לפעולה"),
    }),
});

export const notificationSmsSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.NOTIFICATION_SMS),
  output: z.array(
    z.object({
      smsContent: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.SMS])
    .extend({
      notificationType: z.string().describe("סוג ההתראה"),
      notificationDetails: z.string().describe("פרטי ההתראה"),
      supportContact: z
        .string()
        .describe("כיצד לקוחות יכולים לפנות אם יש להם שאלות או זקוקים לסיוע"),
    }),
});

export const smsContentSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.SMS_CONTENT),
  output: z.array(
    z.object({
      smsContent: z.string(),
    })
  ),
  inputParams: baseInputParams.merge(
    categoryInputParams[DocumentCategory.SMS].extend({
      cta: z.string().describe("קריאה לפעולה"),
    })
  ),
});

export const smsIdeaSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.SMS_IDEA),
  output: z.array(
    z.object({
      smsIdea: z.string(),
    })
  ),
  inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.SMS]),
});

export const googleAdsIdeaSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.GOOGLE_ADS_IDEA),
  output: z.array(
    z.object({
      adIdea: z.string(),
    })
  ),
  inputParams: baseInputParams.merge(
    categoryInputParams[DocumentCategory.PAID]
  ),
});

export const socialAdSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.SOCIAL_AD),
  output: z.array(
    z.object({
      primaryText: z.string(),
      headline: z.string(),
      description: z.string(),
      callToActionButton: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.PAID])
    .extend({
      adGoal: z.string(),
      mainMessage: z.string(),
      cta: z.string(),
    }),
});

export const emailAdPromoSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.EMAIL_AD_PROMO),
  output: z.array(
    z.object({
      subject: z.string(),
      content: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.PAID])
    .extend({
      offerPromotion: z.string(),
      cta: z.string(),
      personalization: z.string(),
    }),
});

export const searchAdSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.SEARCH_AD),
  output: z.array(
    z.object({
      headlines: z.string(),
      descriptions: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.PAID])
    .extend({
      productOrService: z.string(),
      keywords: z.array(z.string()),
      cta: z.string(),
    }),
});

export const blogPostTipsSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.BLOG_POST_TIPS),
  output: z.array(
    z.object({
      blogHtml: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.BLOG])
    .extend({
      blogTopic: z.string(),
    }),
});

export const blogPostGuideSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.BLOG_POST_GUIDE),
  output: z.array(
    z.object({
      blogHtml: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.BLOG])
    .extend({
      blogTopic: z.string(),
    }),
});

export const blogPostComparisonSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.BLOG_POST_COMPARISON),
  output: z.array(
    z.object({
      blogHtml: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.BLOG])
    .extend({
      blogTopic: z.string(),
      comparisonFocusPoints: z.string(),
    }),
});

export const blogPostCaseStudySchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.BLOG_POST_CASE_STUDY),
  output: z.array(
    z.object({
      blogHtml: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.BLOG])
    .extend({
      solutionDescription: z.string(),
      results: z.string(),
    }),
});

export const blogPostGeneralSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.BLOG_POST_GENERAL),
  output: z.array(
    z.object({
      blogHtml: z.string(),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.BLOG])
    .extend({
      blogTopic: z.string(),
    }),
});

export const websiteAboutSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.WEBSITE_ABOUT),
  output: z.array(
    z.object({
      aboutContent: z.string(),
    })
  ),
  inputParams: baseInputParams.merge(
    categoryInputParams[DocumentCategory.BLOG]
  ),
});

export const websiteFaqSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.WEBSITE_FAQ),
  output: z.array(
    z.object({
      faqEntries: z.array(
        z.object({ question: z.string(), answer: z.string() })
      ),
    })
  ),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.WEB])
    .extend({
      question: z.string(),
      answer: z.string(),
    }),
});

export const websiteTestimonialSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.WEBSITE_TESTEMONIAL),
  output: z.array(
    z.object({
      testimonial: z.string(),
    })
  ),
  inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.WEB]),
});

export const articleSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.ARTICLE),
  output: z.array(
    z.object({
      blogHtml: z.string(),
    })
  ),
  inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.WEB]),
});

export const websiteProductDescriptionSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION),
  output: z.array(
    z.object({
      productName: z.string(),
      description: z.string(),
    })
  ),
  inputParams: baseInputParams.merge(categoryInputParams[DocumentCategory.WEB]),
});

export const linkedinSponsoredAdSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.LINKEDIN_SPONSORED_AD),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.PAID])
    .extend({
      adGoal: z.string().describe("מטרת הפרסומת"),
      mainMessage: z.string().describe("המסר המרכזי בפרסומת"),
    }),
  output: z.array(
    z.object({
      AdText: z.string(),
      AdHeadline: z.string(),
      captionText: z.string(),
      callToActionButton: z.string(),
    })
  ),
  category: z.literal(DocumentCategory.PAID),
});

// FACEBOOK_SPONSORED_AD Schema
export const facebookSponsoredAdSchema = ZDocumentEntityBase.extend({
  type: z.literal(DocumentEntityType.FACEBOOK_SPONSORED_AD),
  inputParams: baseInputParams
    .merge(categoryInputParams[DocumentCategory.PAID])
    .extend({
      adGoal: z.string().describe("מטרת הפרסומת"),
      mainMessage: z.string().describe("המסר המרכזי בפרסומת"),
    }),
  output: z.array(
    z.object({
      AdText: z.string(),
      AdHeadline: z.string(),
      captionText: z.string(),
      callToActionButton: z.string(),
    })
  ),
  category: z.literal(DocumentCategory.PAID),
});

export const ZDocumentEntity = z.discriminatedUnion("type", [
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
  instagramSponsoredAdSchema,
  linkedinSponsoredAdSchema,
  facebookSponsoredAdSchema,

  // WEB
  websiteAboutSchema,
  websiteFaqSchema,
  websiteTestimonialSchema,
  websiteProductDescriptionSchema,

  // BLOG
  articleSchema,
  blogPostOpinionSchema,
  blogPostTipsSchema,
  blogPostGuideSchema,
  blogPostComparisonSchema,
  blogPostCaseStudySchema,
  blogPostGeneralSchema,
]);

// TypeScript type for inference
export type DocumentEntity = z.infer<typeof ZDocumentEntity>;
