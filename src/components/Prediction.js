import * as tf from '@tensorflow/tfjs';
console.log('Using TensorFlow backend: ', tf.getBackend());


class Prediction{

    async NewPrediction(){
    const mobilenet = require('@tensorflow-models/mobilenet');
    const img = document.getElementById('img');
    
    const model =  await mobilenet.load();
    const predictions =  await model.classify(img);
    return predictions
    }
}

export default Prediction
