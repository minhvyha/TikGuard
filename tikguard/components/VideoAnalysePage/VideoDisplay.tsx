'use client';
import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useStore } from '@/app/context/context';
import Link from 'next/link';
const VideoDisplay = () => {
  const { videoUrl } = useStore();
  return (
    <Stack spacing={1} className="pb-5">
      {videoUrl !== '' ? (
        <>
          <div
            style={{ maxWidth: '100%', height: '100%', overflow: 'hidden' }}
          >
            <iframe
              src={videoUrl}
              style={{ width: '100%', height: '300px', border: 'none' }}
            >
              <Skeleton variant="rounded" height={300} />
            </iframe>
          </div>
          <Link href={videoUrl}>
            <p
              style={{
                display: 'inline-block',
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {videoUrl}
            </p>
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

export default VideoDisplay;
