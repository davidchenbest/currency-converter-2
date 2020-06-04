import React from 'react'
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, Keyboard,TouchableWithoutFeedback} from 'react-native';


export default function Header({navigation, title}){
    const openMenu =()=>{
        navigation.openDrawer()
    }
    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.container}>
                <TouchableOpacity onPress={openMenu}>
                    <Image style={styles.nav} source={require('../assets/nav.png')}  />
                </TouchableOpacity>            
                    <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

const styles = StyleSheet.create({
    container:{
        
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        
        

    },
    nav:{
        height:30,
        width:30
    },  
    title:{
        marginLeft:20,
        fontWeight:'bold',
        fontSize:20
    }

})