import { z } from "zod";
import { DocumentEntityType } from "../../types/DocumentEntityType";
import { DocumentTypeFactory } from "./documentBase";
import { EntityBase } from "../entityBase";

export interface DocumentEntity extends EntityBase {
  type: DocumentEntityType;
  output: z.infer<(typeof DocumentTypeFactory)[DocumentEntityType]["output"]>[];
  inputParams: z.infer<
    (typeof DocumentTypeFactory)[DocumentEntityType]["inputParams"]
  >;
  websiteId: string;
  companyId: string;
}
