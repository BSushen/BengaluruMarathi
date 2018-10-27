import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, 
Text} from 'native-base';
import MenuCard from '../cards/menucard';
import Travel from './travel';
import Restaurant from './restaurant';
import styles from '../common'
import Training from './trainings';
import HomePage from '../homepage';

export default class BusinessHome extends Component {
  constructor(props){
    super(props)
    this.state={
      travel: false,
      restaurant: false,
      training: false,
      back: false
    }
  }

  backButton=()=>{
    this.setState({
      back: true
    })
  }

    getTravel=()=>{
        this.setState({
            travel: true
        })
    }

    getRestaurants=()=>{
        this.setState({
            restaurant: true
        })
    }

    getTraining=()=>{
      this.setState({
        training: true
    })
    }

  render() {
    if(this.state.back){
      return <HomePage navigation={this.props.navigation}/>
    } else if(this.state.training){
      return <Training navigation={this.props.navigation}/>
    } else if(this.state.restaurant){
      return <Restaurant navigation={this.props.navigation}/>
    } else if(this.state.travel){
      return <Travel navigation={this.props.navigation}/>
    } else {
      return (
        <Container style={styles.container}>
          <Header style={styles.header}>
            <Left>
              <Icon style={styles.icon} name='arrow-back' onPress={this.backButton} />
            </Left>
            <Body>
              <Title style={styles.headerText}>Business</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <View style={styles.menuContainer}>
              <TouchableOpacity onPress={this.getTravel}>
                <MenuCard icon={'plane'} iconName={'Travel'} />
              </TouchableOpacity>
              <MenuCard icon={'heart'} iconName={'LIC'}/>
              <MenuCard icon={'bonfire'} iconName={'Path-Pooja'}/>
              <MenuCard icon={'logo-foursquare'} iconName={'Food'}/>
            </View>
            <View style={styles.menuContainer}>
              <TouchableOpacity onPress={this.getRestaurants}>
                <MenuCard icon={'restaurant'} iconName={'Restaurants'}/>
              </TouchableOpacity>
              <MenuCard icon={'home'} iconName={'Rent/Sale'}/>
              <MenuCard icon={'medkit'} iconName={'Doctors'}/>
              <MenuCard icon={'desktop'} iconName={'Computers'}/>
            </View>
            <View style={styles.menuContainer}>
              <MenuCard icon={'bowtie'} iconName={'Cloths'}/>
              <TouchableOpacity onPress={this.getTraining}>
                <MenuCard icon={'book'} iconName={'Trainings'}/>
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
