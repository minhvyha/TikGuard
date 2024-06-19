async function transcribeSpeechFlow(apiKeyId, apiKeySecret, lang, file = null, remotePath = null) {
  const url = 'https://api.speechflow.io/asr/file/v1/create';

  // Create headers
  const headers = new Headers();
  headers.append('keyId', apiKeyId);
  headers.append('keySecret', apiKeySecret);

  // Determine the content type based on the presence of the file or remotePath
  const isLocalFile = file !== null;
  const contentType = isLocalFile ? 'multipart/form-data' : 'application/x-www-form-urlencoded';
  headers.append('Content-Type', contentType);

  // Create the form data
  const formData = new FormData();
  formData.append('lang', lang);
  
  if (isLocalFile) {
    formData.append('file', file);
  } else if (remotePath) {
    formData.append('remotePath', remotePath);
  } else {
    throw new Error('Either file or remotePath must be provided');
  }

  // Create request options
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: isLocalFile ? formData : new URLSearchParams(formData)
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

// Example usage:
const apiKeyId = '';
const apiKeySecret = 'ixWlWhxP9RpHN5cP';
const lang = 'en';
// const localFile = document.querySelector('input[type="file"]').files[0]; // Assuming you have a file input element
const remoteFilePath = 'https://drive.google.com/file/d/13c6RGTHvFk7bDfEMuaCcqenW-x4yjQo1/view?usp=drive_link';

// To transcribe a local file
// transcribeSpeechFlow(apiKeyId, apiKeySecret, lang, localFile)
//   .then(result => console.log('Transcription result:', result))
//   .catch(error => console.error('Transcription error:', error));

// To transcribe a remote file
transcribeSpeechFlow(apiKeyId, apiKeySecret, lang, null, remoteFilePath)
  .then(result => console.log('Transcription result:', result))
  .catch(error => console.error('Transcription error:', error));