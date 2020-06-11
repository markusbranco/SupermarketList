import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
//import Routes from './components/Routes';
import Routes from './components/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'



class App extends Component {
    render() {

        const state = createStore(reducers,{},applyMiddleware(ReduxThunk))

        return (
            <Provider store={state}>
                
                    <Routes />
                
            </Provider>
            
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//Make this component available to the app
export default App;