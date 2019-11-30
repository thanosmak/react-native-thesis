import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Input } from 'react-native-news-app-lib';

class InputExample extends Component {
  render() {
    return (
      <>
        <Input placeholder="regular" />
        <Input 
          placeholder="Bordeless and custom style" 
          style={{ borderBottomColor: "#808080", borderBottomWidth: 1 }}
          borderless
        />
        <Input placeholder="password" password viewPass />
        <Input placeholder="rounded input" rounded label="Label" />
        <Input
          placeholder="Numbers only Input with Icon on left"
          left
          icon="heart"
          family="antdesign"
          iconSize={14}
          iconColor="red"
          type='number-pad'
        />
        <Input
          placeholder="Input with custom styling"
          style={{ borderColor: "#4F8EC9", borderWidth: 2 }}
          placeholderTextColor="#4F8EC9"
        />
      </>
    )
  }
};

export default InputExample;