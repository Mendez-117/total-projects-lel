lWy=0;
lWx=0;
lWs=0;
statusHalo="";

rWy=0;
rWx=0;

halo="";
peterPan="";

function preload() {
  halo=loadSound('Halo.mp3');
  peterPan=loadSound('PeterPan.mp3');
  console.log("Songs are loaded");
}

function setup() {
  canvas=createCanvas(600,600);
  canvas.center();

  video=createCapture(VIDEO);
  video.hide();

  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded() {
   console.log("Posenet is Initialized!");
}

function gotPoses(results) {
  if (results.length>0) {
    console.log(results);

    lWs=results[0].pose.keyPoints[9].score;
    console.log("Score of Left Wrist is = "+ lWs);

    lWx=results[0].pose.leftWrist.x;
    lWy=results[0].pose.leftWrist.y;
    console.log("Left Wrist X= "+lWx+" Left Wrist Y= "+lWy);
    
    rWx=results[0].pose.righttWrist.x;
    rWy=results[0].pose.righttWrist.y;
    console.log("Right Wrist X= "+rWx+" Right Wrist Y= "+rWy);
    
  }
}

function draw() {
  image(video,0,0,600,600);

  circle(lWx,lWy,20);

  halo=halo.isPlaying();
  peterPan=peterPan.isPlaying();

  if(lWs>0.2) {
    halo.play();
    peterPan.stop();
  }
}