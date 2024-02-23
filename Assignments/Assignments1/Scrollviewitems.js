import {SafeAreaView,Text,ScrollView,View,StyleSheet, StatusBar} from 'react-native'

export default function Scrollviewitems()
{
    const items=Array.from({length:50},(_,index)=>`Item${index+1}`);
    
    return(
        <SafeAreaView style={styles.SafeContainer}>
            <ScrollView style={styles.ScrollContainer}>
                {items.map((item,index)=>
                {
                    return(
                        <View key={index} style={styles.item}>
                            <Text style={styles.text}>{item}</Text>
                        </View>
                    )
                    }

                )}
            </ScrollView>

        </SafeAreaView>
    )
}

const styles=StyleSheet.create(
    {
        SafeContainer:{
            backgroundColor:"#fff",
            flex:1,
            paddingTop:StatusBar.currentHeight,
        },
        ScrollContainer:{
            paddingHorizontal:20,
            
        },
        item:{
            padding:10,
            borderwidth:2,
            borderColor:"black",
            borderWidth:2,
            borderRadius:8,
            borderBottomWidth:2,
            borderBottomColor:"#ccc",
            marginVertical:3,
            backgroundColor:"#f2f2f2"
        },
        text:{
            fontSize:18,
            fontStyle:"italic",
        }

    }
)