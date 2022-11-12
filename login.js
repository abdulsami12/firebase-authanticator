
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCazctPvLrXORCHVAGD9tLLpoEpTdw5c0s",
    authDomain: "authanticator-app.firebaseapp.com",
    databaseURL: "https://authanticator-app-default-rtdb.firebaseio.com",
    projectId: "authanticator-app",
    storageBucket: "authanticator-app.appspot.com",
    messagingSenderId: "476419301755",
    appId: "1:476419301755:web:f5d4dee848e724315e9dde"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();













var email = document.getElementById("email");
var password = document.getElementById("password");




window.login=function login(e){
    e.preventDefault();

    var model = {
      email: email.value,
      password: password.value,
      };
      signInWithEmailAndPassword(auth,model.email,model.password)
      .then(function(success) {

    window.location.replace('todo.html')
    console.log(success.user.uid)})

    .const(function(err){console.log(err)

    })
    console.log(model)

}