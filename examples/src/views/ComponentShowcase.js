import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Card, Button, Input, Text, Block, Checkbox } from 'react-native-news-app-lib';

import ButtonExample from '../componentExamples/ButtonExample';
import CardExample from '../componentExamples/CardExample';
import CheckboxExample from '../componentExamples/CheckboxExample';
import InputExample from '../componentExamples/InputExample';
import IconExample from '../componentExamples/IconExample';
import TextExample from '../componentExamples/TextExample';
import SwitchExample from '../componentExamples/SwitchExample';
import theme from '../theme.js'

class ComponentShowcase extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'RN News App Components'),
    };
  };
  
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>

              <View style={styles.sectionContainer}>
                <Text h4>Button</Text>
                <Text p style={styles.sectionDescription}>
                  Here are some types of <Text bold>Buttons</Text>
                </Text>
                <ButtonExample/>
              </View>
              
              <View style={styles.sectionContainer}>
                <Text h4>Card</Text>
                <Text p style={styles.sectionDescription}>
                  Here are samples of how <Text bold>Cards</Text> can be
                </Text>
                <CardExample/>
              </View>

              <View style={styles.sectionContainer}>
                <Text h4>Checkbox</Text>
                <Text p style={styles.sectionDescription}>
                  Here are some <Text bold>Checkboxes</Text>
                </Text>
                <CheckboxExample/>
              </View>

              <View style={styles.sectionContainer}>
                <Text h4>Icon</Text>
                <Text p style={styles.sectionDescription}>
                  The <Text bold>Icons</Text> component utilize the <Text italic={true}>react-native-vector-icons</Text> library which containes icons from 14 different bundles of icons. Some of the most famous ones are <Text bold>FontAwesome, MaterialIcons, Ionicicons etc.</Text>
                </Text>
                <IconExample/>
              </View>

              <View style={styles.sectionContainer}>
                <Text h4>Input</Text>
                <Text p style={styles.sectionDescription}>
                  Here are some types of <Text bold>Inputs</Text>
                </Text>
                <InputExample/>
              </View>

              <View style={styles.sectionContainer}>
                <Text h4>Text</Text>
                <Text p style={styles.sectionDescription}>
                  Here are different sizes of <Text bold>Texts</Text>
                </Text>
                <TextExample/>
              </View>
              
              <View style={styles.sectionContainer}>
                <Text h4>Switch</Text>
                <Text p style={styles.sectionDescription}>
                  Here are a few <Text bold>Switches</Text>
                </Text>
                <SwitchExample/>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    marginBottom: 40,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    marginBottom: 16,
  },
  buttonsContainer: {
    marginVertical: 5
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default ComponentShowcase;