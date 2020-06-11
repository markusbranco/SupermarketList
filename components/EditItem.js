import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {editItem} from '../actions';
import {connect} from 'react-redux';
import { color } from 'react-native-reanimated';

//Create component
class EditItem extends Component {
    
    state={
        name: this.props.navigation.state.params.name,
        price: this.props.navigation.state.params.price,
        key: this.props.navigation.state.params.key,
    }

    submit = () => {
       this.props.editItem(this.state.name, this.state.price, this.state.key)

       this.setState({
           name: "",
           price: "",
           key: ""
       })

       this.props.navigation.navigate("Itens")
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textContainer}>Update Item</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Item Name" 
                    onChangeText={name => this.setState({name})} value={this.state.name}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Price" 
                    onChangeText={price => this.setState({price})} value={this.state.price}
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
        borderRadius: 5,
    },
    textContainer: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'coral',
    }
});

export default connect(null, {editItem}) (EditItem);