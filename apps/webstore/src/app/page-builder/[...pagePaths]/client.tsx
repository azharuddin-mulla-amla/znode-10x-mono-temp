'use client';

import { Data } from '@znode/page-builder/types';
import { PageEditor } from '@znode/page-builder';
import React from 'react';
import { dummySeoId } from '../../../constants/constants';
import { setPage } from '../../../lib/set-page';

type ClientProps = {
  data: Data;
};
function Client(props: ClientProps) {
  function publishHandler(data: Data) {
    setPage({
      seoId: dummySeoId,
      data,
    });
  }
  return <PageEditor data={props.data} onPublish={publishHandler} />;
}

export default Client;
