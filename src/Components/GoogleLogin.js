import React from 'react';
import { GoogleLogin } from 'react-google-login';

import { refreshTokenSetup } from '../Utils/utils';

const clientId = '593236304001-1tsona927d3v9k2j4mej5snhn18a3881.apps.googleusercontent.com';

function LoginGoogle(props) {
  const onSuccess = res => {
    console.log(res)
    console.log('Login Sucess: currentUser:', res.profileObj);
    const token = '123456abcdef';
    sessionStorage.setItem('auth-token', token);
    props.onLoginChange(true);
    refreshTokenSetup(res);
  }

  const onFailure = res => {
    console.log('Login failed: res: ', res)
  }

  return(
    <div>
      <GoogleLogin
       clientId={clientId}
       buttonText='Log In'
       onSuccess={onSuccess}
       onFailure={onFailure}
       cookiePolicy={'single_host_origin'}
       className='googleButton'
       isSignedIn={true}
      />
    </div>
  )
}

export default LoginGoogle;

// import firebase from "firebase/app";
// import "firebase/auth";

// var provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// provider.setCustomParameters({
//   'login_hint': 'user@example.com'
// });
// firebase.auth()
//   .signInWithPopup(provider)
//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     var credential = result.credential;

//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });

//   firebase.auth()
//   .getRedirectResult()
//   .then((result) => {
//     if (result.credential) {
//       /** @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;

//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = credential.accessToken;
//       // ...
//     }
//     // The signed-in user info.
//     var user = result.user;
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });