import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC5_iQf4OaWR7e3NYwqmKRr0L1sMucbNIg",
    authDomain: "try-new-889fe.firebaseapp.com",
    databaseURL: "https://try-new-889fe-default-rtdb.firebaseio.com",
    projectId: "try-new-889fe",
    storageBucket: "try-new-889fe.appspot.com",
    messagingSenderId: "382082270322",
    appId: "1:382082270322:web:e36fccbf6aa6fa9df66eeb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-database.js";

  const db = getDatabase(app);

  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var password = document.getElementById('pass');
  var mobile = document.getElementById('mobile')

  var btn = document.getElementById('btn');

  btn.addEventListener("click", submitForm)

  
  function submitForm(){
      set(ref(db, 'Users/'+mobile.value), {
          name: name.value,
          email: email.value,
          mobile: mobile.value,
          password: password.value
      });

      name.value =""
      email.value =""
      password.value =""
      mobile.value =""
  }