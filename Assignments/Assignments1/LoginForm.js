import {View,Text,TextInput,Button,StyleSheet,Image, KeyboardAvoidingView ,Platform, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function LoginForm()
{
    const [username,setUsername]=useState("");
    const [Password,setPassword]=useState("");
    const [errors,SetErrors]=useState({});
    
    const Validationform =()=>{
        let errors={}
        if(!username) errors.username="Username is required"
        if(!Password) errors.Password="Password is required"

        SetErrors(errors);
        return Object.keys(errors).length===0;
    }
    const handleSubmit=()=>{
        if(Validationform())
        {
            console.log("Submitted", username,Password)
            setUsername("");
            setPassword("");
            SetErrors({});
        }
    }

    return(
        <View  style={styles.Container}>
            <View style={styles.form}>
            <Text style={styles.text}>Login </Text>
            <Image source={require('../assets/login1.png')} style={styles.login}/>
            <Text style={styles.label}>Username</Text>
            <TextInput  
            style={styles.input}placeholder='Enter Username' 
            value={username} 
            onChangeText={setUsername} 
            />
            {
                errors.username ? <Text style={styles.errorText}>{errors.username}</Text> :null
            }
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} 
            placeholder='Enter Password' secureTextEntry
            value={Password} 
            onChangeText={setPassword}
            />
            {
                errors.Password ? <Text style={styles.errorText}>{errors.Password}</Text> :null
            }
           
            <Button title='Submit' style={styles.button} onPress={handleSubmit}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"f5f5f5",
        justifyContent:"center"
    },
    form:
    {
        backgroundColor:"white",
        shadowColor:"black",
        shadowOffset:{
            width: 0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        padding:20,
    },
    text:
    {
        
        textAlign:"center",
        fontSize:38,
        fontWeight:"bold",
        marginBottom:18
    },
    login:{
        width:150,
        height:150,
        alignSelf:"center",
    },
    label:{
        fontSize:20,
        color:"black",
        paddingBottom:3,
        marginBottom:8
    },
    input:{
        borderWidth:2,
        borderRadius:5,
        //paddingBottom:12,
        //paddingStart:10,
        padding:10,
        marginBottom:12,
    },
    button:{
        marginTop:20,
    },
    errorText:
    {
        color:"red",
        marginBottom:10,
    }
})