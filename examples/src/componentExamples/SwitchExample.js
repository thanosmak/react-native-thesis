import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Switch, Text } from 'react-native-news-app-lib';

class SwitchExample extends Component {
  constructor() {
    super();
    this.state={
      switchValue : false
    }
    this.toggleSwitch = this.toggleSwitch.bind(this)
  }

  toggleSwitch = (value) => {
    this.setState({ switchValue: value })
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text size={16} p>{this.state.switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
          <Switch
            color="#000"
            style={styles.switch}
            onChange={this.toggleSwitch}
            value={this.state.switchValue} />
        </View>

        <View style={styles.container}>
          <Text size={16} p>Different color switch</Text>
          <Switch 
            initialValue={false}
            style={styles.switch}
            trackColor={{false: 'pink'}}
            thumbColor={'red'}
            onChange={() => console.log('switch')} />
        </View>

        <View style={styles.container}>
          <Text size={16} p>Disabled switch</Text>
          <Switch
            disabled
            color="#ffcd00"
            style={styles.switch}
            onChange={this.toggleSwitch} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  switch: {
    marginTop: 10
  }
});

export default SwitchExample;