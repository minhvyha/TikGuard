import React from 'react';
import { imageHeader } from '@/constant';

const Header = ({ page }: { page: string }) => {
  return (
    <div className="flex text-gray-800 dark:text-white flex-col justify-center items-center">
      <h1 className="text-2xl">
        {imageHeader[page as keyof typeof imageHeader].title}
      </h1>
      <h2 className="text-text-150">
        {imageHeader[page as keyof typeof imageHeader].description}
      </h2>
    </div>
  );
};

export default Header;
