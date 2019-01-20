import React, { Component } from 'react'
import { View, ScrollView, PermissionsAndroid } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";

import Style from './Style'

import Todo from './todo/Index'
import TodoDetails from './todo/details/Index'

class Home extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      geolocationPermissionGranted: null
    }

    this.requestMapsPermission()
  }

  async requestMapsPermission(){

    try{
      const isGranted = await PermissionsAndroid.request(
        
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Todo app location access',
          'message': 'We need your location to know'
        }
      )

      this.setState({
        geolocationPermissionGranted: isGranted === "granted"
      })

    }catch (err){
      console.error(err)
    }

  }

  render() {

    //console.warn(this.state.geolocationPermissionGranted)

    const { navigation } = this.props
    const { geolocationPermissionGranted } = this.state

    return (
      <View style={Style.container}>
        <ScrollView contentContainerStyle={Style.scrollView}>
          <Todo navigation={ navigation }  geolocationPermissionGranted={ geolocationPermissionGranted }/>
        </ScrollView>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  TodoDetails: {
    screen: TodoDetails
  }
});

export default createAppContainer(AppNavigator);