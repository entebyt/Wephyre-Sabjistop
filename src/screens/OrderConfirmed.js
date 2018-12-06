import React from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { secondaryColor, statusBarColor } from '../constants/colors';

export default class OrderConfirmed extends React.Component {
    gotoHome() {
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <StatusBar
					backgroundColor={statusBarColor}
				/>
                <Icon
                    name="ios-checkmark-circle"
                    color={secondaryColor}
                    size={70}
                />
                <Text
                    style={{
                        color: secondaryColor,
                        fontSize: 30,
                        paddingVertical: 20
                    }}
                >
                    Order Placed!
                </Text>
                <Text
                    style={{
                        color: secondaryColor,
                        fontSize: 30,
                        paddingVertical: 20
                    }}
                >
                    Order ID is 10213
                </Text>
                <Text
                    style={{
                        color: secondaryColor,
                        fontSize: 30,
                        paddingVertical: 20,
                        textAlign: 'center'
                    }}
                >
                    Total Number of {'\n'} Items: 6
                </Text>
                <TouchableOpacity
                    style={{
                        height: 60,
                        width: '80%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: secondaryColor
                    }}
                    onPress={() => this.gotoHome()}
                >
                    <Text
                        style={{
                            color: '#FFF'
                        }}
                    >
                        Shop More..
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}