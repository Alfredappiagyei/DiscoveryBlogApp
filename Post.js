
import React from 'react'
import { View,Text, Image, StyleSheet, ScrollView } from 'react-native'

export default function Posts({route}) {
   
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Image style={styles.image} source={route.params.image}/>
             <Text style={styles.name}>{route.params.name}</Text>

         <View style={styles.info}>
            <Image source={route.params.profile} style={styles.profile}/>
            <Text style={styles.author}>{route.params.author} </Text>
            <Text style={styles.petdetails}>{route.params.read}</Text>
       </View>            
            <Text style={styles.post} >{route.params.text}</Text>          
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      
    },
   
    
     image: {
      height: 250,
       width: 350,
       borderRadius: 5,
   
        marginTop: 15,
    alignSelf:"center"
     },

    name:{
        fontSize:22,
        fontWeight:"bold",
        marginHorizontal:25,
        marginVertical:13
    },
    profile: {
        marginHorizontal: 25,
        width: 25,
        height: 25,
        borderRadius: 50,
      },

      post:{
          marginHorizontal:25,
          marginTop:40,
          fontSize:18,
          lineHeight: 27
      },
   
   author:{
       fontWeight:"bold"
   },
   
  
    dot:{
        height:15,
        width:5,
        borderRadius:50,
        color: 'white',
        position: 'relative',
  
    },
  
    info:{
        flexDirection: 'row',
        position: 'relative',
        
    }
  });