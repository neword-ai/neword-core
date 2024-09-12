import { z } from "zod";

export const ZDocumentToneType = z.enum([
  "MARKETING",
  "SOLDABLE",
  "FRIENDLLY",
  "INSPIRED",
  "INSTRUCTIONAL",
  "CONVINCING",
]);
export type DocumentToneType = z.infer<typeof ZDocumentToneType>;
