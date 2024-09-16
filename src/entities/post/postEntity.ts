import { EntityBase } from "../entityBase";
import { PostStatusType } from "./postStatusType";
import { PostData } from "./postData";

export interface PostEntity extends EntityBase {
  externalId: string;
  data: PostData;
  externalLink?: string | null;
  status: PostStatusType; // Assuming PostStatus is an enum
  companyId: string;
  websiteId: string;
  isDeleted: boolean;
}
