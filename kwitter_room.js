
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBtIsHqlcUc1q6OscU-4vQ4TCThZ8poVqc",
      authDomain: "kwitter-ba45a.firebaseapp.com",
      databaseURL: "https://kwitter-ba45a-default-rtdb.firebaseio.com",
      projectId: "kwitter-ba45a",
      storageBucket: "kwitter-ba45a.appspot.com",
      messagingSenderId: "746812461385",
      appId: "1:746812461385:web:4354d7a65747e2eaab0a98",
      measurementId: "G-HTCV7VVFT8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

    
    
  

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome" + user_name;

    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
     snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
      Room_names = childKey; 
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row; }); }); }
getData();
      
     


function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }




function redirectToRoomName(name){
      
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";


}


function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      
}
