import React, { Component } from 'react'
import { View, TextInput, Button, Text } from 'react-native'

import Styles from './Style'

export default class TodoAdd extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      textValue: ""
    }
  }

  onTextInput = (textValue) => this.setState({ textValue })

  addTodo = () => {
    this.props.handAddTodo(this.state.textValue)
    this.setState({
      textValue: ""
    })
  }

  render() {

    const { textValue } = this.state

    return (
      <View style={ Styles.container }>
        <TextInput 
          style={ Styles.input }
          value={ textValue }
          onChangeText={ this.onTextInput } 
        />
        <View style={ Styles.btn }>
          <Button 
            disabled={ !textValue }
            onPress={ this.addTodo }
            title="Add" 
          />
        </View>
      </View>
    )
  }
}