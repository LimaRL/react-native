import React, { Component } from 'react'
import { View } from 'react-native'
import Style from './Style'

import TodoList from './todo-list/Index'
import TodoAdd from './todo-add/Index'

const todosList = [
    { text: "Todo 1" },
    { text: "Todo 2" },
    { text: "Todo 3"}
  ]

export default class Todo extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            todos: todosList
        }
    }

  handAddTodo = (todo) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { text: todo }
      ]
    })
  }

  render() {

    const { todos } = this.state

    return (
      <View style={Style.container}>
        <TodoAdd handAddTodo={ this.handAddTodo } />
        <TodoList todoList={ todos } />
      </View>
    )
  }
}