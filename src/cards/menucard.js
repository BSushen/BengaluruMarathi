import React, { Component } from 'react';
import { View, Text, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

export default class MenuCard extends Component{
    render()
    {
        return (
            <View style={styles.card}>
                <View>
                    <Icon style={styles.cardIcon} name={this.props.icon} />
                </View>
                <View>
                    <Text style={styles.cardText}>{this.props.iconName}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardText:{
        textAlign: 'center',
        color: '#0099cc'
    },
    card:{
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderColor: '#0099cc',
        borderStyle: 'solid',
        borderWidth: 2,
        width: 80,
        height: 90
    },
    cardIcon:{
        color: '#0099cc',
        marginTop: 10
    }
})