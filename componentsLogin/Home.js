import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase'
import LoginForm from './LoginForm';
import Articles from './Articles';
import Loading from './Loading';
import Routes from '../components/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers'

//create component
class Home extends Component {

    state={
        loggedIn:null
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
                    loggedIn: false
                })
            }
        })

          
    }

    renderContents = () => {
        

        switch(this.state.loggedIn) {
            case false:
                return  <View style={styles.container}>
                            <LoginForm />
                        </View>
            
            case true:
                return <Routes />
                       
                

                default:
                    return <Loading />
        }
    }

    render () {
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;