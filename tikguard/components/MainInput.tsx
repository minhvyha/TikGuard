import React from 'react'
import TextField from '@mui/material/TextField';
import { useStore } from '@/app/context/context';

const MainInput = () => {
  const { text, setText } = useStore();

  return (
    <TextField
        id="outlined-basic"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        label="Text to Analyse"
        variant="outlined"
        multiline
      />
  )
}

export default MainInput