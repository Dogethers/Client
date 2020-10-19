import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MusicGameRules = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Animatable.View animation="fadeIn">
				<View style={styles.box}>
					<Text style={styles.heading}>Rules</Text>
					<View style={styles.rules}>
						<Text>
							1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</Text>
						<Text>
							2. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</Text>
						<Text>
							3. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</Text>
						<Text>
							4. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</Text>
					</View>
				</View>
				<TouchableOpacity
					style={styles.start}
					onPress={() => navigation.navigate('MusicGame')}
				>
					<LinearGradient colors={['#EE6F57', '#ed5a3e']} style={styles.start}>
						<Text
							style={[
								styles.textStart,
								{
									color: '#fff',
								},
							]}
						>
							Start
						</Text>
					</LinearGradient>
				</TouchableOpacity>
			</Animatable.View>
		</View>
	);
};

export default MusicGameRules;

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F6F5F5',
		justifyContent: 'center',
		alignItems: 'center',
	},

	box: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#FFF',
		borderRadius: 20,
		height: 200,
		width: screenWidth - 30,
		fontWeight: 'bold',
	},

	heading: {
		fontWeight: 'bold',
		fontSize: 30,
	},

	rules: {
		width: 200,
		fontSize: 20,
	},

	start: {
		width: '100%',
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
