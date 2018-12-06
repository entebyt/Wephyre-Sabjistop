import React from 'react'
import {
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    primaryColor, 
    secondaryColor,
    statusBarColor
} from '../constants/colors'

export default class PrivacyPolicy extends React.Component {
    openDrawer() {
        this.props.navigation.openDrawer()
    }
    gotoCart() {
        this.props.navigation.navigate('Cart')
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
                    style={styles.header}
                    elevation={5}
                >
                    <Icon
                        name="ios-menu"
                        color={"black"}
                        size={30}
                        onPress={() => this.openDrawer()}
                    />
                    <Text
                        style={styles.headerText}
                    >
                        Privacy Policy
                    </Text>
                    <Icon
                        name="ios-cart"
                        color={"black"}
                        size={30}
                        onPress={() => this.gotoCart()}
                    />
                </View>
                <View
                    style={styles.body}
                >
                    <View
                        style={styles.bodyContent}
                        elevation={4}
                    >
                        {/* <ScrollView> */}
                            <Text
                                style={styles.bodyText}
                            >
                                Fal Sabzi ("us", "we", or "our") operates the website and the Fal Sabzi mobile application (the "Service").

                                This page informs you of our policies regarding the collection, use, and disclosure of personal data when you 
                                use our Service and the choices you have associated with that data. This Privacy Policy for Fal Sabzi is powered 
                                by FreePrivacyPolicy.com.

                                We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of 
                                information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this 
                                Privacy Policy have the same meanings as in our Terms and Conditions.
                            </Text>
                        {/* </ScrollView> */}
                    </View>
                </View>
            </View>
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
        color: 'black',
        fontSize: 24,
    },
    bodyContent: {
        padding: '5%',
        margin: '5%',
        backgroundColor: '#FFF',
        flex: 1
    },
    bodyText: {
        color: '#000'
    }
})