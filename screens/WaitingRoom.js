import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import socket from '../config/socket';

import * as SecureStore from 'expo-secure-store';

const WaitingRoom = ({ navigation, route }) => {
	const max = 4;
	const params = route.params;
	const [players, setPlayers] = useState([]);
	console.log(params,'params');

	useEffect(() => {
		async function aaa() {
			const username = await SecureStore.getItemAsync('username');
			if (params.status === 'host') {
				socket.emit('create_room', username);
			}
		}
		aaa();
	}, []);

	useEffect(() => {
		if (params.status === 'host') {
			socket.on('new_room', listPlayers => {
				setPlayers(listPlayers);
			});
		} else if (params.status === 'member') {
			socket.emit('join_room', params);
		}
	}, []);

	useEffect(() => {
		console.log('masuk uopdate');
		socket.on('update_player', listPlayers => {
			console.log(listPlayers, '<<< update players');
			setPlayers(listPlayers);
		});
	}, []);

	const handleStart = () => {
		socket.emit('start', players[0].roomName);
		// socket.emit('start', `tes's Room`);
		
		console.log('start')
	};

	useEffect(() => {
		socket.on('start-game', songUri => {
			console.log(songUri);
			navigation.navigate('MusicGame', songUri);
		});
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Waiting For Other Player</Text>
			</View>

			<View style={styles.footer}>
				<Text style={styles.list}>
					{players.length}/{max}
				</Text>
				{players.map((player,idx) => {
					return <Text key={idx} style={styles.list}>{player.name}</Text>;
				})}

				{params.status === 'host' && (
					<View style={styles.button}>
						<TouchableOpacity onPress={() => handleStart()} style={styles.room}>
							<LinearGradient
								colors={['#EE6F57', '#ed5a3e']}
								style={styles.room}
							>
								<Text style={[styles.textRoom, { color: '#fff' }]}>Start</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>
				)}
			</View>
		</View>
	);
};

export default WaitingRoom;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	footer: {
		flex: 1,
		backgroundColor: '#E5E5E5',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	list: {
		fontSize: 22,
		fontWeight: 'bold',
	},
	button: {
		alignItems: 'center',
		marginTop: 50,
	},
	room: {
		width: 150,
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
});
