import React, { Component } from 'react'
import { 
   createAppContainer, 
   createStackNavigator,
} from 'react-navigation'

import Home from './pages/Home'
import IconHomeLeft from './components/IconHomeLeft'
import IconHomeRight from './components/IconHomeRight'
import Login from './pages/auth/Login'
import Registrasi from './pages/auth/Registrasi'
import User from './pages/User';
// import Chat from './pages/Chat';
// import Notif from './pages/Notif';
import ListRoom from './pages/ListRoom'
// import AddAds from './pages/Upload'
import Detail from './pages/Detail'
import Upload from './pages/Upload'

const AppNavigator = createStackNavigator({
    
    home: {
        screen : Home,
        navigationOptions:({ navigation }) => {
            return {
                headerLeft: (
                    <IconHomeLeft/>
                ),
                headerRight: (
                    <IconHomeRight/>
				 ),
            }
        }
    },
    login: {
        screen : Login,
        navigationOptions:{
            header:null
        }
    },
    register: {
        screen : Registrasi,
        navigationOptions:{
            header:null
        }
    },
    user: {
        screen : User,
        navigationOptions:{
            header:null
        }
    },
    upload: {
        screen : Upload,
        navigationOptions:{
            header:null
        }
    },
    listRoom: {
        screen : ListRoom,
        navigationOptions:{
            header:null
        }
    },
    detail: {
        screen : Detail,
        navigationOptions:{
            header:null
        }
    }
   //  chat: {
   //      screen : Chat,
   //      navigationOptions:{
   //          headerTintColor: '#555',
   //      }
   //  },
   //  notif: {
   //      screen : Notif,
   //      // navigationOptions:{
   //      //     header:null
   //      // }
   //  },

})

const Routes = createAppContainer(AppNavigator);
export default Routes;