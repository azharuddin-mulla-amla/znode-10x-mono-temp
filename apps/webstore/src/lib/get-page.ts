import { Data } from '@org/page-builder/types';
import cloudinary from './cloudinary/cloudinary-config';

type CloudinaryResponse = {
  key: string;
  data: Data;
};

export async function getPage(seoId: string): Promise<Data> {
  const emptyData: Data = {
    content: [],
    root: {},
  };

  try {
    const resource = await cloudinary.api.resource(seoId, {
      resource_type: 'raw',
    });

    const response = await fetch(resource.secure_url);
    const responseJson: CloudinaryResponse = await response.json();
    return responseJson.data;
  } catch (error) {
    return emptyData;
  }
}
