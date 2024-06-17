'use client';
import React, { useCallback } from 'react';
import { NLClient } from '@expertai/nlapi';
import { Language } from '@expertai/nlapi';
import { useDropzone } from 'react-dropzone';

var nlClient = new NLClient();

var text = "why are you so dumb, you can't even reach the top shelf.";

const page = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // console.log(process.env.EAI_USERNAME)
  // console.log(process.env.EAI_PASSWORD)
  // nlClient.detect(text, {
  //   language: Language.EN,
  //   detector: "hate-speech",
  // }).then((result) => {
  //   console.log(result.data?.categories)
  // })
  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default page;
