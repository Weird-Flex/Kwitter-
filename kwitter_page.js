//YOUR FIREBASE LINKS
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
    
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
 

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
uname = message_data['name'];
umsg = message_data['message'];
like = message_data['like'];
namewithtag = "<h4>" + uname + "<img class ='user_tick' src = 'tick.png'> </h4>";
msg_withtag = "<h4 class = 'message_h4'>" + umsg + "</h4>";
like_button = "<button class = 'btn btn-warning' id =" + firebase_message_id + "value =" + like + " onclick = 'updatelike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = namewithtag + msg_withtag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

      } });  }); }
getData();
 function send(){

      msg = document.getElementById("msg").value; firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0
      });document.getElementById("msg").value = "";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}
function updatelike(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });


}
