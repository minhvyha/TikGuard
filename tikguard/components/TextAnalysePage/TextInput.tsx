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
  const { path, setPath, text, setText, setError, setSeverity, setLoading } = useStore();

  const handleSubmitFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    setLoading(true);
    if (event.target.files && event.target.files.length > 0) {
      formData.append('file', event.target.files[0]);
    }

    try {
      const response = await fetch('/transcribe/speechflow/api', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setText(data.result.result);
        setError('File uploaded successfully');
        setSeverity('success');
      setLoading(false);
    } else {
        setError('File upload failed');
        setSeverity('error')
      setLoading(false);

      }
    } catch (error) {
      setError('Error uploading file: ' + error);
      setSeverity('error');
      setLoading(false);
    }
  };
  return (
    <div style={{ position: 'relative', width: '100%' }}>
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
        style={{ flex: '1' }}
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
        }}
        disabled={path !== ''}
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
              handleSubmitFile(e)
            }
          }}
        />
      </Button>
    </div>
  );
};

export default TextInput;
