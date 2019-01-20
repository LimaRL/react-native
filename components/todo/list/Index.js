import React, { Component } from 'react'
import { View } from 'react-native'
import TodoItem from '../item/Index'

import Style from './Style'

export default class TodoList extends Component {
  
  render() {

    const { navigation } = this.props

    const todosToRender = this.props.todoList.map(( todo ) => {
      return(
        <TodoItem 
          key={`todo-id-${todo.id}`}
          todo={ todo }
          navigation={ navigation }
        />
      )
    })

    return (
      <View style={Style.container}>
          { todosToRender }
      </View>
    )
  }
}