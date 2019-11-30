import React, { PureComponent } from 'react';
import { Alert, View, ActivityIndicator, FlatList } from 'react-native';
import { Container, Content, Text } from 'native-base';

import DataItem from '../../component/dataItem';
import Modal from '../../component/modal';

import { getArticles } from '../../service/news';

export default class ListThumbnailExample extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

  componentDidMount() {
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong!');
    }
    )
  }

  render() {
    console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop:40 }}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text style={{marginTop: 10}} children="Getting your news.." />
      </View>
    ) : (
      <FlatList
        style={{marginTop: 32, paddingHorizontal: 24,}}
        data={this.state.data}
        renderItem={({ item }) => (
          <DataItem 
            onPress={this.handleItemDataOnPress} 
            data={item}
          />
        )}
        keyExtractor={item => item.id}
      />
    )

    return (
      <Container>
        <Content>
          {view}
        </Content>
        <Modal 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}