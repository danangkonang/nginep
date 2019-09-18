import React, { Component } from 'react';  
import { 
   View
} from 'react-native';  
import AsyncStorage from '@react-native-community/async-storage'
import Popular from '../components/Popular'
import ButtonMenu from '../components/ButtonMenu'
import Carousel from '../components/Carousel'

export default class Home extends Component {  
   constructor(props){
      super(props)
      this.state = {
         users: [],
         token: null,
         userId: null
       }
   }
   
    componentWillMount(){
      getData = async () => {
         try {
           const value = await AsyncStorage.getItem('token')
           if(value !== null) {
             console.log(value)
           }
         } catch(e) {
           console.log(e)
         }

       }

      //  AsyncStorage.getItem('token', (error, result) => {
      //    if (result) {
      //       this.setState({token: result})
      //    }
      // })
      //  AsyncStorage.getItem('id', (error, result) => {
      //    if (result) {
      //       this.setState({userId: result})
      //    }
      // })

      // if(this.state.token !== null){
      //    this.props.dispatch(getUsersPending())
      //    axios.get('http://localhost:3000/user/i/'+this.state.userId)
      //    .then((response)=>{
      //       const users = response.data
      //       this.props.dispatch(getUsers(users))
      //       console.log(response.data)
      //    }).catch((error)=>{
      //       console.log('error')
      //    })
      // }
   }

   render() {  
      return (  
            <View style={{ flex: 1, backgroundColor:'#ddd'}}>
                  <Carousel/>
                  <Popular/>
                  <ButtonMenu content={this.props.navigation}/>
            </View>  
      );  
   }  
}

