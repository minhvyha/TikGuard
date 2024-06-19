'use client';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useStore } from '@/app/context';
const DropZone = () => {
  const {text} = useStore()
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);
  const { getRootProps,acceptedFiles, getInputProps, isDragActive } = useDropzone({ onDrop, maxFiles: 1,maxSize:5000000, accept:{
"text/plain": [".txt"],
"audio/mpeg": [".mp3"],
"video/mp4": [".mp4"],

  }});
  console.log(text)
  console.log(acceptedFiles)

  return (
    <div
      {...getRootProps()}
      className={`border-dashed border p-4 text-center cursor-pointer flex flex-row ${isDragActive ? 'border-green-500 ' : 'border-transparent'}`}
    >
      <input {...getInputProps()} />
      <span className="material-symbols-outlined">
backup
</span>
        <p>Upload a file. (Only a *.txt, *.mp4 or *.mp3 file will be accepted)</p>

    </div>
  );
};

export default DropZone;
