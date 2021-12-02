canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=7;
ctx.arc(180,200,60,0,2 * Math.PI);
ctx.stroke();

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.arc(320,200,60,0,2 * Math.PI);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.arc(460,200,60,0,2 * Math.PI);
ctx.stroke();

color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.arc(250,270,60,0,2 * Math.PI);
ctx.stroke();

color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.arc(390,270,60,0,2 * Math.PI);
ctx.stroke();

ctx.lineWidth=2;
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.rect(110,130,420,210)
ctx.stroke();