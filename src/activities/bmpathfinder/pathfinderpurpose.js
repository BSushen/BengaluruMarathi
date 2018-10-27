import React, { Component } from 'react'
import {StyleSheet, Text} from 'react-native';
import { Container, Content, Card, CardItem, Body, H3} from 'native-base';
export default class PathFinderPurpose extends Component {
  render() {
    return (
        <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem header>
              <Text><H3 style={styles.cardHeader}>BM Path Finder</H3></Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.highlightText}>
                  We help you to find new opprtunities
                </Text>
                <Text>{"\n"}
                    BM Path Finder is a group where you can find new job, 
                    People in the group will help you to find job, they share job opening in there
                    organization and you can keep track of your interview. 
                </Text>
                <Text>{"\n"}
                    The purpose of group is to share valid job opening and help our people
                    to grab best opporunity in market. People in group are very friendly and kind
                    to help you for job search. 
                </Text>
                <Text>{"\n"}
                    There is whatsapp group and facebook group to share job opening. 
                    You can connect anyone in group for job purpose or guidance. To join our group
                    please connect us on facebook and you can ask core memers to add you in whatsapp group.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>- Bengaluru Marathi</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#cc99ff'
  },
  icon:{
    marginLeft: 10
  },
  footer:{
    backgroundColor: '#cc99ff',
  },
  cardHeader:{
    fontWeight: 'bold',
    color: '#ff6600'
  },
  container:{
    backgroundColor: '#f2e6ff'
  },
  highlightText: {
    color:'#ffad33',
  },
})