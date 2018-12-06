import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
export class Main extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Login">
            <Login />
          </Tab>
          <Tab heading="SignUp">
            <SignUp />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}