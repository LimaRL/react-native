import React, { Component } from 'react'
import { View } from 'react-native'
import Style from './Style'

import TodoList from './list/Index'
import TodoAdd from './add/Index'

const API_KEY = ""

const todosList = [
    { id: 1, text: "Todo 1", "details": 'adasds', "location": "bbb" },
    { id: 2, text: "Todo 2", "details": "%%*$*&%&&*", "location": "bbb"},
    { id: 3, text: "Todo 3", "details": "adasdsad", "location": "bbb"}
  ]

export default class Todo extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
          todos: todosList
        }
    }

  handAddTodo = (text) => {
    
    const id = this.state.todos.length + 1

    this.setState({
      todos: [
        ...this.state.todos,
        { id, text }
      ]
    })

    if( this.props.geolocationPermissionGranted ){
      navigator.geolocation.getCurrentPosition( (pos) => {
        this.setTodoLocation( id, pos.coords)
      },
      null,
      { 
        enableHighAccuracy: true 
      }
      )
    }
  }

  async setTodoLocation( id, coords ){
    // const { todos } = this.state
    // todos
    //   .find( todo => todo.id === id )
    //   .location = coords;
    // this.setState({
    //   todos
    // })

    const { latitude, longitude } = coords

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
      );

      const data = await response.json();

      if( !data.results.error_message ){
        console.warn(data)
        const address = data.results.formatted_address;
        const { todos } = this.state

        todos
          .find(todo => todo.id === id)
          .location = address;

        this.setState({
          todos
        })
      }else{
        //throw data.status
        throw JSON.stringify(data)
      }

    } catch (error) {
      console.error(error)
    }
  }

  render() {

    const { todos } = this.state
    const { navigation } = this.props

    return (
      <View style={Style.container}>
        <TodoAdd handAddTodo={ this.handAddTodo } />
        <TodoList navigation={ navigation } todoList={ todos } />
      </View>
    )
  }
}