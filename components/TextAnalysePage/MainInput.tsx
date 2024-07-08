'use client';
import React from 'react';
import TextField from '@mui/material/TextField';
import { useStore } from '@/app/context/context';
import SubmitButton from './SubmitButton';

const MainInput = ({ apiRoute }: { apiRoute: string }) => {
  const { text, setText, path } = useStore();

  const countWords = (str: string) => {
    return str.trim() === '' ? 0 : str.trim().split(/\s+/).length;
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <TextField
        minRows={20}
        maxRows={20}
        disabled={path !== ''}
        id="outlined-basic"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        label="Add text to analyze"
        variant="outlined"
        multiline
        fullWidth
        style={{
          flex: '1',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          borderRadius: 10,
        }}
        placeholder="Hello World?"
        InputProps={{
          style: {
            borderRadius: 10,
            paddingBottom: '30px', // Add padding to make space for word count
          },
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 10, // Adjust this value to position the word count inside the TextField
          left: 10,
          fontSize: '12px',
          color: 'gray',
          pointerEvents: 'none', // Prevent the word count from interfering with input
        }}
      >
        {countWords(text)} words
      </div>
      <SubmitButton apiRoute={apiRoute} />
    </div>
  );
};

export default MainInput;
