import { EntityBase } from "../entityBase";
import { PostStatusType } from "./postStatusType";
import { PostData } from "./postData";
import { PostEntityType } from "./postEntityType";

export interface PostEntity extends EntityBase {
  externalId: string;
  data: PostData;
  externalLink?: string | null;
  status: PostStatusType; // Assuming PostStatus is an enum
  companyId: string;
  websiteId: string;
  scheduleDate: Date;
  type: PostEntityType;
  comments?: Comment[];
}
