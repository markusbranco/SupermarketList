import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {createNewItem} from '../actions';
import {connect} from 'react-redux';

//Create component
class CreateItem extends Component {
    
    state={
        name: "",
        price: "",
    }

    submit = () => {
        this.props.createNewItem(this.state.name, this.state.price)
        
        this.setState({
            name:'',
            price:''
        })
        this.props.navigation.navigate('NavStack')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textContainer}>Add new item</Text>
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
        marginTop: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    textContainer: {
        color: 'coral',
        fontWeight: 'bold',
        fontSize: 15,
    }
}); 

export default connect(null, {createNewItem}) (CreateItem);