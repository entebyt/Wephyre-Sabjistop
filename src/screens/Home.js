import React from 'react'
import {
    View, StyleSheet, Text, TextInput, StatusBar, TouchableHighlight,Image, ScrollView, TouchableOpacity,
    FlatList    
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Iconss from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/SimpleLineIcons'
import Swiper from 'react-native-swiper'
import { statusBarColor, primaryColor, secondaryColor } from '../constants/colors'
import HorizontalListHomePage from '../components/HorizontalListHomePage';
import { Thumbnail, Input,Item,Picker } from 'native-base';
export default class Home extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            // Hardcoded Values
            sliderImages: [
                require('../../pic0.jpg'),
                require('../../pic1.jpg'),
                require('../../pic2.jpg'),
                require('../../pic3.jpg'),
                require('../../pic4.jpg'),
                require('../../pic5.jpg'),
                require('../../pic6.jpg'),
            ],
            show:true,
            selected2: undefined,
            items: [
                {
                    img: require('../../pic11.jpg'),
                    name: 'Tomato',
                    hindi: 'टमाटर',
                    discount: '5% Off',
                    oldPrice: '149',
                    newPrice: '145'
                },
                {
                    img: require('../../pic11.jpg'),
                    name: 'Cabbage',
                    hindi: 'गोभी',
                    discount: '5% Off',
                    oldPrice: '189',
                    newPrice: '140'
                },
                {
                    img: require('../../pic11.jpg'),
                    name: 'Grapes',
                    hindi: 'अंगूर',
                    discount: '12% Off',
                    oldPrice: '500',
                    newPrice: '300'
                },
                {
                    img: require('../../pic11.jpg'),
                    name: 'Spinach',
                    hindi: 'पालक',
                    discount: '12% Off',
                    oldPrice: '500',
                    newPrice: '300'
                },
                
            ]
        }
    }

    openDrawer() {
        this.props.navigation.openDrawer()
    }
    gotoCart() {
        this.props.navigation.navigate('Cart')
    }
    onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
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
                          <View style={{flexDirection:'row'}}>
                             <Icon
                            name="ios-menu"
                            color="black"
                            size={35}
                            onPress={() => this.openDrawer()}
                        />
                        </View>
                        {/* <Icon
                            name="ios-search"
                            color="black"
                            size={30}
                        /> */}

{this.state.show ?      <View style={{ flexDirection: "row" }}>
                        
                            <Item picker style={{ width: 150 }}>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{ width: undefined }}
                                    name="Please select location ?"
                                    placeholder="Please select location ?"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="Choose location ?" value="key0" />
                                    <Picker.Item label="India" value="key1" />
                                    <Picker.Item label="Mumbai" value="key2" />
                                </Picker>
                            </Item>
                        </View> : 
                        <View>
                            <Item regular style={{ width: 180 }}>
                            <Input placeholder='Search' />
                            </Item>
                        </View> }
                       
                        <Text style={{letterSpacing:3}}>
                        {this.state.show ? 
                        <Icons 
                             name="magnifier" color="black" size={30} 
                            onPress={()=>this.setState({show:false})} />
                           : 
                        <Icons
                            name="close" color="black" size={30} 
                           onPress={()=>this.setState({show:true})} />}
                        <Icons
                            name="bag"
                            color="black"
                            size={30}
                            onPress={() => this.gotoCart()}
                        />
                        <Icons
                        name="heart"
                        color="black"
                        size={30}
                        onPress={() => this.gotoCart()}
                    /></Text>
                      
                        
                    </View>
                </View>
              
                {/* */}
             
                <ScrollView>
                <Image  
                style={{
                    width:"100%"
                    ,height:200
                     }} 
                    source={require('../../pics.jpg')} />
                    <HorizontalListHomePage 
                        heading={'Fresh Arrivals'} 
                        items={this.state.items}
                        navigation={this.props.navigation}
                    />
                    <HorizontalListHomePage 
                        heading={'Most Selling Vegetables'} 
                        items={this.state.items}
                        navigation={this.props.navigation}
                    />
                    <HorizontalListHomePage 
                        heading={'Most Selling Fruits'} 
                        items={this.state.items}
                        navigation={this.props.navigation}
                    />
                    <HorizontalListHomePage 
                        heading={'Most Selling Dairy products'} 
                        items={this.state.items}
                        navigation={this.props.navigation}
                    />
                    <HorizontalListHomePage 
                        heading={'Most Selling English vegetables'} 
                        items={this.state.items}
                        navigation={this.props.navigation}
                    />
                    {/* <HorizontalListHomePage 
                        heading={'Most Selling Juice'} 
                        items={this.state.items}
                        navigation={this.props.navigation}
                    />
                    <HorizontalListHomePage 
                        heading={'Most Selling Dairy Products'} 
                        items={this.state.items}
                        navigation={this.props.navigation}
                    /> */}
                </ScrollView>
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
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin:3
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