import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddMarketItem({addMarketItemHandler}) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New Item...'
                onChangeText={changeHandler}
            />
            <Button 
                title='Add Item'
                color='coral'
                onPress={() => addMarketItemHandler(text)}/>

            <TextInput
                style={styles.input}
                placeholder='New Item2...'
                onChangeText={changeHandler}
            />
            <Button 
                title='Add Item'
                color='coral'
                onPress={() => addMarketItemHandler(text)}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
        
    }
})