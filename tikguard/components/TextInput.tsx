import React from 'react';
import TextField from '@mui/material/TextField';
import { useStore } from '../app/context/context';

const TextInput = () => {
  const { path, setPath, text, theme } = useStore();

  const TextInputStyles = {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    flex: '1',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add box shadow here
    borderRadius: 10
  };

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
      style={TextInputStyles}
    />
  );
};

export default TextInput;
