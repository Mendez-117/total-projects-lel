var names=["Charulata Pattekar","Prashant Khairnar","Anish Khairnar","Aryan Khairnar"];
var photos=['Mom.jpeg','Dad.jpeg','Brother.jpeg','my.jpg'];
i=0;

function next() {
  
  if(i == names.length) {
      i=0;
    }
    document.getElementById("name").innerHTML=names[i];
    document.getElementById("pic").src=photos[i];
    i++;
}