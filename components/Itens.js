import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import {deleteItens, getitens} from '../actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

//Create component
class Itens extends Component {

    componentDidMount() {
        this.props.getitens()
    }

    render() {
     
        return (
            <View style={styles.container}>
                <TouchableOpacity stle={{padding:20}} onPress={() => firebase.auth().signOut()}>  
                    <Text style={{color:'#1B9CFC'}}>Logout</Text>
                </TouchableOpacity>
                <FlatList style={styles.flat}
                            data={this.props.listOfItens}
                            keyExtractor={(item) => item.key}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) => {
                                return (
                                    <View style={styles.viewItem}>
                                        <Text style={styles.textItem}>{item.name}</Text>
                                        <Text style={styles.priceItem}>{item.price}</Text>
                                        <View style={styles.buttons}>
                                            <TouchableHighlight onPress={() => this.props.navigation.navigate('EditItem', {...item})}>
                                                <View style={{marginRight:15}}> 
                                                    <Icon size={30} color="white" name="edit" />
                                                </View>
                                            </TouchableHighlight>
                                            <TouchableHighlight onPress={() => this.props.deleteItens(item.key)}>
                                                <View>
                                                    <Icon size={30} color="white" name="close" />
                                                </View>
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                )
                            }}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
    },
    flat: {
        width: '100%',
        marginTop: 20,
    },
    viewItem: {
        elevation: 8,
        marginBottom: 5, 
        borderRadius: 10,
        backgroundColor: 'coral',
        padding: 20,
        flex: 1,
        
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    textItem: {
        fontSize: 20,
        lineHeight: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
    priceItem: {
        color: '#fff',
        fontSize: 15,
    }
});

function mapStateToProps(state) {
    
    const listOfItens = _.map(state.itemList.itemList, (val, key) => {
        return {
            ...val,
            key:key
        }
    })

    return {
        listOfItens
    }
}

export default connect(mapStateToProps, {getitens, deleteItens})(Itens);