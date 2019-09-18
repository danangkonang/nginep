import React, { Component } from 'react'
import {
   View,
   Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';  

export default class IconHomeRight extends Component {
   render() {
      return (
         <View style={{flexDirection:'row'}} >
            <Icon type="ionicon" size={30} name="heart" style={{ paddingRight: 10 }} />
            <Icon type="ionicon" size={30} name="search" style={{ paddingRight: 10 }} />
            <Icon type="ionicon" size={30} name="more-vertical" style={{ paddingRight: 10 }} />
         </View>
      )
   }
}