import React from 'react'
import {
    View, StyleSheet, Text, TextInput, StatusBar, TouchableHighlight, Image, ScrollView, TouchableOpacity,
    FlatList    
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/Entypo'
import Swiper from 'react-native-swiper'
import { statusBarColor, primaryColor, secondaryColor } from '../constants/colors'
import HorizontalListHomePage from '../components/HorizontalListHomePage';
import { Thumbnail } from 'native-base';
export default class Home extends React.Component {
    constructor(props) {
        super(props) 
    }
    openDrawer() {
        this.props.navigation.openDrawer()
    }
    gotoCart() {
        this.props.navigation.navigate('Cart')
    }
    render() {
        return (
            <View
                style={styles.container}
            >
                <StatusBar
                    backgroundColor={statusBarColor}
                />
                <View
                    style={styles.header}
                    elevation={5}
                >
                    <View
                        style={styles.headerLogo}
                    >    
                        <Thumbnail small  source={require('../../pics.jpg')} />
                      
                        {/* <Icon
                            name="ios-search"
                            color="black"
                            size={30}
                        /> */}
                        <View style={{flexDirection:"row",alignItems:"flex-end"}}>
                        <Text>
                        <Icons
                            name="shopping-bag"
                            color="black"
                            size={30}
                            onPress={() => this.gotoCart()}
                        />     <Icon
                            name="ios-menu"
                            color="black"
                            size={35}
                            onPress={() => this.openDrawer()}
                        />
                        </Text>
                        </View>
                        
                    </View>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 60,
        backgroundColor: primaryColor,
    },
    headerLogo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
       
    },
    headerText: {
        fontSize: 24,
        color: 'black'
    },
    sliderImagesView: {
        height: 200,
        width: '100%',
        marginTop: 15,
    },
})