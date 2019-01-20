import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Styles from './Style'

export default class TodoItem extends Component {
  render() {

    const { text } = this.props

    return (
      <View style={Styles.container}>
        <Text style={Styles.item}>{ text }</Text>
      </View>
    )
  }
}