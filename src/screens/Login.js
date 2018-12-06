import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, AsyncStorage, StatusBar, ActivityIndicator } from 'react-native'
import { primaryColor, secondaryColor, statusBarColor } from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons'
import SplashScreen from 'react-native-splash-screen'
class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			number: '',
			password: '',
			isLoading: false,
			showPassword: false
		}
	}
	componentWillMount() {
		SplashScreen.hide();
	}
	gotoSignUp() {
		this.props.navigation.navigate('SignUp')
	}
	async login() {
		this.props.navigation.navigate('DrawerRouter')
	}
	forgotPassword() {
		this.props.navigation.navigate('ForgotPassword')
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
		}
		return (
			<TouchableWithoutFeedback
				onPress={() => Keyboard.dismiss()}
			>
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
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Icon
							name="md-basket"
							size={80}
							color={primaryColor}
						/>
					</View>
					<View
						style={{
							flex: 2,
							padding: 10
						}}
					>
						<Text>
							Mobile Number
						</Text>
						<TextInput
							keyboardType="numeric"
							value={this.state.number}
							maxLength={10}
							onChangeText={(number) => 
								this.setState({ number })
							}
							returnKeyType="next"
							onSubmitEditing={() => this.password.focus()}
						/>
						<Text
							style={{
								paddingTop: 15
							}}
						>
							Password
						</Text>
						<TextInput
							secureTextEntry={!this.state.showPassword}
							value={this.state.password}
							onChangeText={(password) => this.setState({ password })}
							ref={(password) => this.password = password}
						/>
						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								justifyContent: 'space-between',
							}}
						>
							<Text
								style={{
									textAlign: 'left',
									padding: 2,
									color: 'transparent'
								}}
								onPress={() => this.forgotPassword()}
							>
								Need Help?
							</Text>
							<Text
								style={{
									textAlign: 'right',
									padding: 2,
									color: secondaryColor
								}}
								onPress={() => this.setState({ showPassword: !this.state.showPassword })}
							>
								{
									!this.state.showPassword ? "Show " : "Hide " 
								}
								Password
							</Text>
						</View>
						<TouchableOpacity
							style={{
								backgroundColor: secondaryColor,
								padding: 15,
								width: '80%',
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'center',
								marginTop: 20
							}}
							onPress={() => this.login()}
						>
							<Text
								style={{
									color: '#FFF'
								}}
							>
								Login
							</Text>
						</TouchableOpacity>
					</View>
					<Text
						style={{
							color: secondaryColor,
							textAlign: 'center',
							marginBottom: '5%'
						}}
						onPress={() => this.gotoSignUp()}
					>
						Don't hava an account? SignUp here.
					</Text>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}
export default Login