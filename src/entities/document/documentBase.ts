import { DocumentEntityType } from "../../types/DocumentEntityType";
import { z } from "zod";
import { DocumentCategory } from "../../types/documentCategory";

export const DocumentTypeFactory = {
  [DocumentEntityType.INSTAGRAM_CAPTION]: {
    inputParams: z.object({
      caption: z.string(),
    }),
    output: z.object({
      captionText: z.string(),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.INSTAGRAM_POST_IDEA]: {
    inputParams: z.object({
      description: z.string(),
    }),
    output: z.object({
      ideaDescription: z.string(),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION]: {
    inputParams: z.object({
      description: z.string(),
    }),
    output: z.object({
      bioDescription: z.string(),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.INSTAGRAM_STORY_IDEA]: {
    inputParams: z.object({
      description: z.string(),
    }),
    output: z.object({
      storyIdea: z.string(),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.INSTAGRAM_REEL_IDEA]: {
    inputParams: z.object({
      description: z.string(),
    }),
    output: z.object({
      reelIdea: z.string(),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.INSTAGRAM_REEL_SCRIPT]: {
    inputParams: z.object({
      script: z.string(),
    }),
    output: z.object({
      reelScript: z.string(),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.FACEBOOK_POST_CAPTION]: {
    inputParams: z.object({
      caption: z.string(),
    }),
    output: z.object({
      postCaption: z.string(),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.FACEBOOK_POST_IDEA]: {
    inputParams: z.object({
      description: z.string(),
    }),
    output: z.object({
      postIdea: z.string(),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.FACEBOOK_PAGE_ABOUT]: {
    inputParams: z.object({
      description: z.string(),
    }),
    output: z.object({
      pageAbout: z.string(),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.LINKEDIN_POST_CAPTION]: {
    inputParams: z.object({
      caption: z.string(),
    }),
    output: z.object({
      postCaption: z.string(),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.LINKEDIN_POST_IDEA]: {
    inputParams: z.object({
      description: z.string(),
    }),
    output: z.object({
      postIdea: z.string(),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.LINKEDIN_PAGE_ABOUT]: {
    inputParams: z.object({
      description: z.string(),
    }),
    output: z.object({
      pageAbout: z.string(),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.TWITTER_TWIT]: {
    inputParams: z.object({
      tweet: z.string(),
    }),
    output: z.object({
      tweetContent: z.string(),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.THREADS_TWIT]: {
    inputParams: z.object({
      thread: z.string(),
    }),
    output: z.object({
      threadContent: z.array(z.string()),
    }),
    category: DocumentCategory.SOCIAL_MEDIA,
  },
  [DocumentEntityType.EMAIL_CONTENT]: {
    inputParams: z.object({
      description: z.string(),
    }),
    output: z.object({
      subject: z.string(),
      content: z.string(),
    }),
    category: DocumentCategory.MAILING,
  },
  [DocumentEntityType.EMAIL_IDEA]: {
    inputParams: z.object({
      description: z.string(),
    }),
    output: z.object({
      emailIdea: z.string(),
    }),
    category: DocumentCategory.MAILING,
  },
  [DocumentEntityType.SMS_CONTENT]: {
    inputParams: z.object({
      content: z.string(),
    }),
    output: z.object({
      smsContent: z.string(),
    }),
    category: DocumentCategory.MAILING,
  },
  [DocumentEntityType.SMS_IDEA]: {
    inputParams: z.object({
      description: z.string(),
    }),
    output: z.object({
      smsIdea: z.string(),
    }),
    category: DocumentCategory.MAILING,
  },
  [DocumentEntityType.PHONE_CALL_SCRIPT]: {
    inputParams: z.object({
      script: z.string(),
    }),
    output: z.object({
      phoneCallScript: z.string(),
    }),
    category: DocumentCategory.MAILING,
  },
  [DocumentEntityType.GOOGLE_ADS_KEYWORDS]: {
    inputParams: z.object({
      keywords: z.array(z.string()),
    }),
    output: z.object({
      adKeywords: z.array(z.string()),
    }),
    category: DocumentCategory.PAID,
  },
  [DocumentEntityType.GOOGLE_ADS_IDEA]: {
    inputParams: z.object({
      description: z.string(),
    }),
    output: z.object({
      adIdea: z.string(),
    }),
    category: DocumentCategory.PAID,
  },
  [DocumentEntityType.WEBSITE_ABOUT]: {
    inputParams: z.object({
      description: z.string(),
    }),
    output: z.object({
      aboutContent: z.string(),
    }),
    category: DocumentCategory.WEB,
  },
  [DocumentEntityType.WEBSITE_FAQ]: {
    inputParams: z.object({
      question: z.string(),
      answer: z.string(),
    }),
    output: z.object({
      faqEntries: z.array(
        z.object({ question: z.string(), answer: z.string() })
      ),
    }),
    category: DocumentCategory.WEB,
  },
  [DocumentEntityType.WEBSITE_TESTEMONIAL]: {
    inputParams: z.object({
      testimonial: z.string(),
    }),
    output: z.object({
      testimonials: z.array(z.string()),
    }),
    category: DocumentCategory.WEB,
  },
  [DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION]: {
    inputParams: z.object({
      productName: z.string(),
      description: z.string(),
    }),
    output: z.object({
      productDescriptions: z.array(
        z.object({ productName: z.string(), description: z.string() })
      ),
    }),
    category: DocumentCategory.WEB,
  },
};
