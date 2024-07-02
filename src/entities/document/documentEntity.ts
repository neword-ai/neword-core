import { z } from "zod";
import { DocumentEntityType } from "../../types/DocumentEntityType";
import { DocumentTypeFactory } from "./documentBase";
import { EntityBase } from "../entityBase";

export interface DocumentEntity<T extends DocumentEntityType>
  extends EntityBase {
  type: DocumentEntityType;
  output: z.infer<(typeof DocumentTypeFactory)[T]["output"]>[];
  inputParams: z.infer<(typeof DocumentTypeFactory)[T]["inputParams"]>;
  websiteId: string;
  companyId: string;
}

// function get<T extends DocumentEntityType>(): DocumentEntity<T> {
//   return {} as any as DocumentEntity<T>;
// }

// const x = get<DocumentEntityType.INSTAGRAM_CAPTION>().inputParams.;
