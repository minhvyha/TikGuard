'use client'
import React from 'react'
import SightengineImageAnalysePage from '@/components/SightengineImageAnalysePage';
import ImageHeader from '@/components/ImageAnalysePage/ImageHeader';

const page = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', event.currentTarget.file.files[0]);
    try {
      const response = await fetch('/video/sightengine/api', {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log('File uploaded successfully');
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className='py-6'>
      <ImageHeader page="sightengine" />

      <SightengineImageAnalysePage  />
    </div>
  )
}

export default page