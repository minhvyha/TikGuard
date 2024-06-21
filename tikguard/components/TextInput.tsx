import React from 'react';
import { useStore } from '@/app/context/context';
import TextField from '@mui/material/TextField';

const TextInput = () => {

  const { path, setPath } = useStore();
  
  

  return (

      <TextField
        id="outlined-basic"
        value={path}
        onChange={(e) => {
          setPath(e.target.value);
        }}
        label="Video or audio urls"
        variant="outlined"
        style={{ width: '90%' }} // Set the width to 80% of the div
      />
  );
};

export default TextInput;
