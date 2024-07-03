import React from 'react';
import ImageHeader from '@/components/ImageAnalysePage/ImageHeader';
import ImageAnalysePage from '@/components/ImageAnalysePage';
const page = () => {
  return (
    <div className="flex flex-col gap-2 py-5 dark:text-white text-black dark:bg-black bg-white">
      <ImageHeader page="azure" />
      <ImageAnalysePage />
    </div>
  );
};

export default page;
