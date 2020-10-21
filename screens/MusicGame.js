import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import SpeechToTextButton from '../components/STTButton';

import { Audio } from 'expo-av';
import * as SecureStore from 'expo-secure-store';
import socket from '../config/socket';

const MusicGame = ({ navigation, route }) => {
	const { songUri, songAnswer, playerList } = route.params;
	const [playerAnswer, setPlayerAnswer] = useState('');

	const sound = new Audio.Sound();

	useEffect(() => {
		async function play() {
			await sound.loadAsync({ uri: songUri });
			await sound.playAsync();
		}
		play();
		console.log('play');
	}, []);

	const submitAnswer = async () => {
		await sound.stopAsync();
		console.log('stopped');

		// to be improved to similiarity
		if (playerAnswer.toLowerCase() === songAnswer.toLowerCase()) {
			console.log('correct!');
			const username = await SecureStore.getItemAsync('username');
			console.log(playerList);
			const roomName = playerList[0].roomName;
			socket.emit('next-round-win', roomName, username);
		} else {
			console.log('incorrect!');
		}
	};

	useEffect(() => {
		socket.on('next-round-lose', async (songUri, songAnswer, round) => {
			await sound.stopAsync();
			console.log('stopped');
			console.log(playerList);

			if (round <= 2) {
				navigation.push('MusicGame', {
					songUri,
					songAnswer,
					playerList,
				});
			} else {
				socket.emit('last-round');
			}
		});
	}, []);

	useEffect(() => {
		socket.on('game-end', async playerList => {
			console.log(playerList, '<<<< end');
			await sound.unloadAsync();
			navigation.navigate('MusicGameFinish', { playerList });
		});
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.songBox}>
				<Text style={styles.songText}>Playing the song...</Text>
			</View>
			<View style={styles.answerBox}>
				<Text style={styles.answerText}>{playerAnswer}</Text>
			</View>
			{/* <View style={styles.leaderboard}>
				<Text style={styles.leaderboardText}>Leaderboard</Text>
				<View style={styles.leaderboardPlayers}>
					<Text style={styles.leaderboardPlayer}>1. John Doe</Text>
					<Text style={styles.leaderboardPlayer}>2. John Doe</Text>
					<Text style={styles.leaderboardPlayer}>3. John Doe</Text>
					<Text style={styles.leaderboardPlayer}>4. John Doe</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate('MusicGameFinish')}
					>
						<Text>Tes Finish</Text>
					</TouchableOpacity>
				</View>
			</View> */}
			<View style={styles.button}>
				<TouchableOpacity onPress={() => submitAnswer()} style={styles.room}>
					<LinearGradient colors={['#EE6F57', '#ed5a3e']} style={styles.room}>
						<Text style={[styles.textRoom, { color: '#fff' }]}>Submit</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
			<TouchableOpacity onPress={() => setPlayerAnswer('Carry Me Away')}>
				<Text>Tes Answer round 1</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setPlayerAnswer('New Light')}>
				<Text>Tes Answer round 2</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setPlayerAnswer('Just The Way You Are')}>
				<Text>Tes Answer round 3</Text>
			</TouchableOpacity>
			<SpeechToTextButton setPlayerAnswer={setPlayerAnswer} />
		</View>
	);
};

export default MusicGame;

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F6F5F5',
		alignItems: 'center',
	},

	leaderboard: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#FFF',
		borderRadius: 20,
		height: 200,
		width: screenWidth - 30,
		fontWeight: 'bold',
		marginTop: 30,
	},

	leaderboardText: {
		fontWeight: '600',
		fontSize: 20,
	},

	songBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFF',
		borderRadius: 20,
		height: 80,
		width: screenWidth - 30,
		fontWeight: 'bold',
		marginTop: 30,
	},

	songText: {
		fontWeight: 'bold',
		fontSize: 30,
	},

	answerBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFF',
		borderRadius: 10,
		height: 40,
		width: screenWidth - 30,
		fontWeight: 'bold',
		marginTop: 30,
	},

	answerText: {
		fontWeight: 'bold',
		fontSize: 20,
	},

	leaderboardPlayers: {
		width: screenWidth - 200,
	},

	leaderboardPlayer: {
		fontSize: 20,
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
