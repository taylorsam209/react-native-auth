import React, { Component } from "react";
import { Button, Card, CardSection, Input } from "./common";

class LoginForm extends Component {
  state = { emailText: "", passwordText: "" };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            value={this.state.emailText}
            onChangeText={text => this.setState({ emailText })}
            label="Email"
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="Enter password"
            value={this.state.passwordText}
            onChangeText={text => this.setState({ passwordText })}
            label="Password"
          />
        </CardSection>

        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  textInput: {
    height: 20,
    width: 100
  }
};

export default LoginForm;
