import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, TextInput} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function SingleConvert(props) {
    const [num, setNum] = useState(0)
    const [result, setResult] = useState(0)
    let rate = '' 

    const getResult =()=>{
        let base = props.navigation.getParam('base')
        let selected = props.navigation.getParam('selected')
        if(!base){
            base = 'USD'
        }
        if(!selected){
            selected = 'CAD'
        }
        let api = `https://api.exchangeratesapi.io/latest?base=${base}`
        fetch(api).then(x => x.json()).then(
            data => {
                rate = data.rates[`${selected}`];
                setResult(num * rate)
                
            }
        )        
    }   

    const goBase=()=>{
        props.navigation.navigate('BaseSelect')
        
    }
    const goSelected=()=>{
        props.navigation.navigate('Selected')
        
    }
        
  return (    
      <View style={styles.container}>
          <TouchableOpacity  onPress={goBase} style={styles.base}>
                <Text style={styles.baseText}>Base: {props.navigation.getParam('base')? props.navigation.getParam('base'): 'USD'}</Text>
          </TouchableOpacity>
          
          <TextInput placeholder='Amount' style={styles.textInput} keyboardType='numeric'
            onChangeText={ (val)=> setNum(val) }
          />
                   
        
          <TouchableOpacity  onPress={goSelected} style={styles.selected}>
                <Text style={styles.baseText}>Selected: {props.navigation.getParam('selected')? props.navigation.getParam('selected'): 'CAD'}</Text>
          </TouchableOpacity>

        <Text style={styles.result} >Result: {result}</Text>

        <Button title='Submit' onPress={getResult} />
      </View>
      
    
  );
}
const styles =StyleSheet.create({
    container:{
        marginHorizontal:20,
        marginVertical: 20
    },
    textInput:{
        borderWidth:1,
        borderColor:'black',
        height:40,
        padding:5,
        fontSize:25,
        marginTop:1
        
    },
    base:{
        borderWidth:1,
        borderColor:'black',
        height:40,
        padding:5,
        justifyContent:'center'
    },
    baseText:{
        fontSize:25,
        
    },
    result:{
        fontSize:25,
        fontWeight:'bold'
    },
    selected:{
        marginTop:20,
        borderWidth:1,
        borderColor:'black',
        height:40,
        padding:5,
        justifyContent:'center',
        
    }
})

