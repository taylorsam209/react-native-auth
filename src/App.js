import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from 'firebase';
import { Header, Button, Spinner } from "./components/common"; //Imported from index.js within common folder when no file is specified.
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    loggedIn: null
  }

    componentDidMount() {
        firebase.initializeApp( {
            apiKey: "AIzaSyB0Q40cb4B3nP1Ulq8bmjUgmp6H8JkjU5M",
            authDomain: "auth-f4849.firebaseapp.com",
            databaseURL: "https://auth-f4849.firebaseio.com",
            projectId: "auth-f4849",
            storageBucket: "auth-f4849.appspot.com",
            messagingSenderId: "1074497350321"
          });

        firebase.auth().onAuthStateChanged((user)=> {
          return user ? this.setState({loggedIn: true}): this.setState({loggedIn: false})
        });
    }

    renderContent() {
      switch(this.state.loggedIn) {
        case true:
          return <View style={styles.buttonContainer}><Button>Log Out</Button></View>
        case false:
          return <LoginForm />
        default:
        return <View style={styles.spinner}><Spinner size='large' /></View>
      }
    }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row"
  },
  spinner: {
    marginTop:100
  }
}

export default App;
