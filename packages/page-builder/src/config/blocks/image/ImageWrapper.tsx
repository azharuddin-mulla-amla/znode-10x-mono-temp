import { Image } from '@znode/base-components';
import React from 'react';

type ButtonWrapperProps = object & any;
function ImageWrapper(props: ButtonWrapperProps) {
  return <Image alt="all" url={props.image} />;
}

export default ImageWrapper;
