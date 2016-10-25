import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
        <LoginForm />
      </View>
    );
  }
}

export default App;
