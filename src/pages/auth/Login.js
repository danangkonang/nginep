import React, { Component } from 'react'
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput,
} from 'react-native'

import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
const KEY = '@@KEY'
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            users: []
        }
    }

    login = async() => {
        axios({
            method: 'post',
            url: 'https://api-kos-express.herokuapp.com/user/login',
            data:{
                email:this.state.email,
                password:this.state.password
            }
        }).then((response)=>{
            // const dataUser = response.data
            this.storeData(response.data)
            // this.props.navigation.navigate('home')
            
            // console.log(JSON.stringify(dataUser))
            // console.log(dataUser)
            
        })
    }

    storeData = async (dataUser) => {
        // const userId = String(userData.id)
        try {
            await AsyncStorage.setItem(KEY, JSON.stringify(dataUser));
        } 
        catch (e) {
            console.warn(e);
        }
        this.props.navigation.navigate('home')
    }
    render() {
        return (
            <KeyboardAvoidingView style={{flex:1}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#0397d5',paddingHorizontal:40}}>
                <Text style={{marginBottom:60,color:'#ddd',fontSize:24,fontWeight:'bold'}}>MASUK</Text>

                    <TextInput style={{alignSelf:'stretch',padding:16,marginBottom:20,backgroundColor:'#fff',borderRadius:4,borderColor:'#ddd',borderWidth:2}} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Email'
                    placeholderTextColor='#545454'
                    onChangeText={(email)=> this.setState({email})}
                    value={this.state.email}
                    />

                    <TextInput style={{alignSelf:'stretch',padding:16,marginBottom:20,backgroundColor:'#fff',borderRadius:4,borderColor:'#ddd',borderWidth:2}}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Password'
                    placeholderTextColor='#545454'
                    secureTextEntry={true}
                    onChangeText={(password)=>this.setState({password})}
                    value={this.state.password}
                    />

                    <TouchableOpacity 
                    style={{alignSelf:'stretch',backgroundColor:"#545454",padding:20,alignItems:'center',borderRadius:4,borderColor:'#ddd',borderWidth:2}} onPress={this.login}><Text style={{fontWeight:'bold',color:'#ddd'}}>MASUK</Text></TouchableOpacity>

                    <View style={{flexDirection:'row',marginTop:60,alignItems:'flex-end'}}>
                        <Text style={{color:'#ddd'}}>Belum mempunyai akun? </Text>
                            <TouchableOpacity onPress={() =>this.props.navigation.navigate('register')}>
                                <Text style={{color:'#ddd',fontSize:17,fontWeight:'bold'}}> Daftar</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

