import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	Platform,
	StatusBar,
	Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { useMutation } from '@apollo/client';
import * as SecureStore from 'expo-secure-store';

import { LOGIN } from '../graphql/mutations/userMutation';

const Login = ({ navigation }) => {
	const [data, setData] = React.useState({
		email: '',
		password: '',
		check_textInputChange: false,
		secureTextEntry: true,
		isValidUser: true,
		isValidPassword: true,
	});

	const textInputChange = val => {
		if (val.trim().length >= 4) {
			setData({
				...data,
				email: val,
				check_textInputChange: true,
				isValidUser: true,
			});
		} else {
			setData({
				...data,
				email: val,
				check_textInputChange: false,
				isValidUser: false,
			});
		}
	};

	const handlePasswordChange = val => {
		if (val.trim().length >= 8) {
			setData({
				...data,
				password: val,
				isValidPassword: true,
			});
		} else {
			setData({
				...data,
				password: val,
				isValidPassword: false,
			});
		}
	};

	const updateSecureEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		});
	};

	const handleValidUser = val => {
		if (val.trim().length >= 4) {
			setData({
				...data,
				isValidUser: true,
			});
		} else {
			setData({
				...data,
				isValidUser: false,
			});
		}
	};

	const [userLogin, { data: loginData }] = useMutation(LOGIN);

	const login = () => {
		try {
			userLogin({
				variables: {
					email: data.email,
					password: data.password,
				},
			});

			try {
				SecureStore.setItemAsync(
					'access_token',
					loginData.userLogin.access_token
				);

				navigation.navigate('HomeTabNavigator');
			} catch (error) {
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#1F3C88" barStyle="light-content" />
			<View style={styles.header}>
				<Text style={styles.text_header}>Welcome back! </Text>
			</View>
			<Animatable.View animation="fadeInUpBig" style={styles.footer}>
				<Text style={styles.text_footer}>Email</Text>
				<View style={styles.action}>
					<FontAwesome name="user-o" size={20} />
					<TextInput
						placeholder="Your Email"
						placeholderTextColor="#666666"
						style={styles.textInput}
						autoCapitalize="none"
						onChangeText={val => textInputChange(val)}
						onEndEditing={e => handleValidUser(e.nativeEvent.text)}
					/>
					{data.check_textInputChange ? (
						<Animatable.View animation="bounceIn">
							<Feather name="check-circle" color="green" size={20} />
						</Animatable.View>
					) : null}
				</View>
				{data.isValidUser ? null : (
					<Animatable.View animation="fadeInLeft" duration={500}>
						<Text style={styles.errorMsg}>
							Email must be 4 characters long.
						</Text>
					</Animatable.View>
				)}

				<Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
				<View style={styles.action}>
					<Feather name="lock" size={20} />
					<TextInput
						placeholder="Your Password"
						placeholderTextColor="#666666"
						secureTextEntry={data.secureTextEntry ? true : false}
						style={styles.textInput}
						autoCapitalize="none"
						onChangeText={val => handlePasswordChange(val)}
					/>
					<TouchableOpacity onPress={updateSecureEntry}>
						{data.secureTextEntry ? (
							<Feather name="eye-off" color="grey" size={20} />
						) : (
							<Feather name="eye" color="grey" size={20} />
						)}
					</TouchableOpacity>
				</View>
				{data.isValidPassword ? null : (
					<Animatable.View animation="fadeInLeft" duration={500}>
						<Text style={styles.errorMsg}>
							Password must be 8 characters long.
						</Text>
					</Animatable.View>
				)}

				<TouchableOpacity>
					<Text style={{ color: '#009387', marginTop: 15 }}>
						Forgot password?
					</Text>
				</TouchableOpacity>
				<View style={styles.button}>
					<TouchableOpacity onPress={() => login()} style={styles.signIn}>
						<LinearGradient
							colors={['#EE6F57', '#ed5a3e']}
							style={styles.signIn}
						>
							<Text style={[styles.textSign, { color: '#fff' }]}>Sign In</Text>
						</LinearGradient>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate('Register')}
						style={[
							styles.signIn,
							{
								borderColor: '#1F3C88',
								borderWidth: 1,
								marginTop: 15,
							},
						]}
					>
						<Text style={[styles.textSign, { color: '#1F3C88' }]}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</Animatable.View>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1F3C88',
	},
	header: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingBottom: 50,
	},
	text_header: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
	footer: {
		flex: 3,
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	text_footer: {
		color: '#05375a',
		fontSize: 18,
	},
	action: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2',
		paddingBottom: 5,
	},
	textInput: {
		flex: 1,
		paddingLeft: 10,
		marginTop: Platform.OS === 'ios' ? 0 : -5,
		color: '#05375a',
	},
	errorMsg: {
		color: '#FF0000',
		fontSize: 14,
	},
	button: {
		alignItems: 'center',
		marginTop: 50,
	},
	signIn: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	textSign: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
