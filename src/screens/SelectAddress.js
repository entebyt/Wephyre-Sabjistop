import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, FlatList, StatusBar, ActivityIndicator, AsyncStorage } from  'react-native'
import { primaryColor, secondaryColor, statusBarColor } from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons'
class SelectAddress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myAddresses: [
                {
                    Type: 'HOME',
                    Title: 'Miss',
                    Name: 'Kajal',
                    Flat: 'A -305',
                    Street: 'Bhopal',
                    Locality: 'Bhopal Gali',
                }
            ],
            selected: -1,
        }
    } 
    addNewAddress() {
        this.props.navigation.navigate('AddAddress')
    }
    gotoPayment() {
        if (this.state.selected != -1) {
            let selectedAddress = this.state.myAddresses[this.state.selected]
            this.props.navigation.navigate('PaymentOptions', { selectedAddress })
        }
    }
    ListHeader = () => {
        return (
            <TouchableOpacity
                style={{
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#FFF',
                    borderBottomWidth: StyleSheet.hairlineWidth
                }}
                onPress={() => this.addNewAddress()}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Icon
                        name="ios-add-circle-outline"
                        size={25}
                        color={primaryColor}
                    />
                </View>
                <View
                    style={{
                        flex: 8,
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: '#000'
                        }}
                    >
                        Add a New Address
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    selectAddress(index) {
        this.setState({selected: index})
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
                        <Icon
                            name="ios-arrow-round-back"
                            size={30}
                            color="#FFF"
                            style={{
                                flex: 2,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                paddingLeft: '5%'
                            }}
                            onPress={() => this.props.navigation.goBack()}
                        />
                        <Text
                            style={{
                                color: '#FFF',
                                flex: 9,
                                fontSize: 24
                            }}
                        >
                            Select Address
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 9
                        }}
                    >
                        <FlatList
                            data={this.state.myAddresses}
                            ListHeaderComponent={this.ListHeader}
                            extraData={this.state}
                            renderItem={({item, index}) =>
                                <TouchableOpacity
                                    style={{
                                        height: 140,
                                        padding: 15,
                                        borderBottomWidth: StyleSheet.hairlineWidth,
                                        backgroundColor: this.state.selected == index ? secondaryColor : '#FFF'
                                    }}
                                    onPress={() => this.selectAddress(index)}
                                >
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'space-around',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: this.state.selected == index ? '#fff' : '#000',
                                                fontSize: 20,
                                                paddingVertical: 5,
                                                flex: 6
                                            }}
                                        >
                                            {item.Type}
                                        </Text>
                                        <Text
                                            style={{
                                                color: this.state.selected == index ? '#fff' : '#000',
                                            }}
                                        >
                                            {item.Title.trim()+ "\t" + item.Name}
                                        </Text>
                                        <Text
                                            style={{
                                                color: this.state.selected == index ? '#fff' : '#000',
                                            }}
                                        >
                                            {item.Flat}
                                        </Text>
                                        <Text
                                            style={{
                                                color: this.state.selected == index ? '#fff' : '#000',
                                            }}
                                        >
                                            {item.Street}
                                        </Text>
                                        <Text
                                            style={{
                                                color: this.state.selected == index ? '#fff' : '#000',
                                            }}
                                        >
                                            {item.Locality}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View
                        style={{
                            height: '10%',
                            position: 'absolute',
                            top: '90%',
                            left: '0%',
                            right: '0%',
                            bottom: '0%',
                            backgroundColor: secondaryColor,
                            opacity: this.state.selected == -1 ? 0.5 : 1
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            disabled={this.state.selected == -1 ? true : false}
                            onPress={() => this.gotoPayment()}
                        >
                            <Text
                                style={{
                                    color: '#FFF',
                                    fontSize: 20
                                }}
                            >
                                Proceed to Payment
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}

export default SelectAddress