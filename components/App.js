import React, { Component } from 'react'
import { View } from 'react-native'
import Style from './Style'

import Todo from './todo/Index'

export default class App extends Component {

  render() {
    
    return (
      <View style={Style.container}>
        <Todo />
      </View>
    )
  }
}
