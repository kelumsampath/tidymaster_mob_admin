import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import TopHead from './components/TopHead'

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <TopHead />
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);
