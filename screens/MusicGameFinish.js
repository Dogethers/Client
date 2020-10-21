import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import socket from '../config/socket';

const MusicGameFinish = ({ navigation, route }) => {
	const { playerList } = route.params;

	const handlePlayAgain = () => {
		socket.emit('start-again');
		navigation.navigate('Home');
	};

	return (
		<View style={styles.container}>
			{/* <Text style={styles.congratsText}>Congrats</Text> */}
			<View style={styles.leaderboard}>
				<Text style={styles.leaderboardText}>Leaderboard</Text>
				<View style={styles.leaderboardPlayers}>
					{playerList
						.sort((a, b) => b.score - a.score)
						.map((player, i) => {
							return (
								<Text key={i} style={styles.leaderboardPlayer}>
									{i + 1}. {player.name} ({player.score})
								</Text>
							);
						})}
				</View>
			</View>
			<TouchableOpacity
				style={styles.playAgain}
				onPress={() => handlePlayAgain()}
			>
				<LinearGradient
					colors={['#EE6F57', '#ed5a3e']}
					style={styles.playAgain}
				>
					<Text
						style={[
							styles.textStart,
							{
								color: '#fff',
							},
						]}
					>
						Play Again
					</Text>
				</LinearGradient>
			</TouchableOpacity>
		</View>
	);
};

export default MusicGameFinish;

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F6F5F5',
		alignItems: 'center',
	},

	congratsText: {
		fontWeight: 'bold',
		fontSize: 35,
		marginTop: 50,
	},

	leaderboard: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#FFF',
		borderRadius: 20,
		height: 150,
		width: screenWidth - 30,
		fontWeight: 'bold',
		marginTop: 30,
	},

	leaderboardText: {
		fontWeight: 'bold',
		fontSize: 20,
	},

	leaderboardPlayer: {
		fontSize: 20,
	},

	playAgain: {
		width: screenWidth - 30,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		marginTop: 2,
	},

	textStart: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
