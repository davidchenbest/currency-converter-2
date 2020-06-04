import React, { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

export default function BaseSelect (props){
    
    
    
    const [base, setBase] = useState([
        {b:'USD', name:'US Dollar', checked:false},
        {b:'CAD', name:'Canadian Dollar', checked:false},
        {b:'CNY', name:'Chinese Yuan', checked:false},
        {b:'EUR', name:'Euro', checked:false},
        {b:'JPY', name:'Japanese Yen', checked:false},
        {b:'HKD', name:'Hong Kong Dollar', checked:false}
        
    ])

    const select = (x) =>{
        props.navigation.navigate('SingleConvert',{selected:x})
    }

    return(
        <View>
            {base.map((x, i )=> <TouchableOpacity style={styles.individual} key={i} onPress={()=>select(x.b)}><Text  style={styles.font}  >{x.name}</Text></TouchableOpacity>)}
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