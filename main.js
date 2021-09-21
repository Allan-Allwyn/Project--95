const firebaseConfig = {
    apiKey: "AIzaSyAJ4r8-IcDRPtfeBuw60fhhbPd3PgEWFUw",
    authDomain: "kwitter-2c3e9.firebaseapp.com",
    databaseURL: "https://kwitter-2c3e9-default-rtdb.firebaseio.com",
    projectId: "kwitter-2c3e9",
    storageBucket: "kwitter-2c3e9.appspot.com",
    messagingSenderId: "417918767849",
    appId: "1:417918767849:web:9a274c9e6b932e12401678"
  };
  
   firebase.initializeApp(firebaseConfig);

  function addUsername() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update ({
        purpose:"adding username"
    });

}