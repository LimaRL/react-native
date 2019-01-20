import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import Style from './Style'

import Details from '../details/Index'

export default class TodoItem extends Component {

  render() {

    const { todo, navigation } = this.props

    return (
      <View>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('TodoDetails')}
        >
          <View style={Style.container}>
              <Text style={Style.item}>{ todo.id }</Text>
              <Text style={Style.item}>{ todo.text }</Text>
          </View>
        </TouchableNativeFeedback>
        <View>
          <Details details={ todo.details } location={ todo.location } />
        </View>
      </View>
    )
  }
}