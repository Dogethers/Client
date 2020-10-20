import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MusicGameFinish = ({ navigation, route }) => {
	const params = route.params;
	console.log(params);
	return (
		<View style={styles.container}>
			<Text style={styles.congratsText}>Congrats</Text>
			<View style={styles.leaderboard}>
				<Text style={styles.leaderboardText}>Leaderboard</Text>
				<View style={styles.leaderboardPlayers}>
					<Text style={styles.leaderboardPlayer}>1. John Doe</Text>
					<Text style={styles.leaderboardPlayer}>2. John Doe</Text>
					<Text style={styles.leaderboardPlayer}>3. John Doe</Text>
					<Text style={styles.leaderboardPlayer}>4. John Doe</Text>
				</View>
			</View>
			<TouchableOpacity
				style={styles.playAgain}
				onPress={() => navigation.navigate('Home')}
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
			<TouchableOpacity
				style={styles.playAgain}
				onPress={() => navigation.navigate('Home')}
			>
				<LinearGradient
					colors={['#203C87', '#203C87']}
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
						Play Different Game
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
