import {View,FlatList,Text,Image,StyleSheet} from 'react-native';
const sliders=[
    {id:"1",poster:require("../assets/mew.png"),title:"Pokemon1",subtitle:"Mew"},
    {id:"2",poster:require("../assets/persian.png"),title:"Pokemon2",subtitle:"Persian"},
    {id:"3",poster:require("../assets/shnix.png"),title:"Pokemon3",subtitle:"Shnix"},
    {id:"4",poster:require("../assets/skitty.png"),title:"Pokemon3",subtitle:"Skitty"},


]

export default function SliderScreen()
{
    return(
        <FlatList     
            data={sliders}
            renderItem={({item})=>
        {
            return(
                
                <View  key={item.id}>
                    <View style={styles.Container}>
                    <Image source={item.poster} style={styles.imageContainer}/>
                    <Text style={styles.titleContainer}>Title : {item.title}</Text>
                    <Text style={styles.subtitleContainer}>SubTitle : {item.subtitle}</Text>
                </View>
                   
                </View>
               
            )
        }}
        horizontal
            />
    )
}
const styles=StyleSheet.create({
    Container:{
        flex:1,
    },
    imageContainer:{
        width:370,
        height:500,
        gap:20,
    },
    titleContainer:{

        marginStart:23,
        fontSize:24,
        fontWeight:"bold",
        fontStyle:"italic",

    },
    subtitleContainer:{
            marginStart:23,
            fontSize:20,
            fontWeight:"bold",
            fontStyle:"italic",
    
        
    }

})