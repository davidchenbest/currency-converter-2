import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import MultiConvert from '../screens/multiConvert'

const screens ={
    MultiConvert:{
        screen:MultiConvert
    }
}

const MultiConvertStack = createStackNavigator(screens)

export default createAppContainer(MultiConvertStack)