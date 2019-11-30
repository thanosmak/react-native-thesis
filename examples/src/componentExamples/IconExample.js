import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Icon, Text } from 'react-native-news-app-lib';

class IconExample extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Icon name="react" family="material-community" color="#61dafb" size={48} />
          <Icon name="map-marker-radius" family="material-community" size={40} color="red" />
          <Icon name="newspaper" family="material-community" size={34} />
          <Icon name="facebook" family="material-community" color="#3B5998" size={26} />
          <Icon name="clock" family="material-community" color="#EA4C89" size={20} />
        </View>
        <Text muted style={{paddingTop:8}}>Icons with different size and color (and different icon bundles)</Text>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default IconExample;