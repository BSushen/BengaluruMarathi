import React, { Component } from 'react';
import { StyleSheet,Image, View, Dimensions } from 'react-native';
import { Container, Header,Card, CardItem, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, 
Text} from 'native-base';
import BusinessHome from './businesshome';
import styles from '../common'


export default class Restaurant extends Component {
  constructor(props){
    super(props)
    this.state={
      back: false
    }
  }

  backButton=()=>{
    this.setState({
      back: true
      })
    }

  render() {
    if(this.state.back){
      return <BusinessHome navigation={this.props.navigation}/>
    } else {
      return (
        <Container style={styles.container} contentContainerStyle={{
            flex:1,
            flexDirection: 'column',
        }}>
            <Header style={styles.header}>
                <Left>
                    <Icon style={styles.icon} name='arrow-back'  onPress={this.backButton}/>
                </Left>
                <Body>
                    <Title style={styles.headerText}>Restaurants</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Body>
                                <Text>Purnabramha</Text>
                                <Text note>Owner: Purnabramha</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image style={{resizeMode: 'contain',flex:1, width: Dimensions.get('window').width}} source={require('../assets/images/business/purnabramha.jpg')} />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{color: '#87838B'}}>
                            <Text>Contact: 08550078515</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
            <Footer>
                <FooterTab style={styles.footer}>
                    <Text style={styles.footerText}>Bengaluru Marathi</Text>
                </FooterTab>
            </Footer>
        </Container>
      );
    }
    
  }
}
