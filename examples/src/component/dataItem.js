import React, { PureComponent, } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';

import { Card, Block } from 'react-native-news-app-lib';

export default class DataItem extends PureComponent {
  constructor(props) {
    super(props);
    this.data = props.data;
    this._handlePress = this._handlePress.bind(this)
  }

  _handlePress() {
    const { url, title } = this.data
    this.props.onPress({ url, title })
  }

  render() {
    // Convert time with moment library
    const time = moment(this.data.publishedAt || moment.now()).fromNow();
    return (
      <TouchableOpacity onPress={this._handlePress} activeOpacity={0.8}>
        <Card
          shadow={false}
          // borderless
          style={styles.card}
          title={this.data.title}
          caption={this.data.source.name}
          timestamp={time}
          image={this.data.urlToImage}
          imageStyle={styles.cardImageRadius}
          avatar={'http://i.pravatar.cc/100?id=' + this.data.source.name}
        />
      </TouchableOpacity>  
    )
  }
}

const styles = StyleSheet.create({
  cardImageRadius: {
    borderRadius: 16
  },
  card: {
    marginBottom: 20,
    borderRadius: 16,
    borderColor: "#cccccc"
  }
});