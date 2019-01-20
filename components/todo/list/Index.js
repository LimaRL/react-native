import React, { Component } from 'react'
import { View } from 'react-native'
import TodoItem from '../item/Index'

import Style from './Style'

export default class TodoList extends Component {
  
  render() {

    const todosToRender = this.props.todoList.map(( todo ) => {
      return(
        <TodoItem text={todo.text} />
      )
    })

    return (
      <View style={Style.container}>
          { todosToRender }
      </View>
    )
  }
}