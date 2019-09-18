import React, { Component } from 'react'
import {
   View,
   Text,
   Image,
   TouchableOpacity,
   ScrollView
   } from 'react-native'

import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios'
export default class Detail extends Component {

   constructor(props){
      super(props)
      this.state={ 
         // isLoading: true
         room: {}
      }
   }

   componentWillMount(){
      const { navigation } = this.props
      const itemId = navigation.getParam('id')
      // console.log(itemId)
      axios.get('https://api-kos-express.herokuapp.com/api/v1/room/'+itemId)
      .then( (response)=> {
         this.setState({
            // isLoading: false,
            room: response.data[0],
         })
         // console.log(response.data[0])
      })
   }
   render() {
      return (
         <View style={{flex:1}}>
            <ScrollView>
               {/* image */}
               <View style={{height:280}}>
                  <View style={{flex:1,backgroundColor:'#ddd'}}>
                        <Image style={{width:'100%',height: 240}} source={require('../img/room.jpg')}/>
                        {/* <Text>id {itemId}</Text> */}
                  </View>
                  <View style={{height:40,flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#545454'}}>
                        <View>
                           <Icon style={{color:'#0397d5'}} type="ionicon" size={26} name="image"/>
                        </View>
                        <View>
                           <Icon style={{color:'#0397d5'}} type="ionicon" size={26} name="map-pin"/>
                        </View>
                        <View>
                           <Icon style={{color:'#0397d5'}} type="ionicon" size={26} name="crosshair"/>
                        </View>
                  </View>
                  
               </View>

               {/* boby */}
               <View style={{flex:1,backgroundColor:'#fff',paddingHorizontal:3}}>
                  <View style={{paddingVertical:3}}>
                     <Text style={{color:'red',fontSize:15}}>putri tinggal 1 kamar</Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                     <View style={{flex:3}}>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'#555'}}>{this.state.room.address}</Text>
                     </View>
                     <View style={{flex:1}}>
                     <Icon style={{color:'yellow'}} type="ionicon" size={26} name="star"/>
                     </View>
                  </View>
                  <View style={{paddingVertical:5}}>
                     <Text style={{color:'#ddd'}}>updatre 23 agustus 2019 02:37</Text>
                  </View>
                  <View style={{flexDirection:'row',borderBottomWidth:2,borderTopWidth:2,borderTopColor:'#545454',borderBottomColor:'#545454',paddingVertical:10}}>
                     <View style={{flex:1}}><Text style={{fontSize:15,color:'#555'}}>tidak termasuk listrik</Text></View>
                     <View style={{flex:1}}><Text style={{fontSize:15,color:'#555'}}>tidak termasuk listrik</Text></View>
                  </View>
                  <View style={{paddingVertical:5}}>
                     <Text style={{paddingVertical:3,fontSize:15, color:'#555'}}>luas kamar</Text>
                     <View style={{flexDirection:'row'}}>
                        <Icon style={{color:'#0397d5'}} type="ionicon" size={27} name="maximize"/>
                        <Text style={{fontSize:15,color:'#555'}}> 5 x 3 m</Text>
                     </View>
                  </View>
                  <View style={{flexDirection:'row',paddingVertical:10}}>
                     <View style={{flex:2}}>
                        <Text style={{fontSize:15,color:'#555',fontWeight:'bold'}}>fasilitas kos dan kamar</Text>
                     </View>
                     <View style={{flex:1,alignItems:'center',paddingRight:10}}>
                        <Text style={{color:'green',fontSize:15,fontWeight:'bold'}}>lainya</Text>
                     </View>
                  </View>

                  {/* rating */}
                  <View style={{flexDirection:'row',flexWrap:'wrap',paddingTop:5}}>
                     <View style={{width:'50%',marginBottom:5}}>
                        <Text style={{fontSize:15,color:'#555'}}>kebersihan</Text>
                        <View style={{flexDirection:'row'}}>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                        </View>
                     </View>
                     <View style={{width:'50%',marginBottom:5}}>
                        <Text style={{fontSize:15,color:'#555'}}>kenyamanan</Text>
                        <View style={{flexDirection:'row'}}>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                        </View>
                     </View>
                     <View style={{width:'50%',marginBottom:5}}>
                        <Text style={{fontSize:15,color:'#555'}}>keamanan</Text>
                        <View style={{flexDirection:'row'}}>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                        </View>
                     </View>
                     <View style={{width:'50%',marginBottom:5}}>
                        <Text style={{fontSize:15,color:'#555'}}>harga</Text>
                        <View style={{flexDirection:'row'}}>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                        </View>
                     </View>
                     <View style={{width:'50%',marginBottom:5}}>
                        <Text style={{fontSize:15,color:'#555'}}>fasilitas kamar</Text>
                        <View style={{flexDirection:'row'}}>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                        </View>
                     </View>
                     <View style={{width:'50%',marginBottom:5}}>
                        <Text style={{fontSize:15,color:'#555'}}>fasilitas umum</Text>
                        <View style={{flexDirection:'row'}}>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                           <Icon style={{color:'#0397d5'}} type="ionicon" name="star"/>
                        </View>
                     </View>
                  </View>

                  <View style={{paddingVertical:5}}>
                     <Text style={{fontWeight:'bold',fontSize:15,color:'#555'}}>veryfikasi</Text>
                  </View>
                  <View style={{flexDirection:'column',paddingBottom:10}}>
                     <View><Text style={{fontSize:15,color:'#555'}}>Kos belum di kunjungi</Text></View>
                     <View><Text style={{fontSize:15,color:'#555'}}>Telephon sudah terverifikasi</Text></View>
                  </View>
                  <View style={{backgroundColor:'#ddd',paddingVertical:10,flexDirection:'row',paddingHorizontal:5}}>
                     <View style={{flex:2}}>
                        <Text style={{fontSize:15,color:'#555'}}>Ada data yang kurang tepat atau kendala lainya dengan kos?</Text>
                     </View>
                     <View style={{flex:1,alignItems:'center'}}>
                        <Text style={{color:'red',fontWeight:'bold'}}>Laporkan</Text>
                     </View>
                  </View>

                  {/* product lain */}
                  <View style={{paddingVertical:15}}>
                     <Text style={{fontWeight:'bold',fontSize:16}}>Kos menarik lainya</Text>
                  </View>

                  <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                     <View style={{height:150,width:'50%',padding:5}}>
                        <View style={{backgroundColor:'red',flex:1,borderRadius:7}}>
                           <Image style={{width:'100%',height: '100%',borderRadius:7}} source={require('../img/room.jpg')}/>
                           <Text style={{position:'absolute',fontSize:15,fontWeight:'bold',color:'#f1f1f1',bottom:0,paddingLeft:3}}>Kos murah Bandung</Text>
                        </View>
                     </View>
                     <View style={{height:150,width:'50%',padding:5}}>
                        <View style={{backgroundColor:'red',flex:1,borderRadius:7}}>
                           <Image style={{width:'100%',height: '100%',borderRadius:7}} source={require('../img/room.jpg')}/>
                           <Text style={{position:'absolute',fontSize:15,fontWeight:'bold',color:'#f1f1f1',bottom:0,paddingLeft:3}}>Kos murah Jakarta</Text>
                        </View>
                     </View>
                     <View style={{height:150,width:'50%',padding:5}}>
                        <View style={{backgroundColor:'red',flex:1,borderRadius:7}}>
                           <Image style={{width:'100%',height: '100%',borderRadius:7}} source={require('../img/room.jpg')}/>
                           <Text style={{position:'absolute',fontSize:15,fontWeight:'bold',color:'#f1f1f1',bottom:0,paddingLeft:3}}>Kos murah Bogor</Text>
                        </View>
                     </View>
                     
                  </View>

               </View>
            </ScrollView>

            {/* bootom */}
            <View style={{height:50,marginHorizontal:2,marginBottom:1,flexDirection:'row'}}>
               <View style={{flex:1,padding:2}}>
                  <TouchableOpacity onPress={()=> alert('tes')}
                  style={{backgroundColor:'#fff',borderRadius:5,alignItems:'center',justifyContent:'center',borderWidth:2,borderColor:'#0397d5'}}
                  >
                     <Text style={{fontSize:16,color:'#545454',marginVertical:10}}>Chat</Text>
                  </TouchableOpacity>
               </View>
               <View style={{flex:2,padding:2}}>
                  <TouchableOpacity onPress={()=> alert('tes')}
                  style={{backgroundColor:'#0397d5',borderRadius:5,alignItems:'center',justifyContent:'center',borderWidth:2,borderColor:'#0397d5'}}
                  >
                     <Text style={{fontSize:16,color:'#ddd',marginVertical:10}}>Booking Sekarang</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      )
   }
}