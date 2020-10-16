import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
 import DiscoverList from './DiscoverList'
import {FontAwesome, Octicons,EvilIcons, Ionicons, Feather} from "@expo/vector-icons";
import Post from './Post'


const Stack = createStackNavigator()
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Discover" 
         component={ DiscoverList }

    options={{
      headerLeft:()=>(
        <FontAwesome 
        name="th"
        size={25}
        color="black"
        style={styles.dailIcon}
        />
      ),
      headerRight:()=>(
        <Octicons
        name="search"
        size={25}
        color="black"
        style={styles.search}
        />
      ),
      headerTitleStyle:{
        fontSize:25,
        fontFamily:'Gill Sans',
      },
      headerStyle:{
        backgroundColor:"#ffe4e1"
      }
       

    }}
      /> 


<Stack.Screen options={{
   title: 'Beauty',
 headerBackTitleVisible: false,
  headerTitleAlign:'left',
  headerStyle:{
    backgroundColor:"#ffe4e1"
  },
  headerTitleStyle:{
    fontSize:25,
    fontFamily:'Gill Sans',
  },
   headerRight:()=>(
<View style={styles.icons}>
  <Feather style={styles.singleIcon} name="headphones" size={25} color="black" />
  <EvilIcons name="heart" style={styles.singleIcon} size={32} color="black" />
  <EvilIcons style={styles.singleIcon} name="share-google" size={32} color="black" />
</View>
)}} name="post" component={Post}/>
      

      </Stack.Navigator>
      </NavigationContainer>
    
  );
}
 



const styles = StyleSheet.create({
  icons:{
    flexDirection:"row",
  },
  singleIcon:{
    marginHorizontal:10,
  },
   
  dailIcon:{
     left:20,
  },
  search:{
        right:20
  },
});