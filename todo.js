
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  import { getAuth,signOut, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

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













var arr=[];
var todoInp = document.getElementById("todoInp")
var parent = document.getElementById("parent");

function renderUL() {
    parent.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
      parent.innerHTML += `<li>${arr[i].task}<br><span class='label'>${arr[i].time}<span></li>`;
    }
  }

  window.addTask = function (e) {
    e.preventDefault();
    var obj = {
      task: todoInp.value,
      time: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} T ${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`,
      userName: "ABC",
    };
  
    arr.push(obj);
    renderUL();
  };
  


window.logout = function () {
    signOut(auth)
      .then(function () {
        console.log("Logout Successfully");
        window.location.href = "login.html";
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  





function checkAuthentication() {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
        window.location.href = "login.html";
      }
    });
  }
  checkAuthentication();


//   abdaul@abc.com