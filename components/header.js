import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

/*export default class Hedear extends React.Component {
    render() {
       return (
            <View> style={styles.header}
                <Text style={styles.title}>Supermarket List</Text>
            </View>
        )
    }
}*/

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Supermarket List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        height: 70,
        backgroundColor: 'coral',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    }
});