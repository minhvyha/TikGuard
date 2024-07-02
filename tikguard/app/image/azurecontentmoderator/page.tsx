import React from 'react';
import CircularProgressBasic from '@/components/ImageAnalysePage/CircularProgressBasic';
import UrlInput from '@/components/ImageAnalysePage/UrlInput';
import ImageHeader from '@/components/ImageAnalysePage/ImageHeader';
import ImageDisplay from '@/components/ImageAnalysePage/ImageDisplay';

const page = () => {
  return (
    <div className="flex flex-col gap-2 py-5 dark:text-white text-black dark:bg-black bg-white">
      <ImageHeader page="azure" />
      <div className="flex p-6 flex-row gap-4">
        <div className="flex-1">
          <ImageDisplay />
          <UrlInput apiRoute="/image/azurecontentmoderator/api" />
        </div>
        <div className="flex-1">
          <CircularProgressBasic />
        </div>
      </div>
    </div>
  );
};

export default page;
