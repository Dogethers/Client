import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	Dimensions,
	TextInput,
	Platform,
	ScrollView,
	StatusBar,
	Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { useMutation } from '@apollo/client';
import * as SecureStore from 'expo-secure-store';

import { REGISTER } from '../graphql/mutations/userMutation';

const Register = ({ navigation }) => {
	const [data, setData] = React.useState({
		username: '',
		password: '',
		email: '',
		confirm_password: '',
		check_textInputChange: false,
		check_textInputChangeEmail: false,
		secureTextEntry: true,
		confirm_secureTextEntry: true,
	});

	const textInputChange = val => {
		if (val.trim().length >= 4) {
			setData({
				...data,
				username: val,
				check_textInputChange: true,
			});
		} else {
			setData({
				...data,
				username: val,
				check_textInputChange: false,
			});
		}
	};

	const textInputChangeEmail = val => {
		const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		if (val.match(mailFormat)) {
			setData({
				...data,
				email: val,
				check_textInputChangeEmail: true,
			});
		} else {
			setData({
				...data,
				email: val,
				check_textInputChangeEmail: false,
			});
		}
	};

	const handlePasswordChange = val => {
		setData({
			...data,
			password: val,
		});
	};

	const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		});
	};

	const [userRegister, { data: registerData }] = useMutation(REGISTER);

	const register = () => {
		userRegister({
			variables: {
				username: data.username,
				password: data.password,
				email: data.email,
				isOnline: true,
			},
		});

		try {
			SecureStore.setItemAsync(
				'access_token',
				registerData.userRegister.access_token
			);

			navigation.navigate('HomeTabNavigator');
		} catch (error) {
			console.log(error);
		}

	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#1F3C88" barStyle="light-content" />
			<View style={styles.header}>
				<Text style={styles.text_header}>Join the fun!</Text>
			</View>
			<Animatable.View animation="fadeInUpBig" style={styles.footer}>
				<ScrollView>
					<Text style={styles.text_footer}>Username</Text>
					<View style={styles.action}>
						<FontAwesome name="user-o" color="#05375a" size={20} />
						<TextInput
							placeholder="Your Username"
							style={styles.textInput}
							autoCapitalize="none"
							onChangeText={val => textInputChange(val)}
						/>
						{data.check_textInputChange ? (
							<Animatable.View animation="bounceIn">
								<Feather name="check-circle" color="green" size={20} />
							</Animatable.View>
						) : null}
					</View>

					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}
					>
						Email
					</Text>
					<View style={styles.action}>
						<Feather name="mail" color="#05375a" size={20} />
						<TextInput
							placeholder="Your Email"
							style={styles.textInput}
							autoCapitalize="none"
							autoCompleteType="email"
							onChangeText={val => textInputChangeEmail(val)}
						/>
						{data.check_textInputChangeEmail ? (
							<Animatable.View animation="bounceIn">
								<Feather name="check-circle" color="green" size={20} />
							</Animatable.View>
						) : null}
					</View>

					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}
					>
						Password
					</Text>
					<View style={styles.action}>
						<Feather name="lock" color="#05375a" size={20} />
						<TextInput
							placeholder="Your Password"
							secureTextEntry={data.secureTextEntry ? true : false}
							style={styles.textInput}
							autoCapitalize="none"
							onChangeText={val => handlePasswordChange(val)}
						/>
						<TouchableOpacity onPress={updateSecureTextEntry}>
							{data.secureTextEntry ? (
								<Feather name="eye-off" color="grey" size={20} />
							) : (
								<Feather name="eye" color="grey" size={20} />
							)}
						</TouchableOpacity>
					</View>

					<View style={styles.button}>
						<TouchableOpacity style={styles.signIn} onPress={() => register()}>
							<LinearGradient
								colors={['#EE6F57', '#ed5a3e']}
								style={styles.signIn}
							>
								<Text
									style={[
										styles.textSign,
										{
											color: '#fff',
										},
									]}
								>
									Sign Up
								</Text>
							</LinearGradient>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.goBack()}
							style={[
								styles.signIn,
								{
									borderColor: '#1F3C88',
									borderWidth: 1,
									marginTop: 15,
								},
							]}
						>
							<Text
								style={[
									styles.textSign,
									{
										color: '#1F3C88',
									},
								]}
							>
								Sign In
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</Animatable.View>
		</View>
	);
};

export default Register;

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
		fontWeight: 'bold',
		fontSize: 30,
	},
	footer: {
		flex: Platform.OS === 'ios' ? 3 : 5,
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
		marginTop: Platform.OS === 'ios' ? 0 : -5,
		paddingLeft: 10,
		color: '#05375a',
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
