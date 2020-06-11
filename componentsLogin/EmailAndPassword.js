import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import Loading from './Loading';

class EmailAndPassword extends Component {

    state={
        email:'',
        password:'',
        error:'',
        loading:false
    }

    onBottomPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onLoginSucess)
        .catch(err => {
            this.setState({
                error:err.message
            })
        })
    }

    onLoginSucess = () => {
        this.setState({
            error:'',
            loading:false
        })
    }

    render () {
        return (
            <View style={StyleSheet.container}>
                <TextInput 
                    placeholder="Email"
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                />
                <TextInput 
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password=> this.setState({password})}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onBottomPress}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.errorText}>
                        {this.state.error}
                </Text>
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    input: {
        height: 40,
        width: 400,
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: '#EAECEE',
        fontSize: 15,
        textAlign: 'center',
    },
    errorText: {
        fontSize: 20,
        color:'red',
        marginTop: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonContainer: {
        backgroundColor: '#2ECC71',
        padding: 15,
        borderRadius: 5
    },
});

export default EmailAndPassword;