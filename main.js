function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jCgJ7QDgM/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
  if (error)
  {
      console.log(error);
  }
  else {
      console.log(results);
      r = Math.floor(Math.random()*255)+1;
      g = Math.floor(Math.random()*255)+1;
      b = Math.floor(Math.random()*255)+1;

      document.getElementById("result").innerHTML = "I can hear : "+ results[0].label;
      document.getElementById("accuracy").innerHTML = "Accuracy : "+ (results[0].confidence*100).toFixed(2)+"%";

      document.getElementById("result").style.color = "rgb("+r+","+g+","+b+")";
      document.getElementById("accuracy").style.color = "rgb("+r+","+g+","+b+")";

      img1 = document.getElementById("animal1");
      img2 = document.getElementById("animal2");

      if (results[0].label == "Background Noise")
      {
          img1.src = 'dogjumping.gif';
          img2.src = 'cutecat.jpeg';
      }

      else if (results[0].label == "Meowing")
      {
          img1.src = '343.png';
          img2.src = 'cat.gif';
      }
  }
}