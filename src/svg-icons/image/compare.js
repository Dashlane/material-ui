import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let ImageCompare = (props) => (
  <SvgIcon {...props}>
    <path d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </SvgIcon>
);
ImageCompare = pure(ImageCompare);
ImageCompare.displayName = 'ImageCompare';

export default ImageCompare;
