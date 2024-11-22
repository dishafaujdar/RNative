import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Flatcards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.contanier}>
        <View style={[styles.card , styles.cardRed]}>
            <Text>RED</Text>
        </View>
        <View style={[styles.card , styles.cardBlue]}>
            <Text>BLUE</Text>
        </View>
        <View style={[styles.card , styles.cardGreen]}>
            <Text>GREEN</Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    headingText:{
        fontSize:25,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    contanier:{
        flex:1,
        flexDirection:'row',
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:5,
        margin:5,
    },
    cardRed:{
        backgroundColor:'#EF5354',
    },
    cardBlue:{
        backgroundColor:'#50DBB4',
    },
    cardGreen:{
        backgroundColor:'#5DA3FA',
    },
});