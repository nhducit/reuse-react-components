import React from 'react';
import { View, Text } from 'react-native';

export default class Hello extends React.Component {
  render() {
    return React.createElement(
      View,
      null,
      React.createElement(
        Text,
        null,
        'wtf'
      )
    );
  }
}