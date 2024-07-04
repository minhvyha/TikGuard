'use client'
import React from 'react';
import TextField from '@mui/material/TextField';
import { useStore } from '@/app/context/context';

import ImageSubmitButton from './ImageSubmitButton';
import SightengineFileUpload from './SightengineFileUpload';

 const UrlInput = ({apiRoute, apiRouteFile} : {apiRoute:string ,apiRouteFile: string | null}) => {
  const { imgUrl, setImgUrl } = useStore();

  return (<div style={{ position: 'relative', width: '100%',  }}>
  
  <TextField
    // id="outlined-basic"
    value={imgUrl}
    onChange={(e) => {
      setImgUrl(e.target.value);
    }}
    fullWidth
    placeholder="https://example.com/img.mp3"
    label="Video/audio urls to analyse"
    variant="outlined"
    style={{flex: '1',}}
    size='medium'
  />
  <ImageSubmitButton apiRoute={apiRoute} />
  {apiRouteFile && <SightengineFileUpload />}

  </div>
  );
};

export default UrlInput;