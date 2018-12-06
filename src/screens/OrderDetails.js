import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, StatusBar, ScrollView, Image } from 'react-native'
import { primaryColor, statusBarColor, secondaryColor } from '../constants/colors'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button } from 'native-base';
class OrderDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // HardCoded
            itemsOrdered: [
                {
                    MRP: 2000,
                    numItems: 1,
                    ProductDescription: '2KG',
                    ProductName: 'Bhujia',
                    Product_Image: require('../../pic11.jpg')
                },
            ],
            status: 'Order out for Delivery',
            orderID: '002345',
            numItems: '2',
            mobile: '9776914975',
            orderedOn: '17 Aug 2018, 18:45:34 hrs',
            Amount: '2315',
            Address: {
                Mobile: '9776914975',
                Locality: 'Andheri',
                Street: 'Kailash Pada',
                Flat: 'Gopalmath',
                Title: 'Mr.',
                Name: 'Rahul',
            }
        };
    };
    render() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <StatusBar
                    backgroundColor={statusBarColor}
                />
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: primaryColor
                    }}
                    elevation={5}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Icon
                            name="ios-arrow-round-back"
                            size={35}
                            color="black"
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </View>
                    <View
                        style={{
                            flex: 6,
                            justifyContent: 'center',
                            paddingLeft: '5%'
                        }}
                    />
                </View>
                <View
                    style={{
                        flex: 9,
                    }}
                >
                    <ScrollView>
                        <View
                            style={{
                                padding: 15,
                                justifyContent: 'space-around',
                                backgroundColor: '#FFF',
                                borderWidth: StyleSheet.hairlineWidth
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#000'
                                    }}
                                >
                                    Ordered On:
                                </Text>
                                <Text
                                    style={{
                                        color: '#000'
                                    }}
                                >
                                    {this.state.orderedOn}
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#000'
                                    }}
                                >
                                    Ordered Amount:
                                </Text>
                                <Text
                                    style={{
                                        color: '#000'
                                    }}
                                >
                                    {this.state.Amount}
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#000'
                                    }}
                                >
                                    Current Status:
                                </Text>
                                <Text
                                    style={{
                                        color: secondaryColor
                                    }}
                                >
                                    {this.state.status}
                                </Text>
                            </View>
                        </View>
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 20,
                                padding: 15
                            }}
                        >
                            Items Ordered ({this.state.numItems})
                        </Text>
                        <FlatList
                            data={this.state.itemsOrdered}
                            extraData={this.state}
                            renderItem={({ item }) => 
                                <View
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderBottomWidth: StyleSheet.hairlineWidth,
                                        padding: 10,
                                        flexDirection: 'row',
                                        width: '100%'
                                    }}
                                >
                                    <View
                                        style={{
                                            flex: 4,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Image
                                            source={item.Product_Image}
                                            style={{
                                                height: '80%',
                                                width: '80%',
                                                resizeMode: 'stretch'
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            flex: 6,
                                            justifyContent: 'space-around',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: '#000'
                                            }}
                                        >
                                            {item.ProductName}
                                        </Text>
                                        <Text
                                            style={{
                                                color: '#000'
                                            }}
                                        >
                                            {item.ProductDescription}
                                        </Text>
                                        <Text
                                            style={{
                                                color: '#000'
                                            }}
                                        >
                                            Qty: {'\t'+this.state.numItems}
                                        </Text>
                                        <Text
                                            style={{
                                                color: '#000'
                                            }}
                                        >
                                            {'\u20B9'}{item.MRP}
                                        </Text>
                                    </View>
                                </View>
                            }
                        />
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 20,
                                padding: 15
                            }}
                        >
                            To be Delivered to:
                        </Text>
                        <View
                            style={{
                                backgroundColor: '#fff',
                                padding: 10,
                                borderWidth: StyleSheet.hairlineWidth
                            }}
                        >
                            <Text
                                style={{
                                    color: '#000'
                                }}
                            >
                                {this.state.Address.Title.trim()} {this.state.Address.Name}
                            </Text>
                            <Text
                                style={{
                                    color: '#000'
                                }}
                            >
                                {this.state.Address.Flat}
                            </Text>
                            <Text
                                style={{
                                    color: '#000'
                                }}
                            >
                                {this.state.Address.Street}
                            </Text>
                            <Text
                                style={{
                                    color: '#000'
                                }}
                            >
                                {this.state.Address.Locality}
                            </Text>
                            <Text
                                style={{
                                    color: '#000'
                                }}
                            >
                                {this.state.Address.Mobile}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection:"row",
                                justifyContent:"space-between",
                                margin:20
                            }}
                        >
                        <Button full  style={{backgroundColor:secondaryColor}}>
                            <Text style={{color:primaryColor}}>
                            Return
                            </Text>
                            </Button>
                            <Button  full b style={{backgroundColor:secondaryColor}}>
                              <Text style={{color:primaryColor}}>
                                Cancel
                              </Text>
                            </Button>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    };
}

export default OrderDetails