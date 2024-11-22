import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Contactlist() {
  const contact = [
    {
      uid:1,
      name: '👦 Abhay jadon',
      Review:'React-native is fun.',
    },
    {
      uid:2,
      name: '👧 Bhavana',
      Review:'This is mostly like the react.',
    },
    {
      uid:3,
      name: '💮 Charu',
      Review:'This is going great.',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.contanier} scrollEnabled={false}>
        {contact.map(({uid,name,Review})=>(
          <View key={uid} style={styles.userCard}>
          <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userReview}> {Review}</Text>
          </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:25,
    fontWeight:'bold',
    paddingHorizontal:9,
    marginTop:8,
},
  contanier:{
    padding:15,
    backgroundColor:'#808b96',
    marginHorizontal:9,
    marginVertical:10,
    borderRadius:5,
  },
  userCard:{
    flex:1,
    alignItems:'flex-start',
    flexDirection:'row',
    justifyContent:'flex-start',
    backgroundColor:'#CCCCFF',
    padding:3,
    marginBottom:6,
    borderRadius:5,
  },
  userName:{
    fontSize:23,
    fontWeight:'bold',
  },
  userReview:{
    fontSize:25,
    fontWeight:'semibold',
    marginBottom:4,
  },

}); 