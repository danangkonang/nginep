import React, { Component } from 'react'

import { 
   FlatList, 
   ActivityIndicator, 
   Text,
   View,
   Image,
   TouchableOpacity
} from 'react-native';
import axios from 'axios'

export default class ListRoom extends Component {
   constructor(props){
      super(props);
      this.state ={ isLoading: true}
   }

   componentWillMount(){
      axios.get('https://api-kos-express.herokuapp.com/api/v1/rooms')
      .then( (response)=> {
         this.setState({
            isLoading: false,
            dataSource: response.data,
         })
      })
   }

   render() {
      console.log(this.state.dataSource)
      if(this.state.isLoading){
         return(
            <View style={{flex: 1,justifyContent:'center',backgroundColor:'#0397d5'}}>
               <ActivityIndicator size="large" color="#fff"/>
            </View>
         )
      }

      return (
         <View style={{flex:1,backgroundColor:'#fff',paddingHorizontal:6,paddingTop:5}}>

            <FlatList data={this.state.dataSource}renderItem={({item}) =>

            <View style={{backgroundColor:'#ddd',marginBottom:10,borderRadius:3}}>
               <View>
                  <Image style={{width:'100%',height: 200, borderRadius:3,}} source={require('../img/room.jpg')}/>
               </View>

               <View style={{paddingHorizontal:7}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                     <Text style={{color:'#0397d5',fontSize:16}}>putri</Text>
                     <Text style={{color:'#000',fontSize:16}}>update hari ini</Text>
                  </View>
               
                  <View>
                     <Text style={{fontSize:16}}>Rp. {item.price}/bulan</Text>
                  </View>
                  <View>
                     <Text style={{fontSize:16}}>{item.name}</Text>
                  </View>
                  <View style={{flexDirection:'row',marginVertical:4}}>
                     <TouchableOpacity 
                     onPress={() => this.props.navigation.navigate('detail',{id: item.id})}
                     style={{alignItems:'center',backgroundColor:'#0397d5',borderRadius:4,width:150,marginRight:10}}>
                        <Text style={{color:'#ddd',fontSize:16,marginVertical:10}}>detail</Text>
                     </TouchableOpacity>
                     <TouchableOpacity 
                     onPress={() => this.props.navigation.navigate('detail',{id: item.id})}
                     style={{alignItems:'center',backgroundColor:'#0397d5',borderRadius:4,width:150}}>
                        <Text style={{color:'#ddd',fontSize:16,marginVertical:10}}>booking</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>

            }keyExtractor={({id}, index) => id}/>

         </View>
      )
   }
}

