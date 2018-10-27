import React, { Component } from 'react'
import {StyleSheet, Text} from 'react-native';
import { Container, Header,Tab, Tabs, ScrollableTab, Title, Left, Right, Icon, 
Body,Footer, FooterTab, Button} from 'native-base';
import PathFinderPurpose from './pathfinderpurpose';
import HomePage from '../../homepage';
import BMPathFinderCoreTeam from './pathfindercoreteam';
import styles from '../../common'

export default class BMPathFinder extends Component {
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
                <Icon style={styles.icon} name='arrow-back'  onPress={this.backButton}/>
            </Left>
          <Body>
            <Title style={styles.headerText}>Path Finder</Title>
          </Body>
          <Right />
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab style={{ backgroundColor: '#0088cc' }}/>}>
          <Tab tabStyle={{backgroundColor: '#0088cc'}} activeTabStyle={{backgroundColor: '#0088cc'}} textStyle={{color: '#ffffff'}} heading="Purpose">
            <PathFinderPurpose />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#0088cc'}} activeTabStyle={{backgroundColor: '#0088cc'}} textStyle={{color: '#ffffff'}} heading="Join Us">
          </Tab>
          <Tab tabStyle={{backgroundColor: '#0088cc'}} activeTabStyle={{backgroundColor: '#0088cc'}} textStyle={{color: '#ffffff'}} heading="Core Team">
            <BMPathFinderCoreTeam />
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
