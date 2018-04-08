import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './src/containers/HomeScreen'
import FeedScreen from './src/containers/FeedScreen'

const RootStack = StackNavigator({
  Home: {
    title: 'Home',
    screen: HomeScreen
  },
  List: {
    title: 'Feeds',
    screen: FeedScreen
  },
}, {
    initialRouteName: 'Home',
  });

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
