import { z } from "zod";
import { DocumentEntityType } from "../../types/DocumentEntityType";
import { DocumentTypeFactory } from "../document/documentBase";
import { EntityBase } from "../entityBase";
import { PostStatusType } from "./postStatusType";

export interface PostEntity<T extends DocumentEntityType> extends EntityBase {
  externalId: string;
  type: DocumentEntityType;
  data: z.infer<(typeof DocumentTypeFactory)[T]["output"]>;
  externalLink?: string | null;
  status: PostStatusType; // Assuming PostStatus is an enum
  companyId: string;
  websiteId: string;
  isDeleted: boolean;
}
