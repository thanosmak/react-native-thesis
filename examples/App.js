import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ComponentShowcase from './src/views/ComponentShowcase';
import NewsFeed from './src/views/NewsFeed';
import Login from './src/views/Login';

class App extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'IHU News App'),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  render() {
    return (
      <NewsFeed/>
    );
  }
};

const AppNavigator = createStackNavigator(
  {
    NewsFeed: NewsFeed,
    ComponentShowcase: ComponentShowcase,
    Login: Login,
  },
  {
    initialRouteName: 'NewsFeed',
    defaultNavigationOptions : {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        textAlign: 'center',
        fontFamily: 'Roboto'
      },
    }
  }
);

export default createAppContainer(AppNavigator);