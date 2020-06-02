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
            selected = 'USD'
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
          
          <TextInput placeholder='Amount' style={styles.textInput} 
            onChangeText={ (val)=> setNum(val) }
          />
          <Button title='Submit' onPress={getResult} />
        
          <TouchableOpacity  onPress={goSelected} style={styles.base}>
                <Text style={styles.baseText}>Base: {props.navigation.getParam('selected')? props.navigation.getParam('selected'): 'CAD'}</Text>
          </TouchableOpacity>

  <Text>result {result}</Text>
      </View>
      
    
  );
}
const styles =StyleSheet.create({
    container:{
        marginHorizontal:10
    },
    textInput:{
        borderWidth:1,
        borderColor:'black',
        height:40,
        padding:5,
        fontSize:25
        
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
        
    }
})