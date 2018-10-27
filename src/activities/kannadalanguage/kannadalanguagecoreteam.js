import React, { Component } from 'react';
import {StyleSheet, View,  Image, Dimensions} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Icon, Text, Left, Body } from 'native-base';

export default class KannadaLanguageCorTeam extends Component {
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
                                <Thumbnail source={require('../../assets/images/devi.jpg')} />
                                <Body>
                                    <Text style={styles.name}>Devi Arvandekar</Text>
                                    <Text note> - Active Teacher in group</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>                        
                            <Image style={{resizeMode: 'cover',flex: 1}} source={require('../../assets/images/devi.jpg')} /> 
                        </CardItem>

                        <CardItem>
                            <Icon name='md-contact' style={{color : '#ED4A6A'}} />
                            <Text>Contcat : 9886957625</Text>                        
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