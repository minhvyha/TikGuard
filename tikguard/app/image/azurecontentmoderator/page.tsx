import React from 'react';
import UrlInput from '@/components/ImageAnalysePage/UrlInput';
import ImageHeader from '@/components/ImageAnalysePage/ImageHeader';
import ImageDisplay from '@/components/ImageAnalysePage/ImageDisplay';
import ImageData from '@/components/ImageAnalysePage/ImageData';
const page = () => {
  return (
    <div className="flex flex-col gap-2 py-5 dark:text-white text-black dark:bg-black bg-white">
      <ImageHeader page="azure" />
      <div className="flex p-6 flex-row gap-4 mt-4">
        <div className="flex-1">
          <ImageDisplay />
          <UrlInput apiRoute="/image/azurecontentmoderator/api" />
        </div>
        <div className="flex-1 gap-4 flex flex-row">
          <ImageData title='Racism Classification' subtitle='Racism' />
          <ImageData title='Sexual Content Classification' subtitle='Sexual Content' />

        </div>
      </div>
    </div>
  );
};

export default page;
