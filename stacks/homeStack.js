import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SingleConvert from '../screens/singleConvert'
import BaseSelect from '../screens/BaseSelect'
import Selected from '../screens/selected'
import Header from './header'
import React from 'react'


const screens ={
    SingleConvert:{
        screen:SingleConvert,        
        navigationOptions:(n)=>{
            return {headerTitle: ()=> <Header navigation ={n.navigation} title='Single Convert' />,
            
            }            
        }
    },
    BaseSelect:{
        screen:BaseSelect,
    },
    Selected:{
        screen:Selected,
    },
    
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTitleAlign: 'left',
        
    }
})

//export default createAppContainer(HomeStack)
export default HomeStack