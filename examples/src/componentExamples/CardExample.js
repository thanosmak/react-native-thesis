import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { withNavigation } from 'react-navigation';

import { Card } from 'react-native-news-app-lib';
import theme from '../theme'

class CardExample extends Component {
	render() {
		return (
			<>
				<Card
					style={styles.card}
					title="Nick Cage"
					avatar="http://i.pravatar.cc/100?id=skater"
					imageStyle={styles.cardImageRadius}
					image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
				/>

				<Card
					borderless
					style={styles.card}
					title="Christopher Moon"
					caption="New York, NY"
					timestamp="2 hours ago"
					avatar="http://i.pravatar.cc/100?id=mak"
					imageStyle={styles.cardImageRadius}
					image="https://images.unsplash.com/photo-1536523552737-74ded3c0591c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c93e90e0868aa428ec388db1ce633272&auto=format&fit=crop&w=1351&q=80"
				/>

				<Card
					shadow={false}
					borderless
					style={styles.card}
					title="News from BBC"
					caption="This is my super new caption for this article"
					imageStyle={styles.cardImageRadius}
					imageBlockStyle={{ padding: 8 }}
					avatar="http://aux.iconspalace.com/uploads/bbc-news-flat-circle-icon-256.png"
					image="https://images.unsplash.com/photo-1536396123481-991b5b636cbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01130bc0b065f8e937e2791bab41bb19&auto=format&fit=crop&w=1331&q=80"
				/>

				<Card
					style={styles.card, {borderRadius:20, backgroundColor: "#fff", borderColor: "#00000033"}}
					title="This is the title of my article"
					titleColor="#9f0c10"
					caption="1 month ago"
					captionColor="#9f0c10"
					imageStyle={{borderRadius:20}}
					avatar="http://aux.iconspalace.com/uploads/bbc-news-flat-circle-icon-256.png"
					image="https://images.unsplash.com/photo-1536567929406-c818f28ec428?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63eb43251970c0f821631dbd2db30425&auto=format&fit=crop&w=1350&q=80"
					/>
			</>
		);
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		marginBottom: 16,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	buttonsContainer: {
		marginVertical: 5
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
	cardImageRadius: {
		borderRadius: 0
	},
	card: {
		marginBottom: 16
	}
});

export default withNavigation(CardExample);