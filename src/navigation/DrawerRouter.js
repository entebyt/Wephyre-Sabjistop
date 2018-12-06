import * as React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Home from '../screens/Home'
import AllProducts from '../screens/AllProducts'
import ProductDetails from '../screens/ProductDetails'
import Cart from '../screens/Cart'
import SideBar from '../components/SideBar'
import SelectAddress from '../screens/SelectAddress'
import AddAddress from '../screens/AddAddress'
import PaymentOptions from '../screens/PaymentOptions'
import OrderConfirmed from '../screens/OrderConfirmed'
import Orders from '../screens/Orders';
import OrderDetails from '../screens/OrderDetails'
import PrivacyPolicy from '../screens/PrivacyPolicy'
import Terms from '../screens/Terms'
import Contact from '../screens/Contact'
import Ask from '../screens/Ask'
import Recipes from '../screens/Recipes'
export default DrawerRouter = createDrawerNavigator({
    Home: {
        screen: Home
    },
    AllProducts: {
        screen: AllProducts
    },
    ProductDetails: {
        screen: ProductDetails
    },
    Cart: {
        screen: Cart
    },
    SelectAddress: {
        screen: SelectAddress
    },
    AddAddress: {
        screen: AddAddress
    },
    PaymentOptions: {
        screen: PaymentOptions
    },
    OrderConfirmed: {
        screen: OrderConfirmed
    },
    Orders: {
        screen: Orders
    },
    OrderDetails: {
        screen: OrderDetails
    },
    PrivacyPolicy: {
        screen: PrivacyPolicy
    },
    Terms: {
        screen: Terms
    },
    Contact: {
        screen: Contact
    },
    Ask: {
        screen: Ask
    },
    Recipes: {
        screen: Recipes
    }
}, {
    initialRouteName: "Home",
    contentComponent: props => <SideBar {...props}/>
})