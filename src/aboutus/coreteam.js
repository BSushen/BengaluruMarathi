import React, { Component } from 'react';
import {StyleSheet, View,  Image, Dimensions} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Icon, Text, Left, Body } from 'native-base';

export default class CoreTeam extends Component {
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
                                <Thumbnail source={require('../assets/images/deepak.jpg')} />
                                <Body>
                                    <Text style={styles.name}>Deepak Gosavi</Text>
                                    <Text note> - Founder of group</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>  
                            <Image style={{resizeMode: 'cover',flex: 1}} source={require('../assets/images/deepak.jpg')} /> 
                        </CardItem>

                        <CardItem>
                            <Icon name='md-contact' style={{color : '#ED4A6A'}} />
                            <Text>Contcat : 9611997111</Text>                        
                        </CardItem>
                   </Card>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../assets/images/amit.jpg')} />
                                <Body>
                                    <Text style={styles.name}>Amit Deshpande</Text>
                                    <Text note> - Known personality in BM</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>               
                                <Image style={{resizeMode: 'cover',flex: 1}} source={require('../assets/images/amit.jpg')} />
                        </CardItem>

                        <CardItem>
                            <Icon name='md-contact' style={{color : '#ED4A6A'}} />
                            <Text>Contcat : 8884300366</Text>                        
                        </CardItem>
                   </Card>
                   <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../assets/images/omkar.jpg')} />
                                <Body>
                                    <Text style={styles.name}>Omkar Muravne</Text>
                                    <Text note> - Mentor for BM</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>                        
                            <Image style={{resizeMode: 'cover',flex: 1}} source={require('../assets/images/omkar.jpg')} /> 
                        </CardItem>

                        <CardItem>
                            <Icon name='md-contact' style={{color : '#ED4A6A'}} />
                            <Text>Contcat : 9986406107</Text>                        
                        </CardItem>
                   </Card>
                   <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../assets/images/sseema.jpg')} />
                                <Body>
                                    <Text style={styles.name}>Sseema Bhat</Text>
                                    <Text note> - Responsible for job group</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>                        
                            <Image style={{resizeMode: 'cover',flex: 1}} source={require('../assets/images/sseema.jpg')} /> 
                        </CardItem>

                        <CardItem>
                            <Icon name='md-contact' style={{color : '#ED4A6A'}} />
                            <Text>Contcat : 7760089192</Text>                        
                        </CardItem>
                   </Card>
                   <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../assets/images/sushen.jpg')} />
                                <Body>
                                    <Text style={styles.name}>Sushen Birari</Text>
                                    <Text note> - Responsible for technical things</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>                        
                            <Image style={{resizeMode: 'cover',flex: 1}} source={require('../assets/images/sushen.jpg')} /> 
                        </CardItem>

                        <CardItem>
                            <Icon name='md-contact' style={{color : '#ED4A6A'}} />
                            <Text>Contcat : 9742877887</Text>                        
                        </CardItem>
                   </Card>
                   <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../assets/images/vikas.jpg')} />
                                <Body>
                                    <Text style={styles.name}>Vikas Sawant</Text>
                                    <Text note> - Active lead for all events</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>                        
                            <Image style={{resizeMode: 'cover',flex: 1}} source={require('../assets/images/vikas.jpg')} /> 
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