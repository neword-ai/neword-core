import { z } from "zod";
export declare const ZDocumentToneType: z.ZodEnum<["MARKETING", "SOLDABLE", "FRIENDLLY", "INSPIRED", "INSTRUCTIONAL", "CONVINCING"]>;
export type DocumentToneType = z.infer<typeof ZDocumentToneType>;
