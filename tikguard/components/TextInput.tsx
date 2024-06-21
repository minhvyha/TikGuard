'use client'
import React from 'react';
import { useStore } from '@/app/context/context';
import TextField from '@mui/material/TextField';

const TextInput = () => {

  const { path, setPath, text } = useStore();
  
  

  return (

      <TextField
        id="outlined-basic"
        value={path}
        disabled={text !== ''}
        onChange={(e) => {
          setPath(e.target.value);
        }}
        placeholder='https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'
        label="Video or audio urls"
        variant="outlined"
        style={{ flex: '1' }} // Set the width to 80% of the div
      />
  );
};

export default TextInput;
