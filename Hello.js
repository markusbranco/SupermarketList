import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Hello extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.hello}>Hello From Hello.js</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hello: {
        backgroundColor: '#00ff00',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
    }
});