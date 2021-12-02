car1_width=120;
car1_height=70;
car1_image='car1.png';
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image='car2.png';
car2_x=10;
car2_y=100;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

background_image="racing.jpg";

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

   car1_imgTag= new Image();
   car1_imgTag.onload=uploadcarbackground;
   car1_imgTag.src=car1_image;

   car2_imgTag= new Image();
   car2_imgTag.onload=uploadcarbackground;
   car2_imgTag.src=car1_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcarbackground() {
    ctx.drawImage(car_imgTag,rover_x,rover_y,rover_width,rover_height);

    ctx.drawImage(car_imgTag,40,30,rover_width,rover_height);

}
 
window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
     if(keyPressed=='38') {
         up();
         console.log("up");
     }
     if(keyPressed=='40'){
         down();
         console.log("down");
     } 

     if(keyPressed=='39') {
         right();
         console.log("right");
     }
     if(keyPressed=='37') {
         left();
         console.log("left");
     }
}
function up() {

}

function down() {

}

function left() {

}

function right() {

}