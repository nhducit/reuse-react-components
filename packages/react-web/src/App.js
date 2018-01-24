import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello} from '@example/components'
import {View, Text} from 'react-native'
class App extends Component {
  render() {
    return (
      <div className="App">
        <p>test</p>
        <Hello/>
        <View>
          <Text>hello222</Text>
        </View>
      </div>
    );
  }
}

export default App;
