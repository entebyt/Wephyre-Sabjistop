import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, AsyncStorage, StatusBar, ActivityIndicator, ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { primaryColor, statusBarColor, secondaryColor } from '../constants/colors'
class PaymentOptions extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            // States that hold Values 
            totalAmount: 1234,
            selectedAddress: '',
            totalItems: 0,
            items: '',
            isLoading: false, 
            // Boolean Values which hold the values which type of payment is selected
            debitCardSelected: false, 
            creditCardSelected: false,
            codSelected: false
        }
    }
    order() {
        ToastAndroid.show('Order Successful!', ToastAndroid.SHORT)
        this.props.navigation.navigate('OrderConfirmed')
    }
    render() {
        return(
            <View
                style={styles.container}
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
                            Payment Options
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 9,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#FFF',
                            height: 80,
                            paddingHorizontal: '5%',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        elevation={3}
                    >
                        <Text
                            style={{
                                color: '#000'
                            }}
                        >
                            Total Amount Payable:
                        </Text>
                        <Text
                            style={{
                                color: '#000'
                            }}
                        >
                            {'\u20B9'}{this.state.totalAmount}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.setState({ codSelected: !this.state.codSelected, debitCardSelected: false, creditCardSelected: false })}
                        style={{
                            marginTop: '5%',
                            padding: '5%',
                            height: 20,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: 20,
                                backgroundColor: '#FFF'
                            }}
                        >
                            <Icon
                                name={this.state.codSelected ? "ios-radio-button-on" : "ios-radio-button-off"}
                                size={20}
                            />
                            <Text
                                style={{
                                    color: '#000',
                                    paddingLeft: '5%'
                                }}
                            >
                                Cash on Delivery
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ debitCardSelected: !this.state.debitCardSelected, creditCardSelected: false, codSelected: false })}
                        style={{
                            marginTop: '5%',
                            padding: '5%',
                            height: 20,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: 20,
                                backgroundColor: '#FFF'
                            }}
                        >
                            <Icon
                                name={this.state.debitCardSelected ? "ios-radio-button-on" : "ios-radio-button-off"}
                                size={20}
                            />
                            <Text
                                style={{
                                    color: '#000',
                                    paddingLeft: '5%'
                                }}
                            >
                                Debit Card
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ creditCardSelected: !this.state.creditCardSelected, debitCardSelected: false, codSelected: false })}
                        style={{
                            marginTop: '5%',
                            padding: '5%',
                            height: 20,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: '#FFF',
                                height: 20
                            }}
                        >
                            <Icon
                                name={this.state.creditCardSelected ? "ios-radio-button-on" : "ios-radio-button-off"}
                                size={20}
                            />
                            <Text
                                style={{
                                    color: '#000',
                                    paddingLeft: '5%'
                                }}
                            >
                                Credit Card
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: secondaryColor,
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: '90%',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            flex: 1,
                            paddingHorizontal: '10%',
                        }}
                        onPress={() => this.order()}
                    >
                        <Text
                            style={{
                                color: '#FFF',
                                fontSize: 20,
                                flex: 1,
                                textAlign: 'center'
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

export default PaymentOptions
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})