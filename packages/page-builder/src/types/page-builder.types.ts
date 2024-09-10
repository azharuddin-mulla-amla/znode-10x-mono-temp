import { Config, DefaultRootProps } from "@measured/puck";

import { ButtonConfigProps } from "../config/blocks/button/ButtonConfig";
import { ImageConfigProps } from "../config/blocks/image/ImageConfig";
import { ReactNode } from "react";

export type ComponentProps = {
  button: ButtonConfigProps;
  image: ImageConfigProps;
};

export type RootProps = {
  children: ReactNode;
  title: string;
} & DefaultRootProps &
  PageBuilderConfigParams;

export type PageBuilderConfig = Config<ComponentProps, RootProps>;

export type PageBuilderConfigParams = {};
