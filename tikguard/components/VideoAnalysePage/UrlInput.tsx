'use client'
import React from 'react';
import TextField from '@mui/material/TextField';
import { useStore } from '@/app/context/context';

import SubmitButton from './SubmitButton';

 const UrlInput = ({apiRoute} : {apiRoute:string }) => {
  const { videoUrl, setVideoUrl } = useStore();

  return (<div style={{ position: 'relative', width: '100%',  }}>
  
  <TextField
    // id="outlined-basic"
    value={videoUrl}
    onChange={(e) => {
      setVideoUrl(e.target.value);
    }}
    fullWidth
    placeholder="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    label="Video/audio urls to analyse"
    variant="outlined"
    style={{flex: '1',}}
    size='medium'
  />
  <SubmitButton apiRoute={apiRoute} />

  </div>
  );
};

export default UrlInput;