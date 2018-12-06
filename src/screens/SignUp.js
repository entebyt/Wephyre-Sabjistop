import React from 'react'
import { View, StyleSheet, Text,TextInput, TouchableOpacity, AsyncStorage, TouchableWithoutFeedback, Keyboard, StatusBar, ActivityIndicator } from 'react-native'
import { primaryColor, secondaryColor, statusBarColor } from '../constants/colors';
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            name: '',
            isLoading: false,
            email: ''
        }
    }
    async SignUp() {
        this.props.navigation.navigate('DrawerRouter')
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <ActivityIndicator
                        size="large"
                    />
                </View>
            )
        }
        return (
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
            >
                <View
                    style={styles.container}
                >
                    <StatusBar
                        backgroundColor={statusBarColor}
                    />
                    <View
                        style={{
                            flex: 1.5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: primaryColor
                        }}
                        elevation={5}
                    >
                        <Text
                            style={{
                                color: '#FFF',
                                fontSize: 24
                            }}
                        >
                            Smart Shopping
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 9,
                            justifyContent: 'space-around',
                            marginVertical: '20%',
                            padding: 10
                        }}
                    >
                        <Text
                            style={{
                                marginBottom: 10
                            }}
                        >
                            Enter Your Email
                        </Text>
                        <TextInput
                            value={this.state.name}
                            onChangeText={(name) => this.setState({ name })}
                        />
                        <Text
                            style={{
                                marginBottom: 10
                            }}
                        >
                            Enter New Password
                        </Text>
                        <TextInput
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity
                            style={{
                                backgroundColor: secondaryColor,
                                paddingVertical: 10,
                                width: '80%',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 10
                            }}
                            onPress={() => this.SignUp()}
                        >
                            <Text
                                style={{
                                    color: '#FFF'
                                }}
                            >
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})