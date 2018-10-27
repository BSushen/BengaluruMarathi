import React, { Component } from 'react'
import {StyleSheet, Text} from 'react-native';
import { Container, Content, Card, CardItem, Body, H3} from 'native-base';
import styles from '../common'
export default class AboutUs extends Component {
  render() {
    return (
        <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem header>
              <Text><H3 style={styles.cardHeader}>Bangalore Marathi</H3></Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.highlightText}>
                  We already connected 5000+ marathi people
                </Text>
                <Text>{"\n"}
                    A wonderful serenity has taken possession of my entire soul, 
                    like these sweet mornings of spring which I enjoy with my whole heart. 
                    I am alone, and feel the charm of existence in this spot, 
                    which was created for the bliss of souls like mine. 
                    I am so happy, my dear friend, so absorbed in the exquisite sense of existence.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Happy & excited about Bangalore Marathi? Join us today</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    )
  }
}
