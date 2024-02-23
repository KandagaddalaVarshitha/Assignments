import {View,Button,StyleSheet,Text} from 'react-native';
import { useState } from 'react';
export default function Counter()
{
    
    const [counter,SetCounter]=useState(0);

    const handleCounter=(action)=>{
        if(action==='increment' )
        {
            SetCounter(counter+1)
        }
        if(action==='decrement' &&counter>0)
        {
            SetCounter(counter-1)
        }
    }
    return(
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
            
            <Button title="+" color="green" onPress={()=>handleCounter('increment')}/>
            <Text style={styles.text}>Count= {counter}</Text>
            <Button title="-" color="red" onPress={()=>handleCounter('decrement')} />
            
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    
    buttonContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"wheat",
        
        
    },
    button:{
        flexDirection:"row",
        columnGap:30,
        backgroundColor:"white",
        shadowColor:"blue",
        shadowOffset:{
            width: 0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:20,
        padding:20,
        width:240,
       
    },
    text:{
        fontSize:20,
        fontStyle:"italic",
        fontWeight:"bold",
        textAlign:"center",
        
    }
    
    
})