'use client';

import { Data } from '@znode/page-builder/types';
import { PageRender } from '@znode/page-builder';
import React from 'react';

type ClientProps = {
  data: Data;
};
export function Client(props: Readonly<ClientProps>) {
  return <PageRender data={props.data} />;
}

export default Client;
