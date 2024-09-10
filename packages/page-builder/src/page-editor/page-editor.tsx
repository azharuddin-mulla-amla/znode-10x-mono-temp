"use client";

import "@measured/puck/puck.css";

import { Data, Puck } from "@measured/puck";

import React from "react";
import { pageBuilderConfig } from "../config/page-builder-config";

type PageEditorProps = {
  data: Data;
  onPublish: (data: Data) => void;
};

export function PageEditor(props: PageEditorProps) {
  return (
    <Puck
      config={pageBuilderConfig() as any}
      data={props.data}
      // onPublish={(data) => {
      //   // setPage({
      //   //   data,
      //   //   seoId: dummySeoId,
      //   // });
      // }}
      onPublish={props.onPublish}
    />
  );
}
