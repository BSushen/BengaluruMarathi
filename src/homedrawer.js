import React, { Component } from "react";
import HomePage from "./homepage";
import About from './about';
import BusinessHome from './business/businesshome';
import Calender from './calender';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { StyleSheet,Image } from 'react-native';
import { Container, Content, Header, Body } from "native-base";


export default class HomeDrawer extends Component {
  render() {
    return (
    <HomeScreenRouter />
    );
  }
}

const customDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.header}>
      <Body>
        <Image style={{alignSelf: 'center'}} source={require('./assets/images/bmlogo.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems style={{color: '#0099cc'}} {...props} />
    </Content>
  </Container>
)

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { 
      screen: HomePage,
    },
    About: {
      screen: About 
    },
    Business: {
      screen: BusinessHome 
    },
    Calender: {
      screen: Calender 
    }
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: customDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
);

const styles=StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: '#0099cc',
    alignSelf: 'center'
  }
})

