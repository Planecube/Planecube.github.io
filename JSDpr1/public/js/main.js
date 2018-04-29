/*
inject a background image 
function photogrnd() {
    document.main.style.backgroundColor = "#ffffe6";
    document.main.style.backgroundImage = "url(../images/_H0A4189.jpg)";
}
*/

  // $("#crout").click(function(){
  // $(".croutonre").slideToggle()
  // });

  // $("#soup").click(function(){
  // $(".soupre").slideToggle()
  // });

  // $("#salad").click(function(){
  // $(".saladre").slideToggle()
  // });

 //  some code from Keanu
 // Initialize the FirebaseUI Widget using Firebase.
 //  var ui = new firebaseui.auth.AuthUI(firebase.auth())

 //  var uiConfig = {
 //    callbacks: {
 //      signInSuccessWithAuthResult: function() {
 //        return false;
 //      },
 //    },
 //    signInOptions: [
 //      firebase.auth.EmailAuthProvider.PROVIDER_ID,
 //    ],
 //  }

 //  ui.start('#firebaseui-auth-container', uiConfig)

 
// (function(){
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyDEEYMwR3tNaTvDwKx-dYq1aMeq2z9Ijkk",
//     authDomain: "gajsd-41c51.firebaseapp.com",
//     databaseURL: "https://gajsd-41c51.firebaseio.com",
//     projectId: "gajsd-41c51",
//     storageBucket: "",
//     messagingSenderId: "59709098463"
//   };

//   firebase.initializeApp(config);
// }());


 /// Get elements into the DOM
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogOut = document.getElementById('btnLogOut');

// Add Login Event
  btnLogin.addEventListener('click', e => {

  // Get email and password for login

  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  //Signin

  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));

});


//Add a signout button

btnLogOut.addEventListener('click', e => {
  firebase.auth().signOut();
});

// Add a realtime listener

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    btnLogOut.classList.remove('hide');
  } else {
    console.log('not logged in');
    btnLogOut.classList.add('hide');
  }
});

  
  

