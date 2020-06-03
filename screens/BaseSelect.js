import React, { useState } from "react";
import { View, Text,StyleSheet,TouchableOpacity } from "react-native";

export default function BaseSelect (props){
    
    
    
    const [base, setBase] = useState([
        {b:'USD',checked:false},
        {b:'CAD',checked:false},
        {b:'CNY',checked:false},
    ])

    const select = (x) =>{
        props.navigation.navigate('SingleConvert',{base:x})
    }

    return(
        <View>
            {base.map((x, i )=> <TouchableOpacity style={styles.individual} key={i} onPress={()=>select(x.b)}><Text  style={styles.font}  >{x.b}</Text></TouchableOpacity>)}
        </View>
    )
}

const styles = StyleSheet.create({
    individual:{
        height:40,
        backgroundColor:'lightgray',
        margin:5,
        justifyContent:'center',
        alignItems:'center'

    },
    font:{
        fontSize:20
    }
})