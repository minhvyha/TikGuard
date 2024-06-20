'use client';
import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useStore } from '@/app/context/context';
import { nanoid } from 'nanoid';
import https from 'https';

const DropZone = () => {
  const { text, setText, setError } = useStore();
  const onDrop = useCallback((acceptedFiles: File[]) => {

  }, []);
  const onError = (err: Error) => {
    console.log(err);
  };
  const {
    getRootProps,
    acceptedFiles,
    getInputProps,
    fileRejections,
    isDragActive,
  } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 5000000,

    accept: {
      'text/plain': ['.txt'],
      'audio/mpeg': ['.mp3'],
      'video/mp4': ['.mp4'],
    },
    onError,
  });

  useEffect(() => {
    if (fileRejections.length > 0) {
      setError(fileRejections[0].errors[0].message);
    }
  }, [fileRejections]);
  useEffect(() => {
    if (acceptedFiles.length > 0) {
      if (
        acceptedFiles[0].type.includes('audio') ||
        acceptedFiles[0].type.includes('video')
      ) {
      }
    }
  }, [acceptedFiles]);
  function getFileNameByPath(path: string) {
    let index = path.lastIndexOf('/');
    return path.substring(index + 1);
  }
  async function transcribeSpeechFlow(file: File) {
    const url = 'https://api.speechflow.io/asr/file/v1/create';

    // Create headers
    const headers = new Headers();
    headers.append('keyId', process.env.APIKEYID || ''); // Check if process.env.APIKEYID is defined and pass it as a string argument

    headers.append('keySecret', process.env.APIKEYSECRET || '');

    // Determine the content type based on the presence of the file or remotePath
    const isLocalFile = file !== null;
    const contentType = isLocalFile
      ? 'multipart/form-data'
      : 'application/x-www-form-urlencoded';
    headers.append('Content-Type', contentType);
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    headers.append(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );

    // Create the form data
    const formData = new FormData();
    formData.append('lang', 'en');
    formData.append('file', file);

    // Create request options
    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: formData,
    };

    // Make the request
    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error during transcription:', error);
      throw error;
    }
  }

  return (
    <div
      {...getRootProps()}
      className={`border-dashed border p-4 text-center cursor-pointer flex flex-row ${
        isDragActive ? 'border-green-500 ' : 'border-transparent'
      }`}
    >
      <input {...getInputProps()} />
      <span className="material-symbols-outlined">backup</span>
      <p>Upload a file. (Only a *.txt, *.mp4 or *.mp3 file will be accepted)</p>
    </div>
  );
};

export default DropZone;
