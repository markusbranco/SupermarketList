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
            headerTitle:"Food Items List"
        })
    },

    EditItem: {
        screen:EditItem,
        
    },
        
})

const BottomTab = createBottomTabNavigator({
    NavStack:{
        screen:NavStack
    },
    CreateItem:{
        screen:CreateItem
    },
})

export default Routes = createAppContainer(BottomTab);