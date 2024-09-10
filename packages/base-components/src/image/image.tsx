import React from 'react';

type ImageProps = {
  url: string;
  alt: string;
};
export function Image(props: Readonly<ImageProps>) {
  return (
    <div>
      <img src={props.url} alt={props.alt} width={500} height={300} />
    </div>
  );
}

export default Image;
