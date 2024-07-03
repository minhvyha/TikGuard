'use client';
import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useStore } from '@/app/context/context';

const ImageDisplay = () => {
  const { imgUrl } = useStore();
  return (
    <Stack spacing={1} className="pb-6">
      {/* For variant="text", adjust the height via font-size */}
      {imgUrl !== '' ? (
        <>
          <img
            src={imgUrl}
            alt="img"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
          <div>{imgUrl}</div>
        </>
      ) : (
        <>
          <Skeleton variant="rounded" height={300} />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </>
      )}
      {/* For other variants, adjust the size with `width` and `height` */}
    </Stack>
  );
};

export default ImageDisplay;
