/* eslint-disable no-console */
'use server';

import { Data } from '@org/page-builder/types';
import cloudinary from './cloudinary/cloudinary-config';

type TSetPage = {
  seoId: string;
  data: Data;
};

export async function setPage(params: TSetPage) {
  const jsonData = {
    key: params.seoId,
    data: params.data,
  };

  const base64Data = Buffer.from(JSON.stringify(jsonData)).toString('base64');
  const dataUri = `data:application/json;base64,${base64Data}`;

  try {
    const result = await cloudinary.uploader.upload(dataUri, {
      resource_type: 'raw',
      public_id: params.seoId,
      invalidate: true,
    });
    console.log('File uploaded successfully:', result.url);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}
