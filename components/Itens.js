import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableHighlight } from 'react-native';
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
        console.log('Itens.js', this.props.listOfItens)
        return (
            <View style={styles.container}>
                <FlatList style={styles.flat}
                            data={this.props.listOfItens}
                            keyExtractor={(item) => item.key}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) => {
                                return (
                                    <View style={styles.viewItem}>
                                        <Text style={styles.textItem}>{item.name}</Text>
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