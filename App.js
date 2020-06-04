//import * as React from 'react';
import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/header';
import ListItem from './components/marketListItem';
import AddMarketItem from './components/addMarketItem';
import Sandbox from './components/sandbox';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

// Set the fonts to the project
const getFonts = () =>  Font.loadAsync({
    'play-regular': require('./assets/fonts/play/Play-Regular.ttf'),
    'play-bold': require('./assets/fonts/play/Play-Bold.ttf')
  });

export default function App() {
  
  const [fontsLoaded, setFontLoaded] = useState(true);

  //Array of Market Items
  const [marketItens, setMarketItems] = React.useState([
    {text: 'buy coffe', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play with bolo', key: '3'}
  ]);

  //Delete Market itens
  const pressHandler = (key) => {
    setMarketItems((prevMarketItens) => {
        return prevMarketItens.filter(marketItem => marketItem.key != key);
    });
  }

  const addMarketItemHandler = (text) => {
    if(text.length > 3) {
      setMarketItems((prevMarketItens) => {
        return [
          {text: text, key: Math.random().toString() },
          ...prevMarketItens
        ]
      });
    } else {
      Alert.alert('OPS!', 'The new item must be over 3 char long', [
        {text: 'Ok', onPress: () => console.log('alert closed')}
      ]);
    }
    
  }

  if (fontsLoaded == true) {
    return (
    
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss()
          console.log('dismis keybird')
        }}>

          <View style={styles.container}>
            <Header />
            <View style={styles.content}>
              <AddMarketItem addMarketItemHandler={addMarketItemHandler}/>
              <View style={styles.list}>
                  <FlatList
                    data={marketItens}
                    renderItem={({ item }) => (
                      <ListItem item={item} pressHandler={pressHandler} />
                    )}
                  />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontLoaded(true)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 1,
    padding: 40,
    
  },
  list: {
    margin: 20,
    flex: 1,
  }
  
});
