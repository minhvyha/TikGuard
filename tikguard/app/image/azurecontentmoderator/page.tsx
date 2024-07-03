import React from 'react';
import ImageHeader from '@/components/ImageAnalysePage/ImageHeader';
import AzureImageAnalysePage from '@/components/AzureImageAnalysePage';
const page = () => {
  return (
    <div className="flex flex-col gap-2 py-5 dark:text-white text-black dark:bg-black bg-white">
      <ImageHeader page="azure" />
      <AzureImageAnalysePage />
    </div>
  );
};

export default page;
