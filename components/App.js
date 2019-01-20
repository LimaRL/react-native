import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";

import Style from './Style'

import Todo from './todo/Index'
import TodoDetails from './todo/details/Index'

class Home extends Component {

  render() {
    
    return (
      <View style={Style.container}>
        <ScrollView contentContainerStyle={Style.scrollView}>
          <Todo />
        </ScrollView>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  TodoDetails: {
    screen: TodoDetails
  }
});

export default createAppContainer(AppNavigator);