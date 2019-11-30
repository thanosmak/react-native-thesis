//import libraries
import React, { Component } from 'react';
import { Dimensions, Modal, Share, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { Container, Header, Body, Left, Right, Title, Button } from 'native-base';

import { NavBar, Icon, Text } from 'react-native-news-app-lib';

const webViewHeight = Dimensions.get('window').height - 56;

// create a component
class ModalComponent extends Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleShare = this.handleShare.bind(this);
  }

  handleClose = () => {
    return this.props.onClose();
  }

  handleShare = () => {
    const { url, title } = this.props.articleData;
    message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` }
    );
  }

  generateRigthPart = ()=>{
      return(
        <Button onPress={this.handleShare} transparent>
          <Icon name="share" style={{ color: 'white', fontSize: 12 }} />
        </Button>
      );
  }

  render() {
    const { showModal, articleData } = this.props;
    const { url } = articleData;

    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}
        >

          <Container style={{ backgroundColor: '#fff' }}>
            {/* <NavBar 
              title={articleData.title} 
              back={true}
              onLeftPress={this.handleClose}
              leftIconColor="#000"
              transparent={true}
              right={this.generateRigthPart}
            /> */}


            <Header style={{ backgroundColor: '#fff' }}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" family="material-community" />
                </Button>
              </Left>
              <Body>
                <Title children={articleData.title} style={{ color: 'black', fontFamily: 'Roboto' }} />
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" family="material-community" />
                </Button>
              </Right>
            </Header>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <WebView source={{ uri: url }} style={{ flex: 1 }}
                onError={this.handleClose} startInLoadingState
                scalesPageToFit
              />
            </ScrollView>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

//make this component available to the app
export default ModalComponent;
