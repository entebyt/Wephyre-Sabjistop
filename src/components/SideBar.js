import React from 'react'
import {
    View, Text, TouchableHighlight, StyleSheet, StatusBar, ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { primaryColor, statusBarColor,secondaryColor } from '../constants/colors'
import { Button } from 'native-base';
const sideBarItemsClosed = require('../constants/sideBarItemsClosed')
const sideBarItemsOpened = require('../constants/sideBarItemsOpened')
export default class SideBar extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            categoriesOpen: false,
            loggedin:false
            // State that holds the value whether the Catergories section is open or not
        }
    }
    navigate(item) {
        if (item.route == 'Categories') {
            // If User Presses Categories then Open / Close Categories
            this.setState({ categoriesOpen: !this.state.categoriesOpen })
        } else {    
            this.props.navigation.navigate(item.route)
        }
    }
    render() {
        // If Categories Section is Closed then render this
        if (!this.state.categoriesOpen) {
            return (
                <View
                    style={styles.container}
                >   
                    <StatusBar
                        backgroundColor={statusBarColor}
                    />
                    <View
                        style={styles.header}
                    >
                      {
                        this.state.loggedin ?
                        <View >
                            <Text style={styles.headertext}>
                               Please Login to continue
                            </Text>
                            <Button block style={styles.headerbutton} onPress={()=>{
                            this.setState({loggedin:false})
                            }}>
                                <Text style={styles.headerbuttontext}>Login</Text>
                            </Button>
                        </View>
                    :
                        <View >
                            <Text style={styles.headertext}>
                                Hello, Dhruv
                            </Text>
                            
                            <Button block style={styles.headerbutton} onPress={()=>{
                            this.setState({loggedin:true})
                            }}>
                            <Text style={styles.headerbuttontext}>Logout</Text>
                            </Button>
                        </View>
                    }
                       
                    
                    </View>
                    <View
                        style={styles.body}
                    >
                        <ScrollView>
                            {
                                sideBarItemsClosed.map((item, index) => {
                                    return (
                                        <TouchableHighlight
                                            key={index}
                                            onPress={() => this.navigate(item)}
                                        >
                                            <View
                                                style={styles.listItem}
                                            >
                                                <Icon
                                                    color="#000"
                                                    size={25}
                                                    name={item.icon}
                                                    style={styles.listItemIcon}
                                                />
                                                <Text
                                                    style={styles.listItemText}
                                                >
                                                    {item.name}
                                                </Text>
                                                {
                                                    item.name == 'Categories' ? 
                                                        <Icon 
                                                            name="ios-arrow-forward"
                                                        /> 
                                                    : 
                                                        null
                                                }
                                            </View>
                                        </TouchableHighlight>
                                    )}
                                )
                            }
                        </ScrollView>
                    </View>
                </View>
            )
        } else {
            return (
                <View
                    style={styles.container}
                >   
                    <StatusBar
                        backgroundColor={statusBarColor}
                    />
                    <View
                        style={styles.header}
                    >
                    </View>
                    <View
                        style={styles.body}
                    >
                    
                        <ScrollView>
                            {
                                sideBarItemsOpened.map((item, index) => {
                                    return (
                                        <TouchableHighlight
                                            key={index}
                                            onPress={() => this.navigate(item)}
                                        >
                                            <View
                                                style={styles.listItem}
                                            >
                                                <Icon
                                                    color="#000"
                                                    size={25}
                                                    name={item.icon}
                                                    style={styles.listItemIcon}
                                                />
                                                <Text
                                                    style={styles.listItemText}
                                                >
                                                    {item.name}
                                                </Text>
                                                {
                                                    item.name == 'Categories' ? 
                                                        <Icon 
                                                            name="ios-arrow-forward"
                                                        /> 
                                                    : 
                                                        null
                                                }
                                            </View>
                                        </TouchableHighlight>
                                    )}
                                )
                            }
                        </ScrollView>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor:"#dbdfff"
    },
    header: {
        flex: 2,
        justifyContent:"center",
        alignItems:"center"  
    },
    headertext:{
        fontWeight:"bold",
        fontSize:20
    },
    headerbuttontext:{
        color:"#FFF"
    },
    headerbutton:{
    backgroundColor:secondaryColor,
    marginTop:10
    },
    body: {
        flex: 8,
    },
    listItem: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemText: {
        color: '#000',
        paddingHorizontal: '5%',
    },
    listItemIcon: {
        paddingHorizontal: '5%',
    }
})