var firebaseConfig = {
    apiKey: "AIzaSyD1jW-pmPtK3DeL27IwHmTGTtIsHouNsck",
    authDomain: "kwitter-a96cd.firebaseapp.com",
    databaseURL: "https://kwitter-a96cd-default-rtdb.firebaseio.com",
    projectId: "kwitter-a96cd",
    storageBucket: "kwitter-a96cd.appspot.com",
    messagingSenderId: "784695306947",
    appId: "1:784695306947:web:27ba18c0be2aa64ab51076",
    measurementId: "G-MDD5MXL5XL"
  };
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }