import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
//import Routes from './components/Routes';
import Routes from './components/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'

import firebase from 'firebase'
import LoginForm from './componentsLogin/LoginForm';
import Articles from './componentsLogin/Articles';
import Loading from './componentsLogin/Loading';



class App extends Component {
    
    state={
        loggedIn:true
    }

    componentDidMount() {
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

          firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.setState({
                    loggedIn: true
                })
            }else {
                this.setState({
                    loggedIn: true
                })
            }
        })

    }

    renderContents = () => {
        switch(this.state.loggedIn) {
            case false:
                return <LoginForm />
            
            case true:
                return <Routes />

                default:
                    return <Loading />
        }
    }

    render() {

        const state = createStore(reducers,{},applyMiddleware(ReduxThunk))

        return (
            <Provider store={state}>
                {this.renderContents()}
            </Provider>
            
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
       /* flex: 1,
        justifyContent: 'center',
        alignItems: 'center',*/
    },
});

//Make this component available to the app
export default App;