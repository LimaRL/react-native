import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class TodoDetails extends Component {
  render() {

    const { details, location } = this.props

    return (
      <View>
        <Text>{ details }</Text>
        <Text>
          Created: { location }</Text>
      </View>
    )
  }
}

export default TodoDetails