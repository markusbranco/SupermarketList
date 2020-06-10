import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {createNewItem} from '../actions';
import {connect} from 'react-redux';

//Create component
class CreateItem extends Component {
    
    state={
        name: "",
    }

    submit = () => {
        this.props.createNewItem(this.state.name)
        this.setState({
            name:''
        })
        this.props.navigation.navigate('NavStack')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Add new item</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Item Name" 
                    onChangeText={name => this.setState({name})} value={this.state.name}
                />
                <Button title="Add" onPress={this.submit} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 30,
    },
    input: {
        marginTop: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
});

export default connect(null, {createNewItem}) (CreateItem);