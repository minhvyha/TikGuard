'use client'
import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useStore } from '@/app/context/context';

const ImageDisplay = () => {
  const {imgUrl} = useStore();
  return (
    <Stack spacing={1} className='pb-3'>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="rounded" height={300} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

      {/* For other variants, adjust the size with `width` and `height` */}
    </Stack>
  )
}

export default ImageDisplay