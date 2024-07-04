import React from 'react';
import { useStore } from '@/app/context/context';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const SightengineFileUpload = ({ apiRoute }: { apiRoute: string }) => {
  const {
    imgUrl,
    setData,
    setError,
    setSeverity,
    setLoading,
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
    if (event.target.files && event.target.files.length > 0) {
      formData.append('file', event.target.files[0]);
    }
        try {
      const response = await fetch('/video/sightengine/api', {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log('File uploaded successfully');
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
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
          position: 'absolute',
          bottom: 10,
          right: 10,
          borderRadius: 30,
          textTransform: 'none',
        }}
        disabled={imgUrl !== ''}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput
          type="file"
          accept=".aac, .amr, .ape, .flac, .m4a, .mp3, .ogg, .opus, .wav, .wma, .3gp, .asf, .avi, .flv, .mkv, .mov, .mp4, .mpeg, .mpg, .webm, .wmv, .rm, .rmvb"
          // Add the following attribute to limit file size to 5MB
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              const file = e.target.files[0];
                if (file && file.size > 100 * 1024 * 1024) {
                setError('File size exceeds 100MB limit');
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
                handleSubmit(e)
            }
          }}
        />
      </Button>
  );
};

export default SightengineFileUpload;
