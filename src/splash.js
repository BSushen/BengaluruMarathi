/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
    Component
  } from 'react';
  import {
    StyleSheet,
    View,
    Animated,
    Dimensions
  } from 'react-native';
  import HomeDrawer from './homedrawer';

  const h = Dimensions.get('window').height;
  const height = h * 2; 

  export default class Splash extends Component {

    circle = new Animated.Value(0);
    logoImage = new Animated.Value(0);
    logoText = new Animated.Value(0);

    constructor(props){
        super(props)
        this.state={
          showHomeDrawer: false
        }
      }

    componentWillMount(){
        setTimeout(()=>{
            this.setState({
                showHomeDrawer: true
            })
        }, 5000)
    }

    componentDidMount(){
        Animated.sequence([
            Animated.timing(this.circle, {
                toValue: 1,
                duration: 2000
            }),
            Animated.timing(this.logoImage, {
                toValue: 1,
                duration: 900
            }),
            Animated.timing(this.logoText, {
                toValue: 1,
                duration: 900
            })
        ]).start();
    }

    render() {
        const translateY = this.circle.interpolate({
            inputRange: [0, 1],
            outputRange: [-height, 0]
        });
        const tranY = this.logoImage.interpolate({
            inputRange: [0, 1],
            outputRange: [-h, 0]
        });
        const opacity = this.logoText.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        if(this.state.showHomeDrawer){
            return <HomeDrawer />
        } else {
            return ( 
            <View style={styles.container}>
                <Animated.Image
                    style={[ styles.logo, { transform: [{translateY: tranY}] }]}
                    source={require('./assets/images/splash_logo.png')}
                    />
                <Animated.View style={[styles.circle, { transform: [{translateY}] } ]} />
                <Animated.Text style={{color:'#ff6600',
                                fontSize: 30,
                                fontWeight: 'bold',
                                opacity }}>Bengaluru Marathi</Animated.Text>
            </View>
            )
        }
      };
  }
  
  const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    circle:{
        width: height,
        height,
        backgroundColor: '#e6f7ff',
        borderRadius: h,
        position: 'absolute',
        zIndex: -1
    },
    logo: {
        width: 200, 
        height: 200,
    }
});
  
  