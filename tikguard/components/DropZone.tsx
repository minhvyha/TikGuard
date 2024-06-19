import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DropZone = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`border-dashed border border-gray-500 p-4 text-center cursor-pointer ${isDragActive ? 'border-green-500' : ''}`}
    >
      <input {...getInputProps()} />

        <p>Drag & drop some files here, or click to select files</p>

    </div>
  );
};

export default DropZone;
