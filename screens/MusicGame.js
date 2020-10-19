import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SpeechToTextButton from '../components/STTButton';

const MusicGame = ({ navigation }) => {
	const [playerAnswer, setPlayerAnswer] = useState('Carry Me Away');

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
					<TouchableOpacity
						onPress={() => navigation.navigate('MusicGameFinish')}
					>
						<Text>Tes</Text>
					</TouchableOpacity>
				</View>
			</View>
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
