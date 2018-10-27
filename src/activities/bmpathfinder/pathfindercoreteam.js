import React, { Component } from 'react';
import {StyleSheet, View,  Image, Dimensions} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Icon, Text, Left, Body } from 'native-base';

export default class BMPathFinderCoreTeam extends Component {
  render() {
    return (
        <Container style={styles.container} contentContainerStyle={{
            flex:1,
            flexDirection: 'column',
        }}>
                <Content>
                   <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/images/sseema.jpg')} />
                                <Body>
                                    <Text style={styles.name}>Sseema Bhat</Text>
                                    <Text note> - Active HR in group</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>                        
                            <Image style={{resizeMode: 'cover',flex: 1}} source={require('../../assets/images/sseema.jpg')} /> 
                        </CardItem>

                        <CardItem>
                            <Icon name='md-contact' style={{color : '#ED4A6A'}} />
                            <Text>Contcat : 7760089192</Text>                        
                        </CardItem>
                   </Card>
                   <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/images/sushen.jpg')} />
                                <Body>
                                    <Text style={styles.name}>Sushen Birari</Text>
                                    <Text note> - Responsible for technical things</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>                        
                            <Image style={{resizeMode: 'cover',flex: 1}} source={require('../../assets/images/sushen.jpg')} /> 
                        </CardItem>

                        <CardItem>
                            <Icon name='md-contact' style={{color : '#ED4A6A'}} />
                            <Text>Contcat : 9742877887</Text>                        
                        </CardItem>
                   </Card>
                   <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/images/vikas.jpg')} />
                                <Body>
                                    <Text style={styles.name}>Vikas Sawant</Text>
                                    <Text note> - Active HR in group</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>                        
                            <Image style={{resizeMode: 'cover',flex: 1}} source={require('../../assets/images/vikas.jpg')} /> 
                        </CardItem>

                        <CardItem>
                            <Icon name='md-contact' style={{color : '#ED4A6A'}} />
                            <Text>Contcat : 9916278611</Text>                        
                        </CardItem>
                   </Card>
                </Content>
            </Container>  
    )
  }
}

const styles = StyleSheet.create({
    header:{
        fontWeight:'bold'
    },
    name:{
        color: '#ff6600'
    },
    container:{
        backgroundColor: '#f2e6ff'
      },
  });