import { createEmittor } from "emittor";

export const currentTemplateDataEmittor = createEmittor<
  | {
      data: TemplateStructure | TemplateInfo | undefined;
      path: string;
      isLoading: false;
    }
  | { isLoading: true; data?: undefined; path?: undefined }
>({ isLoading: true });
