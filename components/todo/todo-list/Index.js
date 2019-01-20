import React, { Component } from 'react'
import { View } from 'react-native'
import TodoItem from '../todo-item/Index'

import Styles from './Style'

export default class TodoList extends Component {
  
  render() {

    const todosToRender = this.props.todoList.map(( todo ) => {
      return(
        <TodoItem text={todo.text} />
      )
    })

    return (
      <View style={Styles.container}>
          { todosToRender }
      </View>
    )
  }
}