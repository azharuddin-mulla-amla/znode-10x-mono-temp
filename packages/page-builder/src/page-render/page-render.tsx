'use client';

import { Data } from '../types/exports/exports.types';
import { Render } from '@measured/puck';
import { pageBuilderConfig } from '../config/page-builder-config';

type PageRenderProps = {
  data: Data;
};

export function PageRender(props: PageRenderProps) {
  return <Render data={props.data} config={pageBuilderConfig() as any} />;
}
