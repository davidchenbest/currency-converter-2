import React, { useState } from "react";
import { View, Text } from "react-native";

export default function BaseSelect (props){
    
    
    
    const [base, setBase] = useState([
        {b:'USD',checked:false},
        {b:'CAD',checked:false},
        {b:'CNY',checked:false},
    ])

    const select = (x) =>{
        props.navigation.navigate('SingleConvert',{selected:x})
    }

    return(
        <View>
            {base.map((x, i )=> <Text key={i} onPress={()=>select(x.b)}>{x.b}</Text>)}
        </View>
    )
}