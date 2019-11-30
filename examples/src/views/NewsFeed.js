import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Image, View, SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Container, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

import { Block, Card, Text, NavBar, Button } from 'react-native-news-app-lib';
import theme from '../theme';

class NewsFeed extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'IHU News App'),
      headerRight: () => (
        <View style={styles.navbarViiew}>
          <Button 
            onlyIcon
            icon="death-star-variant" 
            iconFamily="material-community" 
            iconSize={24} 
            color="transparent" 
            iconColor="#000" 
            style={{ width: 32, height: 32, marginRight: 16 }} 
            onPress={() => navigation.navigate('ComponentShowcase')}
          ></Button>
          <Button 
            onlyIcon
            icon="login" 
            iconFamily="material-community" 
            iconSize={24} 
            color="transparent" 
            iconColor="#000" 
            style={{ width: 32, height: 32, marginRight: 16 }} 
            onPress={() => navigation.navigate('Login')}
          ></Button>
        </View>
      ),
      headerLeft: () => (
        <Image
          style={{width: 32, height: 32, marginLeft: 20,}}
          source={require('../../assets/IHU_logo.png')}
        />
      ),
    };
  };

  render() {
    const { navigation } = this.props;
   
    return (
      <SafeAreaView style={{flex: 1}}>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'#ffcd00'}}>
          <Tab tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'black'}} activeTextStyle={{color:'black'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'black'}} activeTextStyle={{color:'black'}} heading="Science">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'black'}} activeTextStyle={{color:'black'}} heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  }, card: {
    marginBottom:18
  },
  navbarViiew: {
    flexDirection: 'row'
  }
});

export default withNavigation(NewsFeed);