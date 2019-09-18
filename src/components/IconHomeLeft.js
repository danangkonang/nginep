import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Feather';  

export default class IconHomeLeft extends Component {
   render() {
      return (
            <Icon  
               style={{ paddingLeft: 10 }}  
               onPress={() => navigation.openDrawer()}  
               name="align-justify"  
               size={30}  
                  />  
      )
   }
}