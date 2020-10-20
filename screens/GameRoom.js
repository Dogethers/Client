import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ScrollView,
	BackHandler,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import socket from '../config/socket';

import * as SecureStore from 'expo-secure-store';

const GameRoom = ({ navigation }) => {
	const [rooms, setRooms] = useState([]);
	const [username, setUsername] = useState('');
	console.log(username,'state')
	console.log(rooms,'rooms')

	useEffect(() => {
		socket.on('created_room', room => {
			setRooms(rooms.concat(room));
		});
	}, []);

	useEffect(() => {
		const getUsername = async()=>{
			const username = await SecureStore.getItemAsync('username');
			console.log(username,'useff gameroom')
			setUsername(username);
			return username
		}
		getUsername()
	}, []);

	const handleJoin = (room) =>{
		navigation.navigate('WaitingRoom', {
			room,
			username,
			status: 'member',
		})
	}

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#E5E5E5" barStyle="dark-content" />
			<View style={styles.header}>
				<View style={styles.button}>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate('WaitingRoom', { status: 'host' })
						}
						style={styles.room}
					>
						<LinearGradient colors={['#EE6F57', '#ed5a3e']} style={styles.room}>
							<Text style={[styles.textRoom, { color: '#fff' }]}>
								Create Room
							</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</View>
			<Animatable.View style={styles.footer} animation="fadeInUpBig">
				<Text style={styles.title}>Join Room</Text>

				<ScrollView>
					{rooms.map((room, idx) => {
						return (
							<View style={styles.action} key={idx}>
								<FontAwesome name="user-o" color="#05375a" size={20} />
								<Text style={styles.textUser}>{room}</Text>
								<TouchableOpacity
									onPress={()=>handleJoin(room)}
									
								>
									<Feather name="arrow-right-circle" color="orange" size={20} />
								</TouchableOpacity>
							</View>
						);
					})}
				</ScrollView>
			</Animatable.View>
		</View>
	);
};

export default GameRoom;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E5E5E5',
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#E5E5E5',
	},
	footer: {
		flex: 2,
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	title: {
		color: '#05375a',
		fontSize: 22,
		fontWeight: 'bold',
	},
	button: {
		alignItems: 'center',
		marginTop: 50,
	},
	room: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	textRoom: {
		fontSize: 22,
		fontWeight: 'bold',
		padding: 20,
	},
	action: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2',
		paddingBottom: 5,
	},
	textUser: {
		flex: 1,
		marginTop: Platform.OS === 'ios' ? 0 : -5,
		paddingLeft: 10,
		color: '#05375a',
		fontSize: 18,
	},
});
