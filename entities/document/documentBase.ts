import { DocumentEntityType } from "../../types/DocumentEntityType";

export interface DocumentBase<InputParams, OutputBlock> {
  type: DocumentEntityType;
  inputParams: InputParams;
  outputBlock: OutputBlock[];
}
