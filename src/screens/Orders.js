import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, StatusBar, ActivityIndicator, AsyncStorage, TouchableHighlight } from 'react-native'
import { primaryColor, statusBarColor, secondaryColor } from '../constants/colors'
import Icon from 'react-native-vector-icons/Ionicons'
class Orders extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            MyOrders: [
                {
                    Order_Id: '002345',
                    Amount: '2315',
                    Number_of_Items: 2,
                    Status: 'Order Out for Delivery',
                    Date_Time: '17 Aug 2018, 18:45:34 hrs'
                }
            ],
            isLoading: false,
        };
    };
    gotoOrderDetailsPage(orderDetails) {
        this.props.navigation.navigate('OrderDetails', { orderDetails })
    }
    // Rendered when Empty
    listEmptyComponent = () => {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginVertical: '20%'
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        color: '#000'
                    }}
                >
                    No Orders Yet!
                </Text>
                <View
                    elevation={5}
                    style={{
                        height: 50,
                        width: '80%',
                        backgroundColor: secondaryColor,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={{
                            flex: 1,
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: 'black'
                            }}
                        >
                            Shop Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >   
                    <ActivityIndicator
                        size="large"
                    />
                </View>
            )
        } else {
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
                        >
                            <Text
                                style={{
                                    color: 'black',
                                    fontSize: 24
                                }}
                            >
                                My Orders
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 9,
                        }}
                    >
                        {
                            this.state.MyOrders.length == 0 ? 
                                this.listEmptyComponent() :
                                <FlatList
                                    data={this.state.MyOrders}
                                    extraData={this.state}
                                    renderItem={({item}) =>
                                        <TouchableHighlight
                                            onPress={() => this.gotoOrderDetailsPage(item)}
                                        >
                                            <View
                                                style={{
                                                    height: 140,
                                                    padding: 15,
                                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                                    justifyContent: 'space-around',
                                                    backgroundColor: '#FFF'
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            color: '#000'
                                                        }}
                                                    >
                                                        Order ID:
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            color: '#000'
                                                        }}
                                                    >
                                                        {item.Order_Id}
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
                                                        style={{
                                                            color: '#000'
                                                        }}
                                                    >
                                                        Total Amount:
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            color: '#000'
                                                        }}
                                                    >
                                                        {'\u20B9'}{item.Amount}
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
                                                        style={{
                                                            color: '#000'
                                                        }}
                                                    >
                                                        Number of Items
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            color: '#000'
                                                        }}
                                                    >
                                                        {item.Number_of_Items}
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
                                                        style={{
                                                            color: '#000'
                                                        }}
                                                    >
                                                        Order Status:
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            color: '#000'
                                                        }}
                                                    >
                                                        {item.Status}
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
                                                        {item.Date_Time}
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableHighlight>
                                    }
                                    keyExtractor={(item, index) => index.toString()}
                                />
                        }
                    </View>
                </View>
            )
        }
    };
}

export default Orders