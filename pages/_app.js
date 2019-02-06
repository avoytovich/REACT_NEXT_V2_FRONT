import React from 'react';
import App, { Container } from 'next/app';
import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCjJHf3VrEUH2Yf_Gvny2Ue4NVTyX_TBF8",
    authDomain: "hyperjar-test.firebaseapp.com",
    databaseURL: "https://hyperjar-test.firebaseio.com",
    projectId: "hyperjar-test",
    storageBucket: "hyperjar-test.appspot.com",
    messagingSenderId: "459875009610"
  });
}

export default class MyApp extends App {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    firebase.auth().signInWithPhoneNumber('+1 1234567890', appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log('token', confirmationResult.confirm('123456').getToken());
      }).catch(function (error) {
      // Error; SMS not sent
      // ...
    });
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Component
          {...pageProps}
        />
        <div id="recaptcha-container" />
      </Container>
    );
  }
}
