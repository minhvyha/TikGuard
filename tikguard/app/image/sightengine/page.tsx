'use client'
import React from 'react'

const page = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', event.currentTarget.file.files[0]);

    try {
      const response = await fetch('/image/sightengine/api', {
        method: 'POST',
        body: formData,
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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default page