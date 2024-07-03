import React from 'react';
import CircularProgressBasic from './CircularProgressBasic';
const ImageData = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex-1 p-3 border-2 cursor-pointer border-background-500 dark:border-gray-500 border-solid text-xs rounded">
      <div>{title}</div>
      <div className="flex flex-col h-full">
        <CircularProgressBasic value={50} />
        <div>{subtitle}</div>
      </div>
    </div>
  );
};

export default ImageData;
