import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import HomeStack from './stacks/homeStack'
import multiConvertStack from './stacks/multiConvertStack'

const Drawer = createDrawerNavigator({
    Single:{
        screen:HomeStack
    },
    Multi:{
        screen:multiConvertStack
    }
})


export default createAppContainer(Drawer)