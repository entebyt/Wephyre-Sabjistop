import React from 'react'
import {
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView,
    Keyboard,
    TouchableWithoutFeedback,
    Picker,
    TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    primaryColor, 
    secondaryColor,
    statusBarColor
} from '../constants/colors'

export default class Contact extends React.Component {
    openDrawer() {
        this.props.navigation.openDrawer()
    }
    gotoCart() {
        this.props.navigation.navigate('Cart')
    }
    closeKeyboard() {
        Keyboard.dismiss()
    }
    render() {
        return(
            <TouchableWithoutFeedback
                onPress={() => this.closeKeyboard()}
            >
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
                            name="ios-menu"
                            color={"#FFF"}
                            size={30}
                            onPress={() => this.openDrawer()}
                        />
                        <Text
                            style={styles.headerText}
                        >
                            Contact Us
                        </Text>
                        <Icon
                            name="ios-cart"
                            color={"#FFF"}
                            size={30}
                            onPress={() => this.gotoCart()}
                        />
                    </View>
                    <View
                        style={styles.body}
                    >
                        <View
                            style={styles.bodyContent}
                            elevation={2}
                        >
                            <Text
                                style={styles.bodyText}
                            >
                                Facing Problem? Write to us and we will get back to you.
                            </Text>
                            <View>
                                <Text
                                    style={styles.bodyText}
                                >
                                    Type of Problem
                                </Text>
                                <Picker
                                    style={styles.pickerStyle}
                                >
                                    <Picker.Item label="Some Problem"/>
                                </Picker>
                            </View>
                            <View>
                                <Text
                                    style={styles.bodyText}
                                >
                                    Write something about it.
                                </Text>
                                <TextInput/>
                            </View>
                            <View
                                elevation={5}
                            >
                                <TouchableOpacity
                                    style={styles.button}
                                >
                                    <Text
                                        style={styles.buttonText}
                                    >
                                        Send
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        backgroundColor: primaryColor,
        alignItems: 'center',
    },
    body: {
        flex: 9
    },
    headerText: {
        color: '#FFF',
        fontSize: 24,
        paddingHorizontal: '5%'
    },
    bodyContent: {
        padding: '5%',
        margin: '5%',
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'space-around'
    },
    bodyText: {
        color: '#000'
    },
    pickerStyle: {
        // width: '80%'
    },
    button: {
        backgroundColor: secondaryColor,
        height: 50,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF'
    }
})