'use client'
import * as React from 'react';


import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useStore } from '@/app/context/context';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertMessage() {
  const {  error, severity, setError } = useStore();


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    setError(null)
    if (reason === 'clickaway') {
      return;
    }
  };
  return (
      <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={error !== null} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity as AlertProps['severity']} sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
  );
}