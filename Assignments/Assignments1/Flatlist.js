import { FlatList,View,Text,StyleSheet,Image ,SafeAreaView,StatusBar} from "react-native";


 const PokemonData=[
    {
        "id":"1",
        "title": "Pokemon",
        "subtitle" : "Mew",
        "image" : require("../assets/mew.png")
    },
    {
        "id":"2",
        "title": "Pokemon",
        "subtitle" : "Persian",
        "image" :require("../assets/persian.png")
    },
    {   "id":"3",
        "title": "Pokemon",
        "subtitle" : "Shnix",
        "image" : require("../assets/shnix.png")
    },
    {
        "id":"4",
        "title": "Pokemon",
        "subtitle" : "Skitty",
        "image" : require("../assets/skitty.png")
    }

];

export default function Flatlist()
{
    return(
        <View>
            <Text style={styles.text}>Pokemon Data</Text>
            <FlatList     
            data={PokemonData}
            renderItem={({item})=>
        {
            return(
                
                <View  key={item.id}>
                    <View style={styles.imageContainer}>
                   <Image style={styles.image} source={(item.image)} />
                   <View style={styles.textContainer}>
                    <Text style={styles.titleContainer}>Title:{item.title}</Text>
                    <Text style={styles.subtitleContainer}>SubTitle:{item.subtitle}</Text>
                    </View>
                    </View>
                </View>
               
            )
        }}
        ListEmptyComponent={<Text>No Data</Text>}
        ListFooterComponent={<Text style={styles.footer}>End of List</Text>}
            /></View>
       
    )
}
const styles=StyleSheet.create({

    text:{
        fontSize:28,
        fontWeight:"bold",
        fontStyle:"italic",
        textAlign:"center",
    },

    
    imageContainer:{
        flexDirection:"row",
        padding:28,
        borderBottomWidth:3,
        borderBottomColor:"black",
        marginBottom:10,
        backgroundColor:"lightblue"
        
    },
    image:{
        width:190,
        height:190,
        borderRadius:4,
        marginRight:12,
        marginTop:15,
    },
    textContainer:{
        flex:1,
        
    },
    titleContainer:{
        fontSize:15,
        fontWeight:"bold",
        alignSelf:"center",
        marginTop:34,
        
    },
    subtitleContainer:{
        fontSize:14,
        alignSelf:"center",
        marginTop:34,
    },
    footer:{
        textAlign:"center" , 
        marginBottom:35,
        fontSize:22
    }
    

})