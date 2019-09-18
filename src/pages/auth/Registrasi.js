import React, { Component } from 'react'
import {
   View,
   Text,
   KeyboardAvoidingView,
   TouchableOpacity,
   TextInput
} from 'react-native'
import axios from 'axios'
export default class Registrasi extends Component {
  constructor(props){
      super(props)
      this.state={
        email:'',
        password:'',
        name:''
      }
   }

  registrasi=()=>{
   const data = {
         name: this.state.name,
         email:this.state.email,
         password:this.state.password
      }
   axios({
      method:'post',
      url: 'https://api-kos-express.herokuapp.com/user/registrasi',
      data: data
   }).then((response)=>{ 
      console.log(response)
   })
    
  }

   render() {
      return (
         <KeyboardAvoidingView style={{flex:1}}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',paddingHorizontal:40,backgroundColor:'#0397d5'}}>

                    <Text style={{marginBottom:40,color:'#ddd',fontSize:24,fontWeight:'bold'}}>DAFTAR</Text>


                    <TextInput style={{alignSelf:'stretch',padding:16,marginBottom:20,fontSize:16,backgroundColor:'#fff',borderRadius:4,borderColor:'#ddd',borderWidth:2}} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Email'
                    placeholderTextColor='#545454'
                    onChangeText={(email)=> this.setState({email})}
                    value={this.state.email}
                    />

                    <TextInput style={{alignSelf:'stretch',padding:16,marginBottom:20,fontSize:16,backgroundColor:'#fff',borderRadius:4,borderColor:'#ddd',borderWidth:2}} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Nama '
                    placeholderTextColor='#545454'
                    onChangeText={(name)=> this.setState({name})}
                    value={this.state.name}
                    />

                    <TextInput style={{alignSelf:'stretch',padding:12,marginBottom:20,fontSize:16,backgroundColor:'#fff',borderRadius:4,borderColor:'#ddd',borderWidth:2}}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Password'
                    placeholderTextColor='#545454'
                    secureTextEntry={true}
                    onChangeText={(password)=>this.setState({password})}
                    value={this.state.password}
                    />

                    <TouchableOpacity onPress={this.registrasi} style={{alignSelf:'stretch',backgroundColor:"#545454",padding:16,alignItems:'center',borderRadius:4,borderColor:'#ddd',borderWidth:2}}><Text style={{fontWeight:'bold',color:'#ddd'}}>DAFTAR</Text></TouchableOpacity>

                    <View style={{flexDirection:'row',marginTop:60,alignItems:'flex-end'}}>
                        <Text style={{color:'#ddd'}}>Sudah mempunyai akun? </Text>
                            <TouchableOpacity onPress={() =>this.props.navigation.navigate('login')}>
                                <Text style={{color:'#ddd',fontSize:17,fontWeight:'bold'}}> Masuk</Text>
                            </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
      )
   }
}