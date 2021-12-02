var mouseEvent="";
var last_postion_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="black";
width=1;
canvas.addEventListener("mousedown",my_mousedown);



function my_mousedown(e) {
    mouseEvent="mouseDown";
    color=document.getElementById("colorinput").value;
    width=document.getElementById("widthinput").value;
}
canvas.addEventListener("mouseleave",my_mouseleave)

function my_mouseleave(e) {
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {
 mouseEvent="mouseUp";
}
canvas.addEventListener("mousemove",my_mousemove)

function my_mousemove(e) {
    current_position_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_mouse_y=e.clientY-canvas.offsetTop;
       if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        radius=document.getElementById("radiusinput").value;
        ctx.lineWidth=width;
        ctx.arc(current_position_mouse_x,current_position_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
        console.log("last postion of x and y coordinates = ");
        console.log("x="+ last_postion_of_x+ "y= "+ last_position_of_y);
        
        
        
        console.log("current postion of x and y coordinates = ");
        console.log("x="+ current_position_mouse_x+ "y= "+ current_position_mouse_y);
    }
}

function clearCanvas() {
    ctx.clearRect(0,0,800,600)
}
