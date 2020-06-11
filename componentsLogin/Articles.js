import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

class Articles extends Component {
    render () {
        return (
            <View style={StyleSheet.container}>
                <Text>Articles Screen - Welcome </Text>
                <TouchableOpacity stle={{padding:20}} onPress={() => firebase.auth().signOut()}>  
                    <Text style={{color:'#1B9CFC'}}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
   
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
     
    },
});

export default Articles;