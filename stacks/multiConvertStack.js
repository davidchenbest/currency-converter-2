import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import MultiConvert from '../screens/multiConvert'
import Header from './header'
import React from 'react'

const screens ={
    MultiConvert:{
        screen:MultiConvert,
        navigationOptions:(n)=>{
            return {headerTitle: ()=> <Header navigation ={n.navigation} title='Multiple Convert' />,
            
            }            
        }
    }
}

const MultiConvertStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTitleAlign: 'left',
        
    }
})

export default createAppContainer(MultiConvertStack)