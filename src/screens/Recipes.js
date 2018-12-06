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

export default class Recipes extends React.Component {
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
                        Recipes
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
                    <Text
                        style={styles.bodyText}
                    >
                        Coming Soon!
                    </Text>
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
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: "black",
        fontSize: 24,
    },
    bodyText: {
        color: '#000',
        fontSize: 20
    }
})