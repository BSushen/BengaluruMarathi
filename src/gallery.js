import React, { Component } from 'react';
import { Image } from 'react-native';
import HomePage from './homepage';
import { Container, Header, View, DeckSwiper, Card, CardItem, Text, Icon,
  Left, Body, Title, Right, Footer, FooterTab, Button, Content } from 'native-base';
import styles from './common'
const cards = [
  {
    name: 'Benguluru Marathi in news',
    image: require('./assets/images/gallery/paper_xl.jpg'),
  },
  {
    name: 'Dindi Chalali - Kidds with traditional dress',
    image: require('./assets/images/gallery/dindi.jpg'),
  },
  {
    name: 'Dindi Chalali - dress competition',
    image: require('./assets/images/gallery/dindi_1.jpg'),
  },
  {
    name: 'Happy moments',
    image: require('./assets/images/gallery/kojagiri_2017.jpg'),
  },
  {
    name: 'Lalbag meetup',
    image: require('./assets/images/gallery/meetup.jpg'),
  },
  {
    name: 'Lalbag meetup',
    image: require('./assets/images/gallery/meetup_1.jpg'),
  },
  {
    name: 'Lalbag meetup - kidd\'s competition',
    image: require('./assets/images/gallery/meetup_2.jpg'),
  },
  {
    name: 'Lalbag meetup - prize distribution',
    image: require('./assets/images/gallery/meetup_2.jpg'),
  },
  {
    name: 'Resort outing',
    image: require('./assets/images/gallery/resort_outing.jpg'),
  },
  {
    name: 'Kannada learning session',
    image: require('./assets/images/gallery/kannada_learning.jpg'),
  },
  {
    name: 'Soft skill session',
    image: require('./assets/images/gallery/softskill.jpg'),
  },
  {
    name: 'Leap up ladder event - guest',
    image: require('./assets/images/gallery/leapup_ladder.jpg'),
  },
  {
    name: 'Leap up ladder event - discussion',
    image: require('./assets/images/gallery/leapup_ladder_1.jpg'),
  }
];
export default class Gallery extends Component {
    constructor(props){
        super(props)
        this.state={
            back:false
        }
    }

    backButton=()=>{
        this.setState({
            back:true
        })
    }
  render() {
    if(this.state.back){
        return <HomePage navigation={this.props.navigation}/>
    } else {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Icon style={styles.icon} name='arrow-back' onPress={this.backButton} />
          </Left>
          <Body>
            <Title style={styles.headerText}>Gallery</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{ flex: 1, padding: 12 }}>
            <View>
            <DeckSwiper
                ref={(c) => this._deckSwiper = c}
                dataSource={cards}
                renderItem={item =>
                <Card style={{ elevation: 3 }}>
                    <CardItem cardBody>
                      <Image style={{ height: 300, flex: 1 }} source={item.image} />
                    </CardItem>
                    <CardItem>
                      <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text>{item.name}</Text>
                    </CardItem>
                </Card>
                }
            />
            </View>
            <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
              <Button style={{backgroundColor: '#0099cc'}} iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                <Icon name="arrow-back" />
                <Text>Swipe Left</Text>
              </Button>
              <Button style={{backgroundColor: '#0099cc'}} iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                <Text>Swipe Right</Text>
                <Icon name="arrow-forward" />
              </Button>
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
