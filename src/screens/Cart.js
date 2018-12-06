import React from 'react'

import {
    View, StyleSheet, Text, Image, TouchableOpacity, StatusBar, FlatList, ScrollView,
    Picker
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { primaryColor, statusBarColor, secondaryColor } from '../constants/colors'

export default class Cart extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            // Hardcoded Items
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
                    img: require('../../pic12.jpg'),
                    name: 'Cabbage',
                    discount: '5% Off',
                    oldPrice: '189',
                    newPrice: '140'
                },
            ]
        }
    }
    gotoSelectAddress() {
        this.props.navigation.navigate('SelectAddress')
    }
    // The Invoice Details Component to be renderes as Header for Flatlist
    InvoiceDetails = () => {
        return (
            <View
                style={{
                    backgroundColor: '#FFF',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: '100%',
                    padding: '5%',
                    paddingBottom: '15%',
                    justifyContent: 'space-around'
                }}
                elevation={2}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={styles.listItemTextHeading}
                    >
                        Sub Total:
                    </Text>
                    <Text
                        style={styles.listItemTextHeading}
                    >
                        {'\u20B9'}351
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={styles.listItemTextHeading}
                    >
                        Promotion Discount
                    </Text>
                    <Text
                        style={styles.listItemTextHeading}
                    >
                        {'\u20B9'}0
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={styles.listItemTextHeading}
                    >
                        Net Amount:
                    </Text>
                    <Text
                        style={styles.listItemTextHeading}
                    >
                        {'\u20B9'}351
                    </Text>
                </View>
            </View>
        )
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
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <Text
                        style={styles.headerText}
                    >
                        Cart
                    </Text>
                    <Icon
                        name="ios-search"
                        size={35}
                        color={"black"}
                    />
                </View>
                <View
                    style={styles.body}
                >
                    <FlatList
                        data={this.state.items}
                        ListHeaderComponent={this.InvoiceDetails}
                        renderItem={({ item }) =>
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
                                    <Text
                                        style={styles.listItemTextHeading}
                                    >
                                        1 KG
                                    </Text>
                                    <Text
                                        style={styles.listItemTextHeading}
                                    >
                                        Price: {'\t'}{'\u20B9'}35
                                    </Text>
                                    <Text
                                        style={styles.listItemTextHeading}
                                    >
                                        Total Price: {'\t'}{'\u20B9'}35
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Text
                                            style={styles.listItemTextHeading}
                                        >
                                            Qty:
                                        </Text>
                                        <Picker
                                            style={{
                                                width: '80%'
                                            }}
                                        >
                                            <Picker.Item label="1"/>
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View
                    style={{
                        position: 'absolute',
                        backgroundColor: secondaryColor,
                        width: '100%',
                        padding: '5%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: '90%',
                        left: '0%'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            width: '100%',
                            // justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => this.gotoSelectAddress()}
                    >
                        <Text
                            style={{
                                color: '#FFF',
                                fontSize: 24,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            Proceed 
                        </Text>
                    </TouchableOpacity>
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
        flex: 9,
        marginBottom: '10%',
    },
    headerText: {
        color: 'black',
        fontSize: 24,
    },
    listItem: {
        height: 180,
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 5,
        paddingVertical: 10,
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