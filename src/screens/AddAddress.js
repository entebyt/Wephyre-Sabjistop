import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, StatusBar, ActivityIndicator, ScrollView } from 'react-native'
import { primaryColor, statusBarColor, secondaryColor } from '../constants/colors'
import Icon from 'react-native-vector-icons/Ionicons'
const title = [
    "Mr",
    "Mrs",
    "Miss"
]
class AddAddress extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            // States to hold the values
            mrSelected: false,
            mrsSelected: false,
            missSelected: false,
            homeSelected: false,
            officeSelected: false,
            name: '',
            title: '',
            flat:  '',
            street:  '',
            locality:  '',
            type:  '',
            isLoading: false
        }
    }
    // Function to choose what to render i.e. Should Mr. be Selected or Unselected
    renderIcon(itemName) {
        switch(itemName) {
            case "Mr" : {
                if (this.state.mrSelected) {
                    return (
                        <Icon
                            name="ios-checkmark-circle"
                            color={primaryColor}
                            size={20}
                        />
                    )
                } else {
                    return (
                        <Icon
                            name="ios-radio-button-off"
                            color={primaryColor}
                            size={20}
                        />
                    )
                }
            }
            case "Mrs" : {
                if (this.state.mrsSelected) {
                    return (
                        <Icon
                            name="ios-checkmark-circle"
                            color={primaryColor}
                            size={20}
                        />
                    )
                } else {
                    return (
                        <Icon
                            name="ios-radio-button-off"
                            color={primaryColor}
                            size={20}
                        />
                    )
                }
            }
            case "Miss" : {
                if (this.state.missSelected) {
                    return (
                        <Icon
                            name="ios-checkmark-circle"
                            color={primaryColor}
                            size={20}
                        />
                    )
                } else {
                    return (
                        <Icon
                            name="ios-radio-button-off"
                            color={primaryColor}
                            size={20}
                        />
                    )
                }
            }
        }
    }
    // Select Something from Mr, Mrs..
    selectTitle(title) {
        switch(title) {
            case "Mr" : {
                this.setState({ mrSelected: true, mrsSelected: false, missSelected: false })
                this.setState({ title: "Mr" })
                break
            }
            case "Mrs" : {
                this.setState({ mrSelected: false, mrsSelected: true, missSelected: false })
                this.setState({ title: "Mrs" })
                break
            }
            case "Miss" : {
                this.setState({ mrSelected: false, mrsSelected: false, missSelected: true })
                this.setState({ title: "Miss" })
                break
            }
        }
    } 
    // Select type of Address
    selectTypeOfAddress(type) {
        if (type == "Home") {
            this.setState({ homeSelected: true, officeSelected: false})
            this.setState({ type: "Home" })
        } else {
            this.setState({ homeSelected: false, officeSelected: true})
            this.setState({ type: "Office" })
        }
    }
    // Function opens Alert Box and asks User whether to save the address or not
    saveAddress() {
        Alert.alert("Save Address", "Do you want to save the Address?", [
            {text: 'Yes', onPress: () => this.save()},
            {text: 'No', style: 'cancel', onPress: () => this.changeScreen()}
        ])
    }
    // Navigates to Payment Page
    changeScreen() {
        // if (this.state.backPage) {
        //     // this.props.navigation.state.params.refreshFunction()
        //     this.props.navigation.goBack()
        // } else {
            // let selectedAddress = {
            //     Type: this.state.type,
            //     Title: this.state.title,
            //     Name: this.state.name,
            //     Flat: this.state.flat,
            //     Street: this.state.street,
            //     Locality: this.state.locality,
            // }
            this.props.navigation.navigate('PaymentOptions')
        // }
    }
    // To Save Address
    async save() {
        // this.setState({ isLoading: true })
        // let success = await saveAddress(
        //     this.state.title, 
        //     this.state.name, 
        //     this.state.flat, 
        //     this.state.street, 
        //     this.state.locality, 
        //     this.state.type
        // )
        // if (success || !success) {
        //     this.setState({ isLoading: false })
            this.changeScreen()
        // }
    }
    render() {
        // Activity Indicator
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
                                color="#FFF"
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
                                    color: '#FFF',
                                    fontSize: 24
                                }}
                            >
                                Add Address
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 9,
                            padding: 15
                        }}
                    >
                        <ScrollView>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: '80%',
                                    justifyContent: 'space-around',
                                }}
                            >
                                {
                                    title.map((item, index) => {
                                        return (
                                            <TouchableOpacity
                                                key={index}
                                                onPress={() => this.selectTitle(item)}
                                            >
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    {
                                                        this.renderIcon(item)
                                                    }
                                                    <Text
                                                        style={{
                                                            paddingLeft: '5%',
                                                            fontSize: 20
                                                        }}
                                                    >
                                                        {item}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                            <Text
                                style={{
                                    paddingTop: 10
                                }}
                            >
                                Name
                            </Text>
                            <TextInput 
                                value={this.state.name}
                                onChangeText={(name) => this.setState({ name })}
                            />
                            <Text
                                style={{
                                    paddingTop: 10
                                }}
                            >
                                Flat/House/Office No.
                            </Text>
                            <TextInput 
                                value={this.state.flat}
                                onChangeText={(flat) => this.setState({ flat })}
                            />
                            <Text
                                style={{
                                    paddingTop: 10
                                }}
                            >
                                Street/Society/Office Name
                            </Text>
                            <TextInput 
                                value={this.state.street}
                                onChangeText={(street) => this.setState({ street })}
                            />
                            <Text
                                style={{
                                    paddingTop: 10
                                }}
                            >
                                Locality
                            </Text>
                            <TextInput 
                                value={this.state.locality}
                                onChangeText={(locality) => this.setState({ locality })}
                            />
                            <Text
                                style={{
                                    paddingTop: 10
                                }}
                            >
                                Type of Address
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    paddingVertical: 10,
                                    width: '50%',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: this.state.homeSelected ? primaryColor : "#FFF" ,
                                        paddingHorizontal: 15,
                                        paddingVertical: 10,
                                        borderRadius: 5,
                                        borderWidth: StyleSheet.hairlineWidth
                                    }}
                                    onPress={() => this.selectTypeOfAddress("Home")}
                                >
                                    <Text
                                        style={{
                                            color: !this.state.homeSelected ? '#000' : "#FFF" 
                                        }}
                                    >
                                        Home
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: this.state.officeSelected ? primaryColor : "#FFF" ,
                                        paddingHorizontal: 15,
                                        paddingVertical: 10,
                                        borderRadius: 5,
                                        borderWidth: StyleSheet.hairlineWidth
                                    }}
                                    onPress={() => this.selectTypeOfAddress("Office")}
                                >
                                    <Text
                                        style={{
                                            color: !this.state.officeSelected ? '#000' : "#FFF"
                                        }}
                                    >
                                        Office
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={{
                                    width: '80%',
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                    backgroundColor: secondaryColor,
                                }}
                                onPress={() => this.saveAddress()}
                            >
                                <Text
                                    style={{
                                        color: '#FFF'
                                    }}
                                >
                                    Continue
                                </Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            )
        }
    };
}

export default AddAddress