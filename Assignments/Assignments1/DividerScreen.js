import {View,Text,StyleSheet,FlatList} from'react-native';



export  default function DividerScreen(){

    const items=Array.from({length:20},(_,index)=>`Item ${index+1}`)
    return(
        <View style={styles.Container}>
            <FlatList
            data={items}
            renderItem={({item})=>{
                return(
                    <View style={styles.itemContainer}>
                    <View style={styles.Items}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                    <View stle={styles.divider}/>
                    </View>
                )
            }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
        
    },
    itemContainer:{
        flexDirection:"column",
    },
    Items:{
        borderColor:"black",
        borderWidth:2,
        borderRadius:8,
        margin:10,
        paddingVertical:10,
        backgroundColor:"lightblue"
    },
    text:{
        fontSize:20,
        
    },
    
})