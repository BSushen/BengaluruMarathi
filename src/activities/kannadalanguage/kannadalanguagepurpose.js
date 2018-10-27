import React, { Component } from 'react'
import {StyleSheet, Text} from 'react-native';
import { Container, Content, Card, CardItem, Body, H3} from 'native-base';
export default class KannadaLanguagePurpose extends Component {
  render() {
    return (
        <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem header>
              <Text><H3 style={styles.cardHeader}>BM Kannada Language</H3></Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.highlightText}>
                  Learn Kannada, Respect Kannada
                </Text>
                <Text>{"\n"}
                    It's a group of marathi pleople who knows kannada Language and willing to 
                    share their knowledge to other people. This is a small step towards socity 
                    by learning there language. We respect culture where we live.
                </Text>
                <Text>{"\n"}
                    With this group you can learn kannada which will help to communicate with local people 
                    in bangalore. This will ease your day to day activities by seaking in local language. 
                </Text>
                <Text>{"\n"}
                    There is whatsapp group and facebook group to share lectures. 
                    You can connect anyone in group for if you wish to learn kannda. To join our group
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