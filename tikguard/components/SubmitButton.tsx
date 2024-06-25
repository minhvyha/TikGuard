import React from 'react'
import { useStore } from '@/app/context/context';
import Button from '@mui/material/Button';
const SubmitButton = ({apiRoute} : {apiRoute: string}) => {
  const { text, setData,path } = useStore();

  function analyse() {
    console.log(apiRoute)
    if(text || path){
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
        setData(data.data);
      });
  }
}
  return (
  <Button
  variant="contained"
  color="primary"
  style={{
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 30,
    textTransform: 'none',
  }}
  onClick={() => {
    // Handle analyze text button click
    analyse();
  }}
>
  Analyze
</Button>
  )
}

export default SubmitButton