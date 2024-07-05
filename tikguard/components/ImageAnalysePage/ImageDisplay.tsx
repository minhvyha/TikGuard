'use client';
import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useStore } from '@/app/context/context';
import Link from 'next/link';
const ImageDisplay = () => {
  const { imgUrl } = useStore();
  return (
    <Stack spacing={1} className='pb-5'>
        {imgUrl !== '' ? (
          <>
            <div style={{ maxWidth: '100%', height: '300px', overflow: 'hidden' }}>
            <object data={imgUrl} type="image/png" style={{ width: '100%', height: '100%', objectFit: 'cover' }}  >
            <Skeleton variant="rounded" height={300} />

  </object>
              {/* <img
                src={imgUrl}
                alt="img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              /> */}
            </div>
            <Link href={imgUrl}>
            <p style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{imgUrl}</p>
            </Link>

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
