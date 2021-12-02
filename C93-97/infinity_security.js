var firebaseConfig = {
    apiKey: "AIzaSyBjqTd1i-TkxFKhBpgouWpeAHnCljj9r8s",
    authDomain: "c93-97.firebaseapp.com",
    projectId: "c93-97",
    storageBucket: "c93-97.appspot.com",
    messagingSenderId: "713454796202",
    appId: "1:713454796202:web:0fb3fb1d224cad4be3bfd3"
};

// Initialize Firebas
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("userName");
document.getElementById("username").innerHTML="Everything Checks Out"+ user_name +". Enter The Briefing Room Please";

function addRoom()
{
    roomName=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name",roomName);
    window.location= "debrief.html";
} 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room names- "+ Room_names)
   row="<div class='room_name' id="+Room_names+" onclick='redirectToroomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location= "debrief.html";
}