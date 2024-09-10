import { ComponentConfig } from '@measured/puck';
import ImageWrapper from './ImageWrapper';
import React from 'react';

export type ImageConfigProps = {
  variant: 'primary' | 'secondary';
  image: string;
};

export const ImageConfig: ComponentConfig<ImageConfigProps> = {
  fields: {
    variant: {
      type: 'radio',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
      ],
    },
    image: {
      type: 'custom',
      render: () => <></>,
    },
  },
  resolveData: async () => {
    const MediaServerUrl = 'https://znodetest.azureedge.net/znode10/';
    const response = await fetch('/api/banner-slider');
    const responseData = await response.json();
    console.log(responseData);
    const path = responseData.data?.Slider?.SliderBanners
      ? responseData.data?.Slider?.SliderBanners[0]?.MediaPath ?? ''
      : '';

    const url = `${MediaServerUrl}${path}`;
    return {
      props: {
        image: url,
      },
    };
  },
  render: (props) => <ImageWrapper {...props} />,
};
