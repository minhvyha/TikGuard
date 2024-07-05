import React from 'react';
import { useStore } from '@/app/context/context';
import Button from '@mui/material/Button';
const SubmitButton = ({ apiRoute }: { apiRoute: string }) => {
  const {
    imgUrl,
    setData,
    setError,
    setSeverity,
    setLoading,
  } = useStore();

  async function analyse() {
    
    
    if (!imgUrl) {
      setError('Please enter an image url to analyze');
      setSeverity('error');
      return;
    }
    setLoading(true);
    try {
      let response = await fetch(`${apiRoute}/api?` + new URLSearchParams({
        url: imgUrl,
      }))
      // const response = await fetch(`/${apiRoute}/api`, {
      //   method: 'GET',
      // })
      const data = await response.json();
      console.log(data)
      if(data.error){
        setError(data.error.message);
        setSeverity('error');
        setLoading(false);
        return;
      }
      setData(data)
      setLoading(false)
    } catch (err) {
      if (err) {
        setError(err.toString()); // Convert the error object to a string
        setSeverity('error');
        setLoading(false);
      }
    }

  }
  
  return (
    <Button
      variant="contained"
      color="primary"
      style={{
        position: 'absolute',
        top: 10,
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
  );
};

export default SubmitButton;
