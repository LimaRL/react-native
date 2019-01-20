import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import Styles from './Style'

import Todo from './todo/Index'

export default class App extends Component {

  render() {
    
    return (
      <View style={Styles.container}>
        <ScrollView contentContainerStyle={Styles.scrollView}>
          <Todo />
        </ScrollView>
      </View>
    )
  }
}
