import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-community/async-storage'
const KEY = '@@KEY'
export default class User extends Component {

   constructor(props){
      super(props)
      this.state = {
         user: []
      }
   }

   async componentWillMount() {
      let storedItem = {}
      try {
         const saved = await AsyncStorage.getItem(KEY);
         storedItem = JSON.parse(saved);
       } catch (e) {
         console.warn(e);
       }
       this.setState({user:storedItem})
      //  console.log(storedItem)
    }

   

   render() {
      return (
         <View style={{backgroundColor:'#ddd',flex:1,paddingHorizontal:10}}>

            {/* profil */}
            <View style={{flex:1, flexDirection:'row'}}>
               <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <View style={{borderRadius:50,width:100,height:100,borderWidth:3,borderColor:'#0397d5'}}>
                     <Image/>
                  </View>
               </View>
               <View style={{flex:1,flexDirection:'column'}}>
                  <View style={{flex:1,justifyContent:'flex-end',paddingLeft:10,}}>
                     <Text style={{fontSize:16,color:'#545454'}}>
                        {this.state.user.email}
                     </Text>
                  </View>
                  <View style={{flex:1,flexDirection:'row'}}>
                     
                     <View style={{flex:1,justifyContent:'center',alignItems:'center' }}>
                        <Icon type="ionicon" size={20} name="settings" />
                        <Text style={{fontSize:13, color:'#545454'}}>pengaturan</Text>
                     </View>
                     <View style={{flex:1,justifyContent:'center',alignItems:'center' }}>
                        <Icon type="ionicon" size={20} name="power" onPress={this.signOut}/>
                        <Text style={{fontSize:13, color:'#545454'}}>keluar</Text>
                     </View>

                  </View>
               </View>
            </View>

            {/* menu */}
            <View style={{flex:2}}>

               <TouchableOpacity style={{backgroundColor:'#0397d5',padding:15, marginBottom:15,borderRadius:2}}
                  onPress={() => this.props.navigation.navigate('login')}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'#ddd'}}>masuk</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{backgroundColor:'#0397d5',padding:15, marginBottom:15,borderRadius:2}}
                  onPress={() => this.props.navigation.navigate('register')}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'#ddd' }}>daftar</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{backgroundColor:'#0397d5',padding:15, marginBottom:15,borderRadius:2}}
                  onPress={() => this.props.navigation.navigate('listRoom')}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'#ddd' }}>list room</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{backgroundColor:'#0397d5',padding:15, marginBottom:15,borderRadius:2}}
                  onPress={() => this.props.navigation.navigate('upload')}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'#ddd' }}>pasang iklan</Text>
               </TouchableOpacity>

            </View>
         </View>
      )
   }
}

