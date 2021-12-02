status="";
objects=[];
obj="";

function preload() {
   video=createCapture(VIDEO);
   video.hide();
}

function setup() {
   canvas=createCanvas(500,500);
   canvas.center();
}

function start() {
   objectDetector=ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("status").innerHTML="Status:Detecting Objects";
   obj=document.getElementById("object").value;
}

function modelLoaded() {
   console.log("Model Loaded!");
   status=true;
}

function draw() {
   image(video,0,0,500,500);

   if (status != "") {
      objectDetector.detect(video,gotResult);

      for(i=0;i,objects.length;i++) {
         document.getElementById("status").innerHTML="Status: Objects are Detected";
         fill('#42f548');
         percent=floor(objects[i].confidence*100);
         text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
         noFill();
         stroke('#42f548');
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

         if(objects[i].label=obj) {
            speakPositive();
         } else if(objects[i].label!=obj)
         {
            speakNegative();
         }
      }
   }
}

function gotResult(error,results) {
   if(error) {
      console.error(error);
   }
   console.log(results);
   objects=results;
}

function speakPositive() {
   var synth=window.speechSynthesis;
   speak_data= obj+" found";
   var utterThis= new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);
}

function speakNegative() {
   var synth=window.speechSynthesis;
   n_speak_data= obj+" not found";
   var utterThis= new SpeechSynthesisUtterance(n_speak_data);
   synth.speak(utterThis);
}