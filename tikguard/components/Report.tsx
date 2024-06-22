import React from 'react';

const Report = () => {
  return (
    
    <div className='bg-background-800 h-full rounded-[3px] p-6 flex flex-col justify-center items-center'>
      <h1 className='text-2xl text-text-100 mb-4'>Report</h1>
      <div className='grid grid-cols-2 gap-4' style={{ width: '500px', height: '400px' }}>
        <div className='flex flex-col items-center justify-center w-full h-full border p-4 rounded-md'>
          <span className='text-text-100'>Folder Name:</span>
          <span className='text-text-150'>None</span>
        </div>
        <div className='flex flex-col items-center justify-center w-full h-full border p-4 rounded-md'>
          <span className='text-text-100'>Size Before:</span>
          <span className='text-text-150'>0 Bytes</span>
        </div>
        <div className='flex flex-col items-center justify-center w-full h-full border p-4 rounded-md'>
          <span className='text-text-100'>Backup Folder:</span>
          <span className='text-text-150'>None</span>
        </div>
        <div className='flex flex-col items-center justify-center w-full h-full border p-4 rounded-md'>
          <span className='text-text-100'>Size After:</span>
          <span className='text-text-150'>0 Bytes</span>
        </div>
      </div>
    </div>
  );
}

export default Report;
