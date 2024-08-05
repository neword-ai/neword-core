import { z } from "zod";

export const ZDocumentToneType = z.enum(["MARKETING", "SOLDABLE", "FRIENDLLY"]);
export type DocumentToneType = z.infer<typeof ZDocumentToneType>;
