SpeechRecognition= window.webkitSpeechRecognition;
recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML= " ";
    recognition.start();
}
recognition.onresult=function(event){
  console.log(event);
  var content= event.results[0][0].transcript;
  console.log(content)
  document.getElementById("textbox").innerHTML=content ;
  if(content== "take my selfie"){
    console.log("taking selfie");
    speak();
  }

  }
function speak(){

  synth= window.speechSynthesis;
  speakdata= "Taking your selfie in 5 seconds"
  utterThis= new SpeechSynthesisUtterance(speakdata);
  synth.speak(utterThis);
  Webcam.attach(camera);
  setTimeout(function(){
    take_snapshot();
    save();
    

  },5000);
}
Webcam.set({
width: 300,
height:300,
image_format: 'jpeg',
jpeg_quality: 90
});
var camera=document.getElementById("camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML="<img id='selfie' src= '"+data_uri+"'>"
});}
function save(){
  var link= document.getElementById("link");
  var image = document.getElementById("selfie").src;
  link.href= image;
  link.click();
}