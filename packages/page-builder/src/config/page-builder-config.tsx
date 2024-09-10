import { ButtonConfig } from "./blocks/button/ButtonConfig";
import { ImageConfig } from "./blocks/image/ImageConfig";
import { PageBuilderConfig } from "../types/page-builder.types";

export function pageBuilderConfig(): PageBuilderConfig {
  return {
    components: {
      button: ButtonConfig,
      image: ImageConfig,
    },
  };
}
