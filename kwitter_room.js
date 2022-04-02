
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyClcdoZeBkP5Kocu28ets1MYsl0Eat6r78",
      authDomain: "kwitter-100ca.firebaseapp.com",
      databaseURL: "https://kwitter-100ca-default-rtdb.firebaseio.com",
      projectId: "kwitter-100ca",
      storageBucket: "kwitter-100ca.appspot.com",
      messagingSenderId: "63587714396",
      appId: "1:63587714396:web:488a1661fc962b63056d99",
      measurementId: "G-Z2BWX762TS"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var username=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome "+username+"!";
function addroom(){
      room_name = document.getElementById("room").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirect_to_roomname(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirect_to_roomname(name){
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location="index.html";
}