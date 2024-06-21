import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useStore } from '@/app/context/context';
import { AssemblyAI } from 'assemblyai'

const DropZone = () => {
  const client = new AssemblyAI({
    apiKey: "8faf7a4d58eb4638a69d44a367f1f8dd"
  })
  const audioUrl =
  'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'

const config = {
  audio_url: audioUrl
}
const run = async () => {
  const transcript = await client.transcripts.transcribe(config)
  console.log(transcript.text)
}
  const { setError, taskId, setTaskId } = useStore();
  const onDrop = useCallback((acceptedFiles: File[]) => {
    run()
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
        // transcribe(acceptedFiles[0]);
        // transcribe(acceptedFiles[0]);
        
      }
    }
  }, [acceptedFiles]);
  async function transcribe(file: File) {
    const reader = new FileReader();
    reader.onload = async (e) => {
      if (e.target) {
        const res = await fetch(
          'https://tikguarddatabase-minhvyhas-projects.vercel.app/transcribe',
          {
            method: 'POST',
            mode: 'no-cors',

            body: JSON.stringify({
              file: Buffer.from(e.target.result as ArrayBuffer),
              path: file.name,
            }),
          }
        );
        const result = await res.json();
        console.log(result);
      }
    };
    reader.readAsArrayBuffer(file);
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
