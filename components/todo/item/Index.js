import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Style from './Style'

export default class TodoItem extends Component {
  render() {

    const { text } = this.props

    return (
      <View style={Style.container}>
        <Text style={Style.item}>{ text }</Text>
      </View>
    )
  }
}