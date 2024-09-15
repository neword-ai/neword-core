import { DocumentEntityType } from "../../types/DocumentEntityType";
import { EntityBase } from "../entityBase";
import { PostStatusType } from "./postStatusType";
import { PostFactory } from "./postFactory";
import { PostEntityType } from "./postEntityType";
export interface PostEntity<T extends PostEntityType> extends EntityBase {
    externalId: string;
    type: DocumentEntityType;
    data: PostFactory[T];
    externalLink?: string | null;
    status: PostStatusType;
    companyId: string;
    websiteId: string;
    isDeleted: boolean;
}
