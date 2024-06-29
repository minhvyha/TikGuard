'use client';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { useStore } from '@/app/context/context';
import Backdrop from '@mui/material/Backdrop';

export default function Loading() {
  const { loading } = useStore();
  return (
    <Backdrop sx={{ color: '#fa8e30', zIndex: 1000 }} open={loading}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </Backdrop>
  );
}
