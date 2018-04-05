import React, { Component } from "react";
import { Text } from "react-native";
import { Button, Card, CardSection, Input, Spinner } from "./common";
import firebase from "firebase";

class LoginForm extends Component {
  state = {
    emailText: "",
    passwordText: "",
    error: "",
    loading: false
  };

  onButtonPress() {
    const { emailText, passwordText } = this.state;
    this.setState({ error: "", loading: true });
    firebase.auth().signInWithEmailAndPassword(emailText, passwordText)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(emailText,passwordText)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({
      error: "Authentication Failed",
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({
      emailText: "",
      passwordText: "",
      loading: false,
      error: ""
    });
  }

  renderButton() {
    return this.state.loading ? (
      <Spinner size="small" />
    ) : (
      <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            value={this.state.emailText}
            onChangeText={emailText => this.setState({ emailText })}
            label="Email"
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="Enter password"
            value={this.state.passwordText}
            onChangeText={passwordText => this.setState({ passwordText })}
            label="Password"
          />
        </CardSection>
        <Text style={styles.errorText}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    color: "red",
    fontSize: 20,
    alignSelf: "center"
  }
};

export default LoginForm;
