//import * as React from 'react';
import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import firebase from 'firebase';

import Header from './components2/header';
import ListItem from './components2/marketListItem';
import AddMarketItem from './components2/addMarketItem';
import { render } from 'react-dom';

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

    //Connection with Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyCvkkoMzpxFtI-GusQ-bkHAXxlEtbfoi-E",
      authDomain: "marketlistdatabase.firebaseapp.com",
      databaseURL: "https://marketlistdatabase.firebaseio.com",
      projectId: "marketlistdatabase",
      storageBucket: "marketlistdatabase.appspot.com",
      messagingSenderId: "826105787304",
      appId: "1:826105787304:web:251379c8944a632b7ea39d",
      measurementId: "G-FPR5221P5R"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    
    //firebase.analytics();

    firebase.database().ref('item').on('value', (data) => {
      console.log(data.toJSON);
    })

    setTimeout(() => {
      firebase.database().ref('items/002').set(
        {
            item: "apple"
        }
      ).then(() => {
        console.log('inserted');
      }).catch((error) => {
        console.log(error)
      });
    }, 5000);
    
    


  if (fontsLoaded == true) {
    return (
    
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss()
          console.log('dismiss keybird')
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
