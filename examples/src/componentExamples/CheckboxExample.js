import React, { Component } from 'react';
import { Checkbox } from 'react-native-news-app-lib';

class CheckboxExample extends Component {
	render() {
		return (
			<>
				<Checkbox color="info" initialValue={true} label="Initial value set to true" style={{ marginBottom: 10 }} />
				<Checkbox color="info" initialValue={false} disabled label="Disabled checkbox" style={{ marginBottom: 10 }} />
				<Checkbox color="primary" flexDirection="row-reverse" label="row-reverse checkbox" style={{ marginBottom: 10 }} />
				<Checkbox color="warning" labelStyle={{ color: '#FF9C09' }} label="Styled label" style={{ marginBottom: 10 }} />
				<Checkbox color="success" image="https://images.unsplash.com/photo-1569780655478-ecffea4c165c?ixlib=rb-1.2.1" flexDirection="column-reverse" style={{ marginBottom: 10 }} />
				<Checkbox color="error" initialValue={true} label="Different icon" iconFamily="font-awesome" iconName="plane" style={{ marginBottom: 10 }} />
			</>
		)
	}
};

export default CheckboxExample;