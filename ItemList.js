import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, SafeAreaView } from 'react-native';

import { ItemList, Divider } from 'react-native-elements';
import { addItem, getItems } from './api/ItemApi'
import { registerRootComponent } from 'expo';
import MyRootComponent from './MyRoot';


class ItemList extends component {
    
    state = {
        itemList: [],
        currentItem: null,
    }

    onItemAdded = (item) => {
        console.log("Food Added");
        console.log(item);
    }

    onItemsReceived = (itemList) => {
        console.log(itemList);
        this.setState(prevState => ({
            itemList: prevState.itemList = itemList
        }));
    }

    componentDidMounted() {
        getItems(this.onItemsReceived)
    }

    render() {
        return (
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    placeholder="Add Item"
                    value={this.state.currentItem}
                    onChangeText={(text) => this.setState(prevState => ({
                        currentItem: prevState.currentItem = text
                    }))
                }/>
                <Button 
                    title='Submit'
                    style={styles.button}
                    onPress={ () => 
                    addItem (
                        {
                            name: this.state.currentItem
                        },
                        this.onItemAdded
                    )
                    }
                 />   


            </View>

        )




    }
}




