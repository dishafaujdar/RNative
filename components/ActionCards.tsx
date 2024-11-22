import { Linking, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react'

export default function ActionCards() {
    function Openwebsite(websitelink:string){
        Linking.openURL(websitelink);
    }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>🛸 Action Cards</Text>
      <View>
        <Text style={styles.simpletext}>How linking work in native </Text>
      </View>
        <View >
        <TouchableOpacity onPress={()=> Openwebsite('https://chatgpt.com/c/673f25ea-2170-8005-86db-ac9bb006d0cb')} ><Text style={styles.click}>click here ◀️</Text></TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFBF00',
    margin:10,
    padding:4,
    borderRadius:5,
  },
    headingText:{
        fontSize:25,
        fontWeight:'bold',
    },
    click:{
        fontSize:25,
        fontWeight:'500',
    },
    simpletext:{
        fontSize:20,
        fontWeight:'300',
    }
});