import React from 'react'
import TextField from '@mui/material/TextField';
import { useStore } from '@/app/context/context';

const MainInput = () => {
  const { text, setText, path } = useStore();

  return (
    <TextField
    minRows={20}
    maxRows={20}
    disabled={path !== ''}
        id="outlined-basic"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        label="Text to Analyse"
        variant="outlined"
        multiline
        style={{ flex: '1' }}

        placeholder="why are you so dumb, you can't even reach the top shelf."
      />
  )
}

export default MainInput