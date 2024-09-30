import { ZodObject } from "zod";
import { DocumentEntityType } from "../../types/DocumentEntityType";
import {
  instagramCaptionSchema,
  instagramSponsoredAdSchema,
  instagramPostIdeaSchema,
  instagramBioDescriptionSchema,
  instagramStoryIdeaSchema,
  instagramReelIdeaSchema,
  instagramReelScriptSchema,
  linkedInPostCaptionSchema,
  linkedInPostIdeaSchema,
  linkedInPageAboutSchema,
  facebookPostCaptionSchema,
  facebookPostIdeaSchema,
  facebookPageAboutSchema,
  twitterTwitSchema,
  threadsTwitSchema,
  cartAbandonmentEmailSchema,
  trafficEmailSchema,
  pushNotificationSchema,
  newsletterEmailSchema,
  productUpdateEmailSchema,
  welcomeEmailSchema,
  emailContentSchema,
  flashSaleSmsSchema,
  notificationSmsSchema,
  smsContentSchema,
  smsIdeaSchema,
  googleAdsKeywordsSchema,
  googleAdsIdeaSchema,
  socialAdSchema,
  emailAdPromoSchema,
  searchAdSchema,
  websiteAboutSchema,
  websiteFaqSchema,
  websiteTestimonialSchema,
  websiteProductDescriptionSchema,
  articleSchema,
  blogPostOpinionSchema,
  blogPostTipsSchema,
  blogPostGuideSchema,
  blogPostComparisonSchema,
  blogPostCaseStudySchema,
  blogPostGeneralSchema,
  linkedinSponsoredAdSchema,
  facebookSponsoredAdSchema,
} from "./documentEntity";

export const schemaPerDocType = {
  [DocumentEntityType.INSTAGRAM_CAPTION]: instagramCaptionSchema,
  [DocumentEntityType.INSTAGRAM_SPONSORED_AD]: instagramSponsoredAdSchema,
  [DocumentEntityType.INSTAGRAM_POST_IDEA]: instagramPostIdeaSchema,
  [DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION]: instagramBioDescriptionSchema,
  [DocumentEntityType.INSTAGRAM_STORY_IDEA]: instagramStoryIdeaSchema,
  [DocumentEntityType.INSTAGRAM_REEL_IDEA]: instagramReelIdeaSchema,
  [DocumentEntityType.INSTAGRAM_REEL_SCRIPT]: instagramReelScriptSchema,
  [DocumentEntityType.LINKEDIN_POST_CAPTION]: linkedInPostCaptionSchema,
  [DocumentEntityType.LINKEDIN_POST_IDEA]: linkedInPostIdeaSchema,
  [DocumentEntityType.LINKEDIN_PAGE_ABOUT]: linkedInPageAboutSchema,
  [DocumentEntityType.FACEBOOK_POST_CAPTION]: facebookPostCaptionSchema,
  [DocumentEntityType.FACEBOOK_POST_IDEA]: facebookPostIdeaSchema,
  [DocumentEntityType.FACEBOOK_PAGE_ABOUT]: facebookPageAboutSchema,
  [DocumentEntityType.TWITTER_TWIT]: twitterTwitSchema,
  [DocumentEntityType.THREADS_TWIT]: threadsTwitSchema,
  [DocumentEntityType.CART_ABANDONMENT_EMAIL]: cartAbandonmentEmailSchema,
  [DocumentEntityType.TRAFFIC_EMAIL]: trafficEmailSchema,
  [DocumentEntityType.PUSH_NOTIFICATION]: pushNotificationSchema,
  [DocumentEntityType.NEWSLETTER_EMAIL]: newsletterEmailSchema,
  [DocumentEntityType.PRODUCT_UPDATE_EMAIL]: productUpdateEmailSchema,
  [DocumentEntityType.WELCOME_EMAIL]: welcomeEmailSchema,
  [DocumentEntityType.EMAIL_CONTENT]: emailContentSchema,
  [DocumentEntityType.FLASH_SALE_SMS]: flashSaleSmsSchema,
  [DocumentEntityType.NOTIFICATION_SMS]: notificationSmsSchema,
  [DocumentEntityType.SMS_CONTENT]: smsContentSchema,
  [DocumentEntityType.SMS_IDEA]: smsIdeaSchema,
  [DocumentEntityType.GOOGLE_ADS_KEYWORDS]: googleAdsKeywordsSchema,
  [DocumentEntityType.GOOGLE_ADS_IDEA]: googleAdsIdeaSchema,
  [DocumentEntityType.SOCIAL_AD]: socialAdSchema,
  [DocumentEntityType.EMAIL_AD_PROMO]: emailAdPromoSchema,
  [DocumentEntityType.SEARCH_AD]: searchAdSchema,
  [DocumentEntityType.WEBSITE_ABOUT]: websiteAboutSchema,
  [DocumentEntityType.WEBSITE_FAQ]: websiteFaqSchema,
  [DocumentEntityType.WEBSITE_TESTEMONIAL]: websiteTestimonialSchema,
  [DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION]:
    websiteProductDescriptionSchema,
  [DocumentEntityType.ARTICLE]: articleSchema,
  [DocumentEntityType.BLOG_POST_OPINION]: blogPostOpinionSchema,
  [DocumentEntityType.BLOG_POST_TIPS]: blogPostTipsSchema,
  [DocumentEntityType.BLOG_POST_GUIDE]: blogPostGuideSchema,
  [DocumentEntityType.BLOG_POST_COMPARISON]: blogPostComparisonSchema,
  [DocumentEntityType.BLOG_POST_CASE_STUDY]: blogPostCaseStudySchema,
  [DocumentEntityType.BLOG_POST_GENERAL]: blogPostGeneralSchema,
  [DocumentEntityType.LINKEDIN_SPONSORED_AD]: linkedinSponsoredAdSchema,
  [DocumentEntityType.FACEBOOK_SPONSORED_AD]: facebookSponsoredAdSchema,
};
