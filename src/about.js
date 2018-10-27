import React, { Component } from 'react'
import {Text} from 'react-native';
import { Container, Header,Tab, Tabs, ScrollableTab, Title, Left, Right, Icon, 
Body,Footer, FooterTab} from 'native-base';
import AboutUs from './aboutus/aboutus';
import ContactUs from './aboutus/contactus';
import CoreTeam from './aboutus/coreteam';
import HomePage from './homepage';
import styles from './common'

export default class About extends Component {
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
            <Title style={styles.headerText}>Who we are</Title>
          </Body>
          <Right />
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab style={{ backgroundColor: '#0088cc' }}/>}>
          <Tab tabStyle={{backgroundColor: '#0088cc'}} activeTabStyle={{backgroundColor: '#0088cc'}} textStyle={{color: '#ffffff'}} heading="About Us">
            <AboutUs />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#0088cc'}} activeTabStyle={{backgroundColor: '#0088cc'}} textStyle={{color: '#ffffff'}} heading="Contact Us">
            <ContactUs />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#0088cc'}} activeTabStyle={{backgroundColor: '#0088cc'}} textStyle={{color: '#ffffff'}} heading="Core Team">
            <CoreTeam />
          </Tab>
        </Tabs>
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
