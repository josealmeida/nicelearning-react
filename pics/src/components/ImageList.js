import React from 'react';
import { Image } from 'semantic-ui-react';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <Image src={image.urls.regular} size="small" />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
