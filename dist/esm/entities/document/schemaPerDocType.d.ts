import { ZodObject } from "zod";
import { DocumentEntityType } from "../../types/DocumentEntityType";
type TSchemaPerDocType = {
    [key in DocumentEntityType]: ZodObject<any, any, any>;
};
export declare const schemaPerDocType: TSchemaPerDocType;
export {};
