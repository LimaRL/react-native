import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class TodoItem extends Component {
  render() {

    const { text } = this.props

    return (
      <View>
        <Text>{ text }</Text>
      </View>
    )
  }
}