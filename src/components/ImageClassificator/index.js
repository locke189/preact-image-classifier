import * as tf from '@tensorflow/tfjs';
import * as wasm from '@tensorflow/tfjs-backend-wasm'
import * as mobilenet from '@tensorflow-models/mobilenet';
import { useEffect, useRef } from 'preact/hooks';

async function classify(imgElement, model) {
  // Make a prediction through the model on our image.
  const result = await model.classify(imgElement);
  console.log(result);
}

function ImageClassificator(props) {
  console.log('Loading mobilenet..');
  const imageRef = useRef(null);
  

  useEffect(async () => {
    // await tf.setBackend('wasm');
    const model = await mobilenet.load();
    console.log('Successfully loaded model');

    if(imageRef && imageRef.current) {
      console.log(imageRef.current);
      classify(imageRef.current, model);
    }

    return () => {
      console.log('cleanup...');
    };
  });
  
  return (
    <div className="image-classificator">
      <img ref={imageRef} id="img" crossorigin src="https://i.imgur.com/JlUvsxa.jpg" width="227" height="227"/>
    </div>
  );
}

export default ImageClassificator;