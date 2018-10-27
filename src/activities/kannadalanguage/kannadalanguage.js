import React, { Component } from 'react'
import {Text} from 'react-native';
import { Container, Header,Tab, Tabs, ScrollableTab, Title, Left, Right, Icon, 
Body,Footer, FooterTab, Button} from 'native-base';
import HomePage from '../../homepage';
import KannadaLanguagePurpose from '../../activities/kannadalanguage/kannadalanguagepurpose';
import KannadaLanguageCoreTeam from '../../activities/kannadalanguage/kannadalanguagecoreteam';
import styles from '../../common'

export default class KannadaLanguage extends Component {
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
            <Title style={styles.headerText}>Kannada Language</Title>
          </Body>
          <Right />
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab style={{ backgroundColor: '#0088cc' }}/>}>
          <Tab tabStyle={{backgroundColor: '#0088cc'}} activeTabStyle={{backgroundColor: '#0088cc'}} textStyle={{color: '#ffffff'}} heading="Purpose">
            <KannadaLanguagePurpose />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#0088cc'}} activeTabStyle={{backgroundColor: '#0088cc'}} textStyle={{color: '#ffffff'}} heading="Join Us">
          </Tab>
          <Tab tabStyle={{backgroundColor: '#0088cc'}} activeTabStyle={{backgroundColor: '#0088cc'}} textStyle={{color: '#ffffff'}} heading="Core Team">
            <KannadaLanguageCoreTeam />
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

// const styles = StyleSheet.create({
//   header:{
//     backgroundColor: '#cc99ff'
//   },
//   icon:{
//     marginLeft: 10
//   },
//   footer:{
//     backgroundColor: '#cc99ff',
//   },
//   cardHeader:{
//     fontWeight: 'bold',
//   },
//   container:{
//     backgroundColor: '#f2e6ff'
//   }
// })