import React from 'react'
import { useStore } from '@/app/context/context';
import Button from '@mui/material/Button';
const SubmitButton = ({apiRoute} : {apiRoute: string}) => {
  const { text, setData,path, setError, setSeverity, setText, setPath } = useStore();

  async function analyse() {
    if (!text && !path) {
      setError('Please enter text or url to analyze');
      setSeverity('error');
      return;
    }
    try{

      if(path){
        let result = await fetch(`/transcribe/assemblyai/api`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ path: path }),
        })  
        let data = await result.json()
        setText(data.text)
        setPath('')
      }
      fetch(`/${apiRoute}/api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text }),
      })
        .then((response) => {
          console.log(response)
          return response.json();
        })
        .then((data) => {
          if(data){

            console.log(data.data)
            setData(data.data);
          }
        });
    }
    catch(err){
      if(err){
        setError(err.toString()); // Convert the error object to a string
        setSeverity('error');
      }
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