import React from 'react';
import { Container, Header, View,  Text, Icon,
    Left, Body, Title, Right, Footer, FooterTab,  Content } from 'native-base';
import styles from './common';
import HomePage from './homepage';
import Pdf from 'react-native-pdf';
 
export default class Calender extends React.Component {
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
        const source = require('./assets/calender.pdf');
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
                    <Title style={styles.headerText}>Calender</Title>
                </Body>
                <Right />
                </Header>
                <Content contentContainerStyle={{ flex: 1}}>
                    <View style={styles.pdfcontainer}>
                        <Pdf
                            source={source}
                            onLoadComplete={(numberOfPages,filePath)=>{
                                console.log(`number of pages: ${numberOfPages}`);
                            }}
                            onPageChanged={(page,numberOfPages)=>{
                                console.log(`current page: ${page}`);
                            }}
                            onError={(error)=>{
                                console.log(error);
                            }}
                            style={styles.pdf}/>
                    </View>
                </Content>
                <Footer>
                <FooterTab style={styles.footer}>
                    <Text style={styles.footerText}>Bengaluru Marathi</Text>
                </FooterTab>
                </Footer>
            </Container>
            
        )
    }
  }
}
