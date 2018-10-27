import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, H3, Left, Icon } from 'native-base';
import styles from '../common'

export default class ContactUs extends Component {
  render() {
    return (
        <Container style={styles.container}>
                <Content>
                    <Card>
                        <CardItem header>
                        <Text><H3 style={styles.cardHeader}>Contact Us</H3></Text>
                        </CardItem>
                        <CardItem>
                        <Body>
                            <Text style={styles.highlightText}>
                            Drop us a mail or call us for suggestions to improve us more
                            </Text>
                            <Text>{"\n"}
                                Email:blrmarathi@gmail.com{"\n"}
                                Phone:+91 88843 00366{"\n"}
                                Phone:+91 96119 97111{"\n"}
                                Phone:+91 99864 06107
                            </Text>
                        </Body>
                        </CardItem>
                        <CardItem footer>
                        <Text>Stay connected...</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>  
    )
  }
}