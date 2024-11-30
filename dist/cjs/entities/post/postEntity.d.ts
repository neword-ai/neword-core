import { EntityBase } from "../entityBase";
import { PostStatusType } from "./postStatusType";
import { PostData } from "./postData";
import { PostEntityType } from "./postEntityType";
import { Comment } from "../comment";
export interface PostEntity extends EntityBase {
    externalId: string;
    data: PostData;
    externalLink?: string | null;
    status: PostStatusType;
    companyId: string;
    websiteId: string;
    scheduleDate: Date;
    type: PostEntityType;
    comments?: Comment[];
}
