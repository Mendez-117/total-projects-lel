canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="77"){
        new_image('images.png');
        console.log("m");
    }
}