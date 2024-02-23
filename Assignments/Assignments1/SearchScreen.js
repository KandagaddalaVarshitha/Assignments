import{TextInput,View,Text,StyleSheet,Button} from 'react-native';
import {useState} from 'react';

export default function SearchScreen()

{
    const [search,setSearch]=useState("");
    const handleSearch=()=>{
        alert(`Searching for :${search}`)
        
    }
    const handleClear=()=>{
        setSearch("")
    }
    return(
        <View style={styles.SearchContainer}>
           <TextInput placeholder='Type to search' value={search} onChangeText={setSearch} style={styles.search1}/> 
           <View style={styles.button}>
           <Button title="Search" onPress={handleSearch}/>
           <Button title="Clear" onPress={handleClear}/>
           </View>
        </View>
    )
}
const styles=StyleSheet.create({
    SearchContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    search1:{
        borderWidth:2,
        borderRadius:8,
        padding:12,
        margin:20,
        width:'90%'
    },
    button:{
        gap:20,
        width:'50%',
        
    }
})