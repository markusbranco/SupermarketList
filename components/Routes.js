import Itens from './Itens';
import CreateItem from './CreateItem';
import EditItem from './EditItem';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const NavStack = createStackNavigator({

    Itens: {
        screen:Itens,
        navigationOptions:() => ({
            headerTitle:"List Itens"
        })
    },

    EditItem: {
        screen:EditItem,
        navigationOptions:() => ({
            headerTitle:"Update Item"
        })
        
    },
        
})

const BottomTab = createBottomTabNavigator({
    NavStack:{
        screen:NavStack
    },
    CreateItem:{
        screen:CreateItem,
        navigationOptions:() => ({
            headerTitle:"Add Item"
        })
    },
})

export default Routes = createAppContainer(BottomTab);