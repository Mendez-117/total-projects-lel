noseX=0;
noseY=0;
leftwristX=0;
difference=0;
rightwristX=0;
nm="";

function preload() {

} 

function setup() {
video=createCapture(VIDEO); 
video.size(550,500);
canvas= createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw() {
background('#d1ffeb');
fill('#2f00ff');
stroke('#ffa200');
nm=document.getElementById("name").value
text(nm,noseX,noseY,difference);
}

function modelLoaded() {
    console.log("Posenet is Initialised");
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose x = "+noseX+" Nose y = "+noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        console.log("Right wrist x is "+rightwristX+" Left wrist x is"+leftwristX);
        difference=floor(rightwristX-leftwristX);
    } 
}