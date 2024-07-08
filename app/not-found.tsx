import React from 'react';

const NotFound: React.FC = () => {
  return (

    <div className='h-dvh flex flex-col justify-center items-center'>
      <div className='text-2xl'>404 - Page Not Found</div>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;