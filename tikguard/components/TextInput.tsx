import React from 'react';
import TextField from '@mui/material/TextField';
import { useStore } from '../app/context/context';

const TextInput = () => {
  const { path, setPath, text } = useStore();


  return (
    <TextField
      // id="outlined-basic"
      value={path}
      disabled={text !== ''}
      onChange={(e) => {
        setPath(e.target.value);
      }}
      placeholder="https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3"
      label="Video or audio urls"
      variant="outlined"
      style={{flex: '1'}}
    />
  );
};

export default TextInput;
