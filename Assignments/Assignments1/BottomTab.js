import {View,Text, FlatList,Image,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SliderScreen from './SliderScreen';
import SearchScreen from './SearchScreen';
import DividerScreen from './DividerScreen';
import Ionicons from "@expo/vector-icons/Ionicons";



const Tab =createBottomTabNavigator()

export default function BottomTab()
{
    return(
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Sliders" component={SliderScreen} options={
                {tabBarLabel:"Slider",
            tabBarActiveTintColor:"blue",
            tabBarInactiveTintColor:"gray",
            tabBarIcon : ({color})=> <Ionicons name="albums" size={20} color={color}/>,
        }
            }/>
            <Tab.Screen name="Search" component={SearchScreen}
            options={
                {tabBarLabel:"Search",
            tabBarActiveTintColor:"blue",
            tabBarInactiveTintColor:"gray",
            tabBarIcon : ({color})=> <Ionicons name="search" size={20} color={color}/>,
        }
            }/>
            <Tab.Screen name="Divider" component={DividerScreen}
            options={
                {tabBarLabel:"Divider",
            tabBarActiveTintColor:"blue",
            tabBarInactiveTintColor:"gray",
            tabBarIcon : ({color})=> <Ionicons name="list" size={20} color={color}/>,
        }
            }/>

        </Tab.Navigator>
    </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
    },
    imageContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    titleContainer: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitleContainer: {
        fontSize: 16,
        color: 'gray',
    },
});