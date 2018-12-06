import React from 'react'
import {
    View, StyleSheet, Text, Image, TouchableOpacity, StatusBar, FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { primaryColor, statusBarColor, secondaryColor } from '../constants/colors'

export default class AllProducts extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            items: [
                {
                    img: require('../../pic11.jpg'),
                    name: 'Tomato',
                    discount: '5% Off',
                    oldPrice: '149',
                    newPrice: '145'
                },
                {
                    img: require('../../pic12.jpg'),
                    name: 'Cabbage',
                    discount: '5% Off',
                    oldPrice: '189',
                    newPrice: '140'
                },
                {
                    img: require('../../pic13.jpg'),
                    name: 'Grapes',
                    discount: '12% Off',
                    oldPrice: '500',
                    newPrice: '300'
                },
            ]
        }
    }
    // Navigate to Product Details
    gotoDetails() {
        this.props.navigation.navigate('ProductDetails')
    }
    // Go Back
    goBack() {
        this.props.navigation.goBack()
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
                    <Icon
                        name="ios-arrow-round-back"
                        size={35}
                        color={"black"}
                        onPress={() => this.goBack()}
                    />
                    <Text
                        style={styles.headerText}
                    >
                        {/* this.props.categoryName */} 
                        Fruits
                    </Text>
                    <Icon
                        name="ios-cart"
                        size={35}
                        color={"black"}
                    />
                </View>
                <View
                    style={styles.body}
                >
                    <FlatList
                        data={this.state.items} // Items can also come as props but it is harcoded for now.
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => this.gotoDetails()}
                            >
                                <View
                                    style={styles.listItem}
                                    elevation={2}
                                >
                                    <View
                                        style={styles.listItemImage}
                                    >
                                        <Image
                                            source={item.img}
                                            style={{
                                                height: '80%',
                                                width: '80%',
                                                resizeMode: 'stretch'
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={styles.listItemText}
                                    >
                                        <Text
                                            style={styles.listItemTextHeading}
                                        >
                                            {item.name}
                                        </Text>
                                        <View
                                            style={styles.listItemPriceView}
                                        >
                                            <Text
                                                style={styles.listItemTextOldPrice}
                                            >
                                                {'\u20B9'}{item.oldPrice}
                                            </Text>
                                            <Text
                                                style={styles.listItemTextNewPrice}
                                            >
                                                {'\u20B9'}{item.newPrice}
                                            </Text>
                                        </View>
                                        <TouchableOpacity
                                            style={styles.listItemButton}
                                        >
                                            <Text
                                                style={styles.listItemButtonText}
                                            >
                                                Add to Cart
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
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
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: primaryColor,
        flexDirection: 'row',
        paddingHorizontal: '5%',
    },
    body: {
        flex: 9
    },
    headerText: {
        color: 'black',
        fontSize: 24,
    },
    listItem: {
        height: 150,
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 5,
    },
    listItemImage: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listItemText: {
        flex: 6,
        justifyContent: 'space-around',
        paddingHorizontal: '5%',
    },
    listItemTextHeading: {
        color: '#000',
        fontSize: 18
    },
    listItemPriceView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    listItemButton: {
        height: 40,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: secondaryColor,
    },
    listItemButtonText: {
        color: '#FFF'
    },
    listItemTextOldPrice: {
        color: '#000',
        fontSize: 16,
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    },
    listItemTextNewPrice: {
        color: '#F00',
        fontSize: 16,
    }
})