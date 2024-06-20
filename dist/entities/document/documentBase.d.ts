import { DocumentEntityType } from "../../types/DocumentEntityType";
import { DocumentCategory } from "../../types/documentCategory";
export interface DocumentBase<InputParams, OutputBlock> {
    type: DocumentEntityType;
    category: DocumentCategory;
    inputParams: InputParams;
    outputBlock: OutputBlock[];
}
