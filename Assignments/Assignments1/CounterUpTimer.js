import { useEffect, useState } from 'react';
import {View,Text,StyleSheet,Button}from 'react-native';

export default function CounterUpTimer()
{
const [seconds,setSeconds]=useState(0);
const [isActive,setIsActive]=useState(false);

const Timer=(time)=>{
    const hours=Math.floor(time/3600);
    const minutes=Math.floor((time%3600)/60);
    const second=Math.floor(time%60);

    const formattedhours=hours.toString().padStart(2,0);
    const formattedminutes=minutes.toString().padStart(2,0);
    const formattedseconds=second.toString().padStart(2,0);

    return  `${formattedhours}:${formattedminutes}:${formattedseconds}`;
}

useEffect(()=>{
 
    let interval=null;
    if(isActive){
        interval=setInterval(()=>{
            setSeconds(seconds=>seconds+1);
        },1000)
    }
    else if(!isActive && seconds!==0)
    {
        clearInterval(interval)
    }
    return ()=>clearInterval(interval)

},[isActive,seconds])

const toggle=()=>{
    setIsActive(!isActive)
}
const reset=()=>{
    setSeconds(0);
    setIsActive(false);
}


    return(
        <View style={styles.Container}>
           <Text style={styles.text}>Count Up {Timer(seconds)}</Text>
           <View style={styles.buttonContainer}>
           <View style={styles.button}>
            <Button title={isActive ? 'Pause' :'Start'} onPress={toggle} />
            <Button title="Reset" onPress={reset}/>
           </View>
           </View>
        </View>
    )
}

const styles=StyleSheet.create({

    Container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        
    },
    buttonContainer:{
        alignItems:"center",
        justifyContent:"center",
        width:'90%',
        height:'30%',
        backgroundColor:"white",
        shadowColor:"black",
        shadowOffset:{
            width: 0,
            height:2
        },
        shadowOpacity:0.5,
        shadowRadius:4,
        elevation:50,
        padding:20,
        
    },button:{
        width:'70%',
        rowGap:10,
    }
})