import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Button } from 'react-native-news-app-lib';

class ButtonExample extends Component {
  render() {
    return (
      <>
        <View style={styles.buttonsContainer}>
          <Button capitalize size="small">small capitalize</Button>
        </View>
        <View style={styles.buttonsContainer}>
          <Button round uppercase color="error">round uppercase</Button>
        </View>
        <View style={styles.buttonsContainer}>
          <Button round size="small" color="success">round small</Button>
        </View>
        <View style={styles.buttonsContainer}>
          <Button loading={true} radius={12} color="#3B5998">loading</Button>
        </View>
        <View style={styles.buttonsContainer}>
          <Button color="#50C7C7">custom color</Button>
        </View>
        <View style={styles.buttonsContainer}>
          <Button onlyIcon icon="save" iconFamily="antdesign" iconSize={24} color="warning" iconColor="#fff" style={{ width: 40, height: 40 }}>warning</Button>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginVertical: 5
  },
});

export default ButtonExample;