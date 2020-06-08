import render from "preact-render-to-string";
import ImageComponent from '../ImageComponent'
import * as mobilenet from '@tensorflow-models/mobilenet';

let net;

function ImageClassificator() {
  console.log('Loading mobilenet..');

  // // Load the model.
  // net = await mobilenet.load();
  // console.log('Successfully loaded model');

  // // Make a prediction through the model on our image.
  // const imgEl = document.getElementById('img');
  // const result = await net.classify(imgEl);
  // console.log(result);

  return (
    <div className="image-classificator">
    <ImageComponent ref={ref} src="https://i.imgur.com/JlUvsxa.jpg" width="227" height="227" />
  </div>
  );
}

export default ImageClassificator;
