import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from 'firebase';
import { Header } from "./components/common"; //Imported from index.js within common folder when no file is specified.
import LoginForm from "./components/LoginForm";

class App extends Component {
    componentDidMount() {
        firebase.initializeApp( {
            apiKey: "AIzaSyB0Q40cb4B3nP1Ulq8bmjUgmp6H8JkjU5M",
            authDomain: "auth-f4849.firebaseapp.com",
            databaseURL: "https://auth-f4849.firebaseio.com",
            projectId: "auth-f4849",
            storageBucket: "auth-f4849.appspot.com",
            messagingSenderId: "1074497350321"
          });
    }
  render() {
    return (
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
