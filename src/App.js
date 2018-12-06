import React from 'react'
import {
    View, StyleSheet
} from 'react-native'
import MainRouter from './navigation/MainRouter';
import SplashScreen from 'react-native-splash-screen'
export default class App extends React.Component {
    componentDidMount() {
        setTimeout(() => SplashScreen.hide(), 1500)
    }
    render() {
        return (
            <View
                style={
                    styles.container
                }
            >
                <MainRouter />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})