import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {editItem} from '../actions';
import {connect} from 'react-redux';

//Create component
class EditItem extends Component {
    
    state={
        name: this.props.navigation.state.params.name,
        key: this.props.navigation.state.params.key,
    }

    submit = () => {
       this.props.editItem(this.state.name, this.state.key)

       this.setState({
           name: "",
           key: ""
       })

       this.props.navigation.navigate("Itens")
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Update Item</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Item Name" 
                    onChangeText={name => this.setState({name})} value={this.state.name}
                />
                <Button title="Update" onPress={this.submit} />
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

export default connect(null, {editItem}) (EditItem);