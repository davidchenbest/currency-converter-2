import React, { useState, useEffect } from "react";
import { TouchableWithoutFeedback, Keyboard, View, Text, Button, Modal,SafeAreaView,StyleSheet,TextInput,TouchableOpacity,Image } from "react-native";




export default function MultiConvert (props){
    const [baseVisible, setBaseVisible] = useState(false);
    const [visible, setVisible] = useState({v:false, updates: 0});
    const [result, setResult] = useState([]);
    const [base, setBase] = useState([
        {b:'USD', name:'US Dollar', checked:false},
        {b:'CAD', name:'Canadian Dollar', checked:false},
        {b:'CNY', name:'Chinese Yuan', checked:false},
        {b:'EUR', name:'Euro', checked:false},
        {b:'JPY', name:'Japanese Yen', checked:false},
        {b:'HKD', name:'Hong Kong Dollar', checked:false}
    ])
    const [selected, setSelected] = useState([
        {b:'USD', name:'US Dollar', checked:false},
        {b:'CAD', name:'Canadian Dollar', checked:false},
        {b:'CNY', name:'Chinese Yuan', checked:false},
        {b:'EUR', name:'Euro', checked:false},
        {b:'JPY', name:'Japanese Yen', checked:false},
        {b:'HKD', name:'Hong Kong Dollar', checked:false}
    ])
    const [num, setNum] = useState(0)

    const [currentBase, setCurrentBase] = useState('USD');

    const getBase=()=>{
        for(let i=0; i< base.length; i++){
            if( base[i].checked ) return base[i].b
        }
        return 'USD'
    }

    const clearBase=()=>{
        let arr = base
        for(let i=0; i<arr.length; i++){
            if(arr[i].checked) {
                arr[i].checked = false
            }
        }
        setBaseVisible(!baseVisible)
    }

    const toggleBaseModal =(x,i)=>{
        setBaseVisible(!baseVisible)
        let arr = base;
        arr[i].checked= !arr[i].checked
        setBase(arr)
        setCurrentBase(arr[i].b)
        
        
    }

    const chooseSelected =(x,i)=>{        
        let arr = selected;
        arr[i].checked= !arr[i].checked
        setSelected(arr)
        setVisible({v:true, updates: setVisible.updates++})
    }

    const getSelected = ()=>{
        let arr =[]
        selected.forEach((x)=>{
            if(x.checked){
                arr.push(x)
            }
        })
        return arr
    }

    const getResult =()=>{
        let selectedBase = getBase();
        let api = `https://api.exchangeratesapi.io/latest?base=${selectedBase}`
        let ss = getSelected();  
        let arr = []       

        if(ss.length > 0){
           fetch(api).then(x => x.json()).then(
            data => {
                ss.forEach((x)=>{
                    arr.push({b:x.b, c: data.rates[x.b] * num})
                })
                setResult(arr)
            }
        )  
        }
        else{
            setResult([{b:'none',c:0}])
        }
    }  

    const generateBase =(x,i) => {  
        if(x.checked)return <TouchableOpacity key={i} onPress={()=>toggleBaseModal(x,i)} style={{...styles.individual, backgroundColor:'lightgreen'}} ><Text style={styles.font}>{x.name}</Text></TouchableOpacity>
        return <TouchableOpacity key={i} onPress={()=>toggleBaseModal(x,i)} style={styles.individual} ><Text style={styles.font}>{x.name}</Text></TouchableOpacity>
    }

    const generateSelected = (x,i) => {
        if(x.checked)return <TouchableOpacity key={i} onPress={()=>chooseSelected(x,i)} style={{...styles.individual, backgroundColor:'lightgreen'}} ><Text style={styles.font}>{x.name}</Text></TouchableOpacity>
        return <TouchableOpacity key={i} onPress={()=>chooseSelected(x,i)} style={styles.individual} ><Text style={styles.font}>{x.name}</Text></TouchableOpacity>
    }

    return(
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}> 
                <TouchableOpacity onPress={clearBase} style={styles.btn} ><Text style={styles.font}>Base: {currentBase}</Text></TouchableOpacity>
                
                        
                <Modal visible={baseVisible} animationType ='slide' >
                    <View style={styles.modal}>
                        {base.map(generateBase)}
                    </View>                
                </Modal>
                
                <Modal visible={visible.v} animationType ='slide' >
                    <View style={styles.modal}>
                        <TouchableOpacity onPress={()=>setVisible({v:!visible.v, updates: setVisible.updates++})}>
                            <Image style={styles.back} source={require('../assets/back.png')}  />
                        </TouchableOpacity> 
                        
                        {selected.map(generateSelected)}
                    </View>
                    
                </Modal>

                
                
            

                <TextInput placeholder='Amount' style={styles.textInput} keyboardType='numeric'
                onChangeText={ (val)=> setNum(val) }
            />

                <TouchableOpacity onPress={()=>setVisible({v:!visible.v, updates: setVisible.updates++})} style={styles.btn}><Text style={styles.font}>Select</Text></TouchableOpacity>
                <View>
                    <Text>Result:</Text>
                    {result.map((r,i )=><Text key={i} style={styles.font}>{r.b}: {r.c}</Text>)}
                </View>
                <Button title='Submit' onPress={getResult} />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:20,
        marginVertical: 20
    },
    modal:{
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
    individual:{
        height:40,
        backgroundColor:'lightgray',
        margin:5,
        justifyContent:'center',
        alignItems:'center'

    },
    btn:{
        marginTop:5,
        marginBottom:5,
        justifyContent:'center',
        height:40,
        backgroundColor:'lightgray',
        padding:5,
    },
    font:{
        fontSize:20
    },
    back:{
        height:25,
        width:25,
        margin:10
    }
})