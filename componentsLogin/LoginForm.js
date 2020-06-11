import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from './Logo'
import emailAndPassword from './EmailAndPassword';
import EmailAndPassword from './EmailAndPassword';

class LoginForm extends Component {
    render () {
        return (
            <View style={StyleSheet.container}>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>

                <View style={styles.emailAndPassword}>
                    <EmailAndPassword />
                </View>
            </View>
        );
    }
   
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    emailAndPassword: {
        flex: 1,

    }
});

export default LoginForm;

