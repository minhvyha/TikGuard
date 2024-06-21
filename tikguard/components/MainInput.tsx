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
        style={{ flex: '1' }}
        minRows={20}
        maxRows={20}
        placeholder="why are you so dumb, you can't even reach the top shelf."
      />
  )
}

export default MainInput