import React, { Component } from 'react'
import {Text} from 'react-native';
import { Container,Content, List, ListItem, Thumbnail, Button, Header, Title, Left, Right, Icon, 
Body,Footer, FooterTab} from 'native-base';
import HomePage from '../homepage';
import styles from '../common'

export default class Events extends Component {
  constructor(props){
      super(props)
      this.state={
          back:false
      }
  }

  backButton=()=>{
      this.setState({
          back:true
      })
  }
  render() {
    if(this.state.back){
        return <HomePage navigation={this.props.navigation}/>
    } else {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Icon style={styles.icon} name='arrow-back' onPress={this.backButton} />
          </Left>
          <Body>
            <Title style={styles.headerText}>Events</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <List>
                <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={require('../assets/images/event/cricket.jpg')} />
                </Left>
                <Body>
                    <Text style={{color:'#ff6600'}}>Cricket</Text>
                    <Text note numberOfLines={2}>BM's cricket event is on{"\n"}
                    25th November...
                     </Text>
                </Body>
                <Right>
                    <Button transparent>
                    <Text style={{color:'#ff6600'}}>View</Text>
                    </Button>
                </Right>
                </ListItem>
            </List>
            <List>
                <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={require('../assets/images/event/newyear.jpg')} />
                </Left>
                <Body>
                    <Text style={{color:'#ff6600'}}>New Year Celebration</Text>
                    <Text note numberOfLines={2}>Let's celebrate 2019 new year...</Text>
                </Body>
                <Right>
                    <Button transparent>
                    <Text style={{color:'#ff6600'}}>View</Text>
                    </Button>
                </Right>
                </ListItem>
            </List>
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
              <Text style={styles.footerText}>Bengaluru Marathi</Text>
          </FooterTab>
        </Footer>
      </Container>
    )
    }
  }
}
