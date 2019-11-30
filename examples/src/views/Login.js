import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Alert } from 'react-native';
import { Button, Input } from 'react-native-news-app-lib';
import { withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'Login'),
    };
  };

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input placeholder="User Name" rounded />
        </View>
        
        <View style={styles.inputContainer}>
          <Input placeholder="Password" password viewPass rounded/>
        </View>

        <View style={styles.buttonContainer}>
          <Button color="info" round style={{width:310}} onPress={() => this.props.navigation.navigate('ComponentShowcase')}>Login</Button>
        </View>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('Restore password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <View style={styles.buttonContainer, {marginTop:50}}>
          <Button color="success" round style={{width:310}} onPress={() => this.onClickListener('Register')}>Register</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 50
  },
  inputContainer: {
      // width:250,
      // height:45,
      // marginBottom:20,
      // flexDirection: 'row',
      // alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:10,
    // width:250,
    // borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});