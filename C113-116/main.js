function preload () {

}

function setup () {
    canvas= createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("modelLoaded");
}

function draw() {
    image(video,0,0,400,400);
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);

        console.log("noseX= "+results[0].pose.nose.x);
        console.log("noseY= "+results[0].pose.nose.y);
    }
}
