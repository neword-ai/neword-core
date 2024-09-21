import { DocumentEntityType } from "../../types/DocumentEntityType";
import { DocumentCategory } from "../../types/documentCategory";

// Mapping each DocumentEntityType to its corresponding DocumentCategory
export const DocumentTypeToCategory: Record<
  DocumentEntityType,
  DocumentCategory
> = {
  // SOCIAL MEDIA
  [DocumentEntityType.INSTAGRAM_CAPTION]: DocumentCategory.SOCIAL_MEDIA,
  [DocumentEntityType.INSTAGRAM_POST_IDEA]: DocumentCategory.SOCIAL_MEDIA,
  [DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION]: DocumentCategory.SOCIAL_MEDIA,
  [DocumentEntityType.INSTAGRAM_STORY_IDEA]: DocumentCategory.SOCIAL_MEDIA,
  [DocumentEntityType.INSTAGRAM_REEL_IDEA]: DocumentCategory.SOCIAL_MEDIA,
  [DocumentEntityType.INSTAGRAM_REEL_SCRIPT]: DocumentCategory.SOCIAL_MEDIA,
  [DocumentEntityType.LINKEDIN_POST_CAPTION]: DocumentCategory.SOCIAL_MEDIA,
  [DocumentEntityType.LINKEDIN_POST_IDEA]: DocumentCategory.SOCIAL_MEDIA,
  [DocumentEntityType.LINKEDIN_PAGE_ABOUT]: DocumentCategory.SOCIAL_MEDIA,
  [DocumentEntityType.FACEBOOK_POST_CAPTION]: DocumentCategory.SOCIAL_MEDIA,
  [DocumentEntityType.FACEBOOK_POST_IDEA]: DocumentCategory.SOCIAL_MEDIA,
  [DocumentEntityType.FACEBOOK_PAGE_ABOUT]: DocumentCategory.SOCIAL_MEDIA,
  [DocumentEntityType.TWITTER_TWIT]: DocumentCategory.SOCIAL_MEDIA,
  [DocumentEntityType.THREADS_TWIT]: DocumentCategory.SOCIAL_MEDIA,

  // MAILING
  [DocumentEntityType.CART_ABANDONMENT_EMAIL]: DocumentCategory.MAILING,
  [DocumentEntityType.TRAFFIC_EMAIL]: DocumentCategory.MAILING,
  [DocumentEntityType.PUSH_NOTIFICATION]: DocumentCategory.MAILING,
  [DocumentEntityType.NEWSLETTER_EMAIL]: DocumentCategory.MAILING,
  [DocumentEntityType.PRODUCT_UPDATE_EMAIL]: DocumentCategory.MAILING,
  [DocumentEntityType.WELCOME_EMAIL]: DocumentCategory.MAILING,
  [DocumentEntityType.EMAIL_CONTENT]: DocumentCategory.MAILING,

  // SMS
  [DocumentEntityType.FLASH_SALE_SMS]: DocumentCategory.MAILING,
  [DocumentEntityType.NOTIFICATION_SMS]: DocumentCategory.MAILING,
  [DocumentEntityType.SMS_CONTENT]: DocumentCategory.MAILING,
  [DocumentEntityType.SMS_IDEA]: DocumentCategory.MAILING,

  // PAID
  [DocumentEntityType.GOOGLE_ADS_KEYWORDS]: DocumentCategory.PAID,
  [DocumentEntityType.GOOGLE_ADS_IDEA]: DocumentCategory.PAID,
  [DocumentEntityType.SOCIAL_AD]: DocumentCategory.PAID,
  [DocumentEntityType.EMAIL_AD_PROMO]: DocumentCategory.PAID,
  [DocumentEntityType.SEARCH_AD]: DocumentCategory.PAID,
  [DocumentEntityType.INSTAGRAM_SPONSORED_AD]: DocumentCategory.PAID,
  [DocumentEntityType.TWITTER_SPONSORED_AD]: DocumentCategory.PAID,
  [DocumentEntityType.FACEBOOK_SPONSORED_AD]: DocumentCategory.PAID,
  [DocumentEntityType.LINKEDIN_SPONSORED_AD]: DocumentCategory.PAID,

  // WEB
  [DocumentEntityType.WEBSITE_ABOUT]: DocumentCategory.WEB,
  [DocumentEntityType.WEBSITE_FAQ]: DocumentCategory.WEB,
  [DocumentEntityType.WEBSITE_TESTEMONIAL]: DocumentCategory.WEB,
  [DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION]: DocumentCategory.WEB,

  // BLOG
  [DocumentEntityType.BLOG_POST_OPINION]: DocumentCategory.BLOG,
  [DocumentEntityType.ARTICLE]: DocumentCategory.BLOG,
  [DocumentEntityType.BLOG_POST_TIPS]: DocumentCategory.BLOG,
  [DocumentEntityType.BLOG_POST_GUIDE]: DocumentCategory.BLOG,
  [DocumentEntityType.BLOG_POST_COMPARISON]: DocumentCategory.BLOG,
  [DocumentEntityType.BLOG_POST_CASE_STUDY]: DocumentCategory.BLOG,
  [DocumentEntityType.BLOG_POST_GENERAL]: DocumentCategory.BLOG,
  [DocumentEntityType.PHONE_CALL_SCRIPT]: DocumentCategory.SOCIAL_MEDIA,
};
