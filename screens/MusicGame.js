import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SpeechToTextButton from '../components/STTButton';

import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

const MusicGame = async ({ navigation, route }) => {
	const [playerAnswer, setPlayerAnswer] = useState('');
	// const [playSong, setPlaySong] = useState(true);
	// const params = route.params;
	// console.log(params);

	// const audio = new Audio.Sound();

	// const audio = async () => {
	// 	const { sound: soundObject, status } = await Audio.Sound.createAsync(
	// {
	// 	uri: params,
	// },
	// { shouldPlay: true, isLooping: false }
	// 	);

	// 	return soundObject;
	// };

	// async function play(stopCondition) {
	// 	console.log('masuk');

	// 	// Your sound is playing with 30 sec duration!
	// 	await audio.loadAsync(
	// 		{
	// 			uri: params,
	// 		},
	// 		{ shouldPlay: true, isLooping: false }
	// 	);

	// 	if (stopCondition) {
	// 		await audio.playAsync();
	// 		setTimeout(async () => {
	// 			await audio.stopAsync();
	// 		}, 30000);
	// 	} else if (!stopCondition) {
	// 		await audio.stopAsync();
	// 		console.log('stopped');
	// 	}
	// 	console.log('play');
	// }

	useEffect(() => {
		// play(playSong);
		console.log('masuk');
	}, []);

	// const handleAnswer = async () => {
	// 	setPlaySong(false);
	// 	play(playSong);
	// };

	return (
		<View style={styles.container}>
			<View style={styles.songBox}>
				<Text style={styles.songText}>Playing the song...</Text>
			</View>
			<View style={styles.answerBox}>
				<Text style={styles.answerText}>{playerAnswer}</Text>
			</View>
			<View style={styles.leaderboard}>
				<Text style={styles.leaderboardText}>Leaderboard</Text>
				<View style={styles.leaderboardPlayers}>
					<Text style={styles.leaderboardPlayer}>1. John Doe</Text>
					<Text style={styles.leaderboardPlayer}>2. John Doe</Text>
					<Text style={styles.leaderboardPlayer}>3. John Doe</Text>
					<Text style={styles.leaderboardPlayer}>4. John Doe</Text>
					{/* <TouchableOpacity
				onPress={() => navigation.navigate('MusicGameFinish')}
			>
				<Text>Tes Finish</Text>
			</TouchableOpacity> */}
				</View>
			</View>
			<TouchableOpacity onPress={() => handleAnswer()}>
				<LinearGradient colors={['#EE6F57', '#ed5a3e']}>
					<Text style={{ color: '#fff' }}>Submit</Text>
				</LinearGradient>
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
});
