import React from 'react'
import { useStore } from '@/app/context/context';
import { Button } from '@mui/material';

const SubmitButton = ({apiRoute} : {apiRoute: string}) => {
  const { text } = useStore();

  function analyse() {
    fetch(`http://localhost:3000/${apiRoute}/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: text }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <Button
    variant="outlined"
    onClick={() =>{analyse()}}
  >
    Analyse
  </Button>
  )
}

export default SubmitButton