import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Elevatedcards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevatedcards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card , styles.elevatedCard]}>
            <Text>SUNDAY ⛲ </Text>
        </View>
        <View style={[styles.card , styles.elevatedCard]}>
            <Text>MONDAY 👨‍🏭</Text>
        </View>
        <View style={[styles.card , styles.elevatedCard]}>
            <Text>TUESDAY 🕉️</Text>
        </View>
        <View style={[styles.card , styles.elevatedCard]}>
            <Text>WEDNESDAY 🛩️</Text>
        </View>
        <View style={[styles.card , styles.elevatedCard]}>
            <Text>THURSDAY 🚌</Text>
        </View>
        <View style={[styles.card , styles.elevatedCard]}>
            <Text>FRIDAY 🏢</Text>
        </View>
        <View style={[styles.card , styles.elevatedCard]}>
            <Text>SATURSDAY 🍺</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    headingText:{
        fontSize:25,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    container:{
        flex:1,
        padding:5,
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
    },
    card:{
        width:100,
        height:100,
        borderRadius:4,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        borderColor:'#000000',

    },
    elevatedCard:{
        backgroundColor:'#CAD5E3',
        elevation:4,
    },
});