

import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import {} from '@expo/vector-icons'

function Discover({ name, read, profile, author, image, text, navigation }) {
  return (
    
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('post', {name: name, read, profile, author, image, text}) }>
        <View style={styles.listContainer}>
       
       <Image source={image} style={styles.images} />

        <View style={styles.textContainer}>
       <Text style={styles.name}>{name}</Text>
       
        <View style={styles.info}>
        <Image source={profile} style={styles.profile}/>
        <Text style={styles.author}>{author} </Text>
       <Text style={styles.read}>{read}</Text>  
       </View> 
      
     </View> 
     </View>
        </TouchableOpacity>
      
     
    </View>
  
  );
}
export default Discover;

const styles = StyleSheet.create({
  container: {
    flexDirection:"column",
    marginTop:15,
    marginHorizontal:20
      
  },

   listContainer: {
     backgroundColor: "white",
       left:5,
       width: 382,
      flexDirection: 'row',
      marginBottom:15
   
   },
    textContainer: {
      flexDirection:"column",
      marginRight:83
    
    },
   images: {
    height: 120,
     width: 100,
     position: 'relative',
     right:10
     
   },
   name: {
     marginHorizontal: 2,
     color: "black",
     fontSize: 22,
     fontWeight: '400',
     fontWeight:"bold",   
     fontFamily:"Arial Rounded MT Bold" 
   },

   read: {
     color: "#BEB8C7",
     position: 'relative',
     alignSelf:"flex-end",
     
    
     
   },
   author: {
    color: "#BEB8C7",
    position: 'relative',
    fontWeight:"bold", 
    top :5,  
  },
  
   profile: {
     width: 21,
     height: 21,
     borderRadius: 50,
     marginRight:10
   },

   info:{
       flexDirection: 'row',
       position: 'relative',
       marginTop:17
   }
});
