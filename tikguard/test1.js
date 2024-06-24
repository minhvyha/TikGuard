const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const fileName = 'Local image file, e.g. /path/to/image.png';

// Performs safe search detection on the local file
async function run(){
  
  const [result] = await client.safeSearchDetection('/Users/minhha/TikGuard/tikguard/images.jpeg');
  const detections = result.safeSearchAnnotation;
  console.log('Safe search:');
  console.log(`Adult: ${detections.adult}`);
  console.log(`Medical: ${detections.medical}`);
  console.log(`Spoof: ${detections.spoof}`);
  console.log(`Violence: ${detections.violence}`);
  console.log(`Racy: ${detections.racy}`);
}
run()