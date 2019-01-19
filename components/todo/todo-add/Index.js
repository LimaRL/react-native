import React, { Component } from 'react'
import { View, TextInput, Button, Text } from 'react-native'

import Styles from './Style'
import Style from './Style';

export default class TodoAdd extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      textValue: ""
    }
  }

  onTextInput = (textValue) => this.setState({ textValue })

  addTodo = () => {
    if(this.state.textValue !== ""){
      this.props.handAddTodo(this.state.textValue)
      this.setState({
        textValue: ""
      })
    }
  }

  render() {

    const { textValue } = this.state

    return (
      <View style={ Style.container }>
        <TextInput 
          style={ Styles.input }
          value={ textValue }
          onChangeText={ this.onTextInput } 
        />
        <Button 
          style={ Style.button }
          onPress={ this.addTodo }
          title="Add" 
        />
      </View>
    )
  }
}