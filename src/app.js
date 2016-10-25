import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
      apiKey: 'AIzaSyByfApWBxI5Cu0hKnDUb3dpxMxUkYJ06Vk',
      authDomain: 'auth-63090.firebaseapp.com',
      databaseURL: 'https://auth-63090.firebaseio.com',
      storageBucket: 'auth-63090.appspot.com',
      messagingSenderId: '904577249386'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
