import Client from './client';
import React from 'react';
import { dummySeoId } from '../../constants/constants';
import { getPage } from '../../lib/get-page';

async function page() {
  const data = await getPage(dummySeoId);
  return <Client data={data} />;
}

export default page;
