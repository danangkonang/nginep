import React, { Component } from 'react'
import {
   View,
   Text,
   Image,
   ScrollView 
} from 'react-native'
export default class Popular extends Component {
   render() {
      return (
         <View style={{flex:1}}>
            <View style={{height:30,marginVertical:15,paddingHorizontal:10}}>
               <Text style={{fontWeight:'bold',color:'#555',}}>Kota populer</Text>
            </View>
            <View style={{flex:1, backgroundColor:'#ddd'}}>
               <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection:'row',height: 150,paddingLeft:10}}>

                  <View style={{marginRight:12}} >
                  <Image style={{width: 150,height: 150, borderRadius:3}} source={require('../img/room.jpg')}/>
                  </View>

                  <View style={{paddingRight:10}} >
                  <Image style={{ width: 150,height: 150, borderRadius:3}} source={require('../img/room.jpg')}/>
                  </View>

                  <View style={{paddingRight:10}} >
                  <Image style={{width: 150,height: 150, borderRadius:3}} source={require('../img/room.jpg')}/>
                  </View>

               </ScrollView >
            </View>
         </View>
      )
   }
}