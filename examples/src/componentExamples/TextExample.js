import React, { Component } from 'react';
import { Text } from 'react-native-news-app-lib';

class TextExample extends Component {
	render() {
		return (
			<>
				<Text h1>Heading 1</Text>
				<Text h2>Heading 2</Text>
				<Text h3>Heading 3</Text>
				<Text h4>Heading 4</Text>
				<Text h5>Heading 5</Text>
				<Text p>Paragraph</Text>
				<Text muted>This is a muted paragraph.</Text>
			</>
		)
	}
};

export default TextExample;