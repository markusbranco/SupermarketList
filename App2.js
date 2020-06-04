import * as React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

import Hello from './Hello';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {

  const [todos, setTodos] = React.useState([
    {text: 'buy coffe', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play with bolo', key: '3'}
  ]);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>
        {/* to do form*/}
        <View styles={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Text>{item.text}</Text> 
              )}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 30,
  },
  list: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 10,
  }
  
});
