/*
inject a background image 
function photogrnd() {
    document.main.style.backgroundColor = "#ffffe6";
    document.main.style.backgroundImage = "url(../images/_H0A4189.jpg)";
}
*/

 $("#crout").click(function(){
  $(".croutonre").slideToggle()
 });

 $("#soup").click(function(){
  $(".soupre").slideToggle()
 });

  $("#salad").click(function(){
  $(".saladre").slideToggle()
 });
// Copy and past some login page css here...

// const auth = firebase.auth();

// auth.signInWithEmailAndPassword(email, pass);

// auth.createUserWithEmailAndPassword(email, pass);


//  // Initialize the FirebaseUI Widget using Firebase.
//   var ui = new firebaseui.auth.AuthUI(firebase.auth())

//   var uiConfig = {
//     callbacks: {
//       signInSuccessWithAuthResult: function() {
//         return false;
//       },
//     },
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ],
//   }

//   ui.start('#firebaseui-auth-container', uiConfig)

// // Get elements into the DOM
// const txtEmail = document.getElementBYId('txtEmail');
// const txtPassword = document.getElementBYId('txtPassword');
// const btnLogin = document.getElementBYId('btnLogin');
// const btnSignup = document.getElementBYId('btnSignup');
// const btnLogout = document.getElementBYId('btnLogout');
// // Add Login Event
// btnLogin.addEventListener('click, e =>' {
//   // Get email and password
//   const email = txtEmail.value;
//   const pass = txtPassword.value;
//   const auth = firebase.auth();
//   //Signin
//   const promise = auth.signInWithEmailAndPassword(email, pass);
//   promise.catch(e => console.log(e.message));
// });

// // Add sign up event
// btnSignup.addEventListener('click, e =>' {
//   // Get email and password
//   const email = txtEmail.value;
//   const pass = txtPassword.value;
//   const auth = firebase.auth();
//   //Signup
//   const promise = auth.createUserWithEmailAndPassword(email, pass);
//   promise.catch(e => console.log(e.message));
// });
// //Add a signout button
// btnLogout.addEventListener('click' => {
//   firebase.auth().signOut();
// });

// // Add a realtime listener
// firebase.auth().onAuthStateChanged(firebaseUser =>{
//   if (firebaseUser) {
//     console.log(firebaseUser);
//     btnLogout.classList.remove('hide');
//   } else {
//     console.log('not logged in');
//     btnLogout.classList.add('hide');
//   }
// });
