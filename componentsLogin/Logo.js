import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Logo = () => {
    return (
        <View style={StyleSheet.container}>
            <Image source={{uri:'https://i.pinimg.com/236x/ba/65/e4/ba65e441ea8ec829912b6c69f2801935--grocery-shopping-lists-trolley.jpg'}} 
                style={styles.logoImage}
            />

            <Text style={styles.textLogo}>Smart Grocery</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
        
    },
    textLogo: {
        fontSize:30,
        fontWeight: 'bold',
        color: 'coral',
        marginTop: 10,
    },
    logoImage: {
        height: 150, 
        width: 150,
        alignSelf: 'center',
    }
});

export default Logo;