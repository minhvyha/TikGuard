'use client'
import React from 'react';
import TextField from '@mui/material/TextField';
import { useStore } from '@/app/context/context';

import ImageSubmitButton from './ImageSubmitButton';


 const UrlInput = ({apiRoute} : {apiRoute:string}) => {
  const { imgUrl, setImgUrl } = useStore();


  return (<div style={{ position: 'relative', width: '100%',  }}>
  
  <TextField
    // id="outlined-basic"
    value={imgUrl}
    onChange={(e) => {
      setImgUrl(e.target.value);
    }}
    fullWidth
    placeholder="https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3"
    label="Video/audio urls to analyse"
    variant="outlined"
    style={{flex: '1',}}
    size='medium'
  />
  
  <ImageSubmitButton apiRoute={apiRoute} />
  </div>
  );
};

export default UrlInput;