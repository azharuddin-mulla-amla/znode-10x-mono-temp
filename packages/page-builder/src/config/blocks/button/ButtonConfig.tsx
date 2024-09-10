import ButtonWrapper from "./ButtonWrapper";
import { ComponentConfig } from "@measured/puck";
import React from "react";

export type ButtonConfigProps = {
  variant: "primary" | "secondary";
};

export const ButtonConfig: ComponentConfig<ButtonConfigProps> = {
  fields: {
    variant: {
      type: "radio",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
      ],
    },
  },
  render: () => <ButtonWrapper />,
};
