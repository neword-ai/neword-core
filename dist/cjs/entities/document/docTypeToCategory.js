"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTypeToCategory = void 0;
var DocumentEntityType_1 = require("../../types/DocumentEntityType");
var documentCategory_1 = require("../../types/documentCategory");
// Mapping each DocumentEntityType to its corresponding DocumentCategory
exports.DocumentTypeToCategory = (_a = {},
    // SOCIAL MEDIA
    _a[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_CAPTION] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_POST_IDEA] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_BIO_DESCRIPTION] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_STORY_IDEA] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_REEL_IDEA] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_REEL_SCRIPT] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.LINKEDIN_POST_CAPTION] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.LINKEDIN_POST_IDEA] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.LINKEDIN_PAGE_ABOUT] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.FACEBOOK_POST_CAPTION] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.FACEBOOK_POST_IDEA] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.FACEBOOK_PAGE_ABOUT] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.TWITTER_TWIT] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.THREADS_TWIT] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    // MAILING
    _a[DocumentEntityType_1.DocumentEntityType.CART_ABANDONMENT_EMAIL] = documentCategory_1.DocumentCategory.MAILING,
    _a[DocumentEntityType_1.DocumentEntityType.TRAFFIC_EMAIL] = documentCategory_1.DocumentCategory.MAILING,
    _a[DocumentEntityType_1.DocumentEntityType.PUSH_NOTIFICATION] = documentCategory_1.DocumentCategory.MAILING,
    _a[DocumentEntityType_1.DocumentEntityType.NEWSLETTER_EMAIL] = documentCategory_1.DocumentCategory.MAILING,
    _a[DocumentEntityType_1.DocumentEntityType.PRODUCT_UPDATE_EMAIL] = documentCategory_1.DocumentCategory.MAILING,
    _a[DocumentEntityType_1.DocumentEntityType.WELCOME_EMAIL] = documentCategory_1.DocumentCategory.MAILING,
    _a[DocumentEntityType_1.DocumentEntityType.EMAIL_CONTENT] = documentCategory_1.DocumentCategory.MAILING,
    // SMS
    _a[DocumentEntityType_1.DocumentEntityType.FLASH_SALE_SMS] = documentCategory_1.DocumentCategory.SMS,
    _a[DocumentEntityType_1.DocumentEntityType.NOTIFICATION_SMS] = documentCategory_1.DocumentCategory.SMS,
    _a[DocumentEntityType_1.DocumentEntityType.SMS_CONTENT] = documentCategory_1.DocumentCategory.SMS,
    _a[DocumentEntityType_1.DocumentEntityType.SMS_IDEA] = documentCategory_1.DocumentCategory.SMS,
    // PAID
    _a[DocumentEntityType_1.DocumentEntityType.GOOGLE_ADS_KEYWORDS] = documentCategory_1.DocumentCategory.PAID,
    _a[DocumentEntityType_1.DocumentEntityType.GOOGLE_ADS_IDEA] = documentCategory_1.DocumentCategory.PAID,
    _a[DocumentEntityType_1.DocumentEntityType.SOCIAL_AD] = documentCategory_1.DocumentCategory.PAID,
    _a[DocumentEntityType_1.DocumentEntityType.EMAIL_AD_PROMO] = documentCategory_1.DocumentCategory.PAID,
    _a[DocumentEntityType_1.DocumentEntityType.SEARCH_AD] = documentCategory_1.DocumentCategory.PAID,
    // WEB
    _a[DocumentEntityType_1.DocumentEntityType.WEBSITE_ABOUT] = documentCategory_1.DocumentCategory.WEB,
    _a[DocumentEntityType_1.DocumentEntityType.WEBSITE_FAQ] = documentCategory_1.DocumentCategory.WEB,
    _a[DocumentEntityType_1.DocumentEntityType.WEBSITE_TESTEMONIAL] = documentCategory_1.DocumentCategory.WEB,
    _a[DocumentEntityType_1.DocumentEntityType.ARTICLE] = documentCategory_1.DocumentCategory.WEB,
    _a[DocumentEntityType_1.DocumentEntityType.WEBSITE_PRODUCT_DESCRIPTION] = documentCategory_1.DocumentCategory.WEB,
    // BLOG
    _a[DocumentEntityType_1.DocumentEntityType.BLOG_POST_OPINION] = documentCategory_1.DocumentCategory.BLOG,
    _a[DocumentEntityType_1.DocumentEntityType.BLOG_POST_TIPS] = documentCategory_1.DocumentCategory.BLOG,
    _a[DocumentEntityType_1.DocumentEntityType.BLOG_POST_GUIDE] = documentCategory_1.DocumentCategory.BLOG,
    _a[DocumentEntityType_1.DocumentEntityType.BLOG_POST_COMPARISON] = documentCategory_1.DocumentCategory.BLOG,
    _a[DocumentEntityType_1.DocumentEntityType.BLOG_POST_CASE_STUDY] = documentCategory_1.DocumentCategory.BLOG,
    _a[DocumentEntityType_1.DocumentEntityType.BLOG_POST_GENERAL] = documentCategory_1.DocumentCategory.BLOG,
    _a[DocumentEntityType_1.DocumentEntityType.PHONE_CALL_SCRIPT] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.INSTAGRAM_SPONSORED_AD] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.TWITTER_SPONSORED_AD] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.FACEBOOK_SPONSORED_AD] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a[DocumentEntityType_1.DocumentEntityType.LINKEDIN_SPONSORED_AD] = documentCategory_1.DocumentCategory.SOCIAL_MEDIA,
    _a);
//# sourceMappingURL=docTypeToCategory.js.map