import React from 'react';
import CircularProgressBasic from './CircularProgressBasic';
const ImageData = ({
  title,
  subtitle,
  value,
  classification,
}: {
  title: string;
  subtitle: string;
  value: number;
  classification: boolean;
}) => {
  return (
    <div className="flex-1 p-3 border-2 cursor-pointer border-background-500 dark:border-gray-500 border-solid text-xs rounded">
      <div>{title}</div>
      <div className="flex flex-col h-full justify-evenly items-center">
        <CircularProgressBasic value={value} classification={classification} />
        <div className='text-lg'>{subtitle}</div>
      </div>
    </div>
  );
};

export default ImageData;
