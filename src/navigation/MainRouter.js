import * as React from "react";
import {
    createSwitchNavigator
} from 'react-navigation'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import DrawerRouter from './DrawerRouter'
import Main from '../Main'
export default MainRouter = createSwitchNavigator({
    Login: {
        screen: Login
    },
    SignUp: {
        screen: SignUp
    },
    DrawerRouter: {
        screen: DrawerRouter
    },
    // Main:{
    //     screen: Main
    // },
}, {
    initialRouteName: 'Login'
})