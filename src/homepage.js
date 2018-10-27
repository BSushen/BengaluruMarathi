import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, 
Text} from 'native-base';
import MenuCard from './cards/menucard'
import About from './about';
import BusinessHome from './business/businesshome';
import BMPathFinder from './activities/bmpathfinder/bmpathfinder';
import KannadaLanguage from './activities/kannadalanguage/kannadalanguage';
import Gallery from './gallery';
import Calender from './calender';
import Events from './events/events';
import styles from './common';

export default class HomePage extends Component {
  constructor(props){
    super(props)
    this.state={
      about: false,
      business: false,
      pathFinder: false,
      kannadaLanguage: false,
      gallery: false,
      calender: false,
      event: false
    }
  }

  getAbout=()=>{
    this.setState({
      about: true
      })
    }

    getBusiness=()=>{
      this.setState({
        business:true
      })
    }

    getPathFinder=()=>{
      this.setState({
        pathFinder:true
      })
    }

    getKannadaLanguage=()=>{
      this.setState({
        kannadaLanguage:true
      })
    }   

    getGallery=()=>{
      this.setState({
        gallery: true
      })
    }

    getCalender=()=>{
      this.setState({
        calender: true
      })
    }

    getEvent=()=>{
      this.setState({
        event: true
      })
    }

  render() {
    if(this.state.event){
      return <Events navigation={this.props.navigation}/>
    } else if(this.state.gallery){
      return <Gallery navigation={this.props.navigation}/>
    } else if(this.state.kannadaLanguage){
      return <KannadaLanguage navigation={this.props.navigation}/>
    } else if(this.state.pathFinder){
      return <BMPathFinder navigation={this.props.navigation}/>
    } else if(this.state.business){
      return <BusinessHome navigation={this.props.navigation}/>
    } else if(this.state.about){
      return <About navigation={this.props.navigation}/>
    } else if(this.state.calender){
      return <Calender navigation={this.props.navigation}/>
    } else {
      return (
        <Container style={styles.container}>
          <Header style={styles.header}>
            <Left>
              <Icon style={styles.icon} name='menu' onPress={() => this.props.navigation.openDrawer()} />
            </Left>
            <Body>
              <Title style={styles.headerText}>Home</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <View style={styles.menuContainer}>
              <TouchableOpacity onPress={this.getAbout}>
                <MenuCard icon={'help'} iconName={'About Us'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.getGallery}>
                <MenuCard icon={'photos'} iconName={'Gallery'}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.getBusiness}>
                <MenuCard icon={'briefcase'} iconName={'Business'}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.getEvent}>
                <MenuCard icon={'star'} iconName={'Events'}/>
              </TouchableOpacity>
            </View>
            <View style={styles.menuContainer}>
              <TouchableOpacity onPress={this.getPathFinder}>
                <MenuCard icon={'shuffle'} iconName={'BM Path Finder'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.getKannadaLanguage}>
                <MenuCard icon={'book'} iconName={'Kannada Language'}/>
              </TouchableOpacity>
              <MenuCard icon={'laptop'} iconName={'Technical Update'}/>
              <MenuCard icon={'flower'} iconName={'BM Narishakti'}/>
            </View>
            <View style={styles.menuContainer}>
              <TouchableOpacity onPress={this.getCalender}>
                <MenuCard icon={'calendar'} iconName={'Calender'} />
              </TouchableOpacity>
            </View>
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

