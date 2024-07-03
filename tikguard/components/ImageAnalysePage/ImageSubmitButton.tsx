import React from 'react';
import { useStore } from '@/app/context/context';
import Button from '@mui/material/Button';
const ImageSubmitButton = ({ apiRoute }: { apiRoute: string }) => {
  const {
    text,
    imgUrl,
    setData,
    setError,
    setSeverity,
    language,
    setAnalysedText,
    setLoading,
  } = useStore();

  async function analyse() {
    if (!imgUrl) {
      setError('Please enter an image url to analyze');
      setSeverity('error');
      return;
    }
    try {
      setLoading(true);
      console.log(true);
      fetch(`/${apiRoute}/api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text, language: language }),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          if (data) {
            if (data.error) {
              setError(data.error);
              setSeverity('error');
            }
            console.log(data.data);
            setAnalysedText(text);
            setData(data.data);
            setLoading(false);
          }
        });
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
  );
};

export default ImageSubmitButton;
