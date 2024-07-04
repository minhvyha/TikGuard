import React from 'react';
import { useStore } from '@/app/context/context';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { promises as fs } from 'fs';

const SightengineFileUpload = () => {
  const {
    imgUrl,
    setError,
    setSeverity,
    setData,
    setImgUrl,
    setLoading
  } = useStore();

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  

  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const formData = new FormData();
    setLoading(true);
    

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = reader.result?.toString();
        // Use the base64Data as needed
        setImgUrl(base64Data as string);
      };
      reader.readAsDataURL(file);
    }
        try {
      const response = await fetch('/image/sightengine/api', {
        method: 'POST',
        body: formData,
        
      });
      const data = await response.json();
      if(data.error){
        setError(data.error);
        setSeverity('error');
        setLoading(false);
        return;
      }
      setData(data)
      if (response.ok) {
        console.log('File uploaded successfully');
      } else {
        console.error('File upload failed');
      }
      setLoading(false);

    } catch (error) {
      setLoading(false);
      console.error('Error uploading file:', error);
    }
  };
  
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      style={{
        width: '100%',
        marginTop: '1rem',
      }}
      disabled={imgUrl !== ''}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput
        type="file"
        accept="image/*"
        // Add the following attribute to limit file size to 5MB
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file && file.size > 5 * 1024 * 1024) {
              setError('File size exceeds 5MB limit');
              setSeverity('error');
              e.target.value = '';
              return;
            }
            if (e.target.files && e.target.files.length > 1) {
              setError('Please select only one file');
              setSeverity('error');
              e.target.value = '';
              return;
            }
            handleSubmit(e);
          }
        }}
      />
    </Button>
  );
};

export default SightengineFileUpload;
