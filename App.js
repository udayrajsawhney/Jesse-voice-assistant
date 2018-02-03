import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { View,ScrollView, KeyboardAvoidingView } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }
  
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
       <KeyboardAvoidingView behavior="padding" style={{
        flex: 1
      }}>
      <Container>
      <Header />
      <Content>
        <Item rounded>
          <Input placeholder='Rounded Textbox'/>
        </Item>
      </Content>
    </Container>
      </KeyboardAvoidingView>
      
    )
  }
}

