import React, { Component } from 'react'
import {
   View, 
   Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';  
export default class ButtonMenu extends Component {
   render() {
      return (
         <View style={{height:54, backgroundColor:'#0397d5', flexDirection:'row'}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',paddingTop:2}}>
               <Icon style={{color:'#545454'}} type="ionicon" size={26} name="home" onPress={() => this.props.content.navigate('home')} />
               <Text style={{fontSize:13, color:'#ddd',marginTop:1}}>home</Text>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center', paddingTop:2}}>
               <Icon style={{color:'#545454'}} type="ionicon" size={26} name="message-circle" onPress={() => this.props.content.navigate('chat')}/>
               <Text style={{fontSize:13, color:'#ddd',marginTop:1}}>chat</Text>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center', paddingTop:2}}>
               <Icon style={{color:'#545454'}} type="ionicon" size={26} name="bell" onPress={() => this.props.content.navigate('notif')}/>
               <Text style={{fontSize:13, color:'#ddd',marginTop:1}}>notif</Text>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center', paddingTop:2}}>
               <Icon style={{color:'#545454'}} type="ionicon" size={26} name="user" onPress={() => this.props.content.navigate('user')}/>
               <Text style={{fontSize:13, color:'#ddd',marginTop:1}}>user</Text>
            </View>
         </View>
      )
   }
}
