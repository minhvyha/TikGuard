import React from 'react';
import TextField from '@mui/material/TextField';
import { useStore } from '@/app/context/context';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

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

const TextInput = () => {
  const { path, setPath, text } = useStore();


  return (<div style={{ position: 'relative', width: '100%' }}>
  
  <TextField
    // id="outlined-basic"
    value={path}
    disabled={text !== ''}
    onChange={(e) => {
      setPath(e.target.value);
    }}
    fullWidth
    placeholder="https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3"
    label="Video/audio urls to analyse"
    variant="outlined"
    style={{flex: '1'}}
  />
  
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
      }} disabled={path !== ''}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
  </div>
  );
};

export default TextInput;
