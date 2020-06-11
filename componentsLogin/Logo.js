import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Logo = () => {
    return (
        <View style={StyleSheet.container}>
            <Text style={styles.textLogo}>My Market List</Text>
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
    },
});

export default Logo;