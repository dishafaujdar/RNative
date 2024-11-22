import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card , styles.elevatedCard]}>
        <Image  source={{
            uri:'https://media1.thrillophilia.com/filestore/btydjdcp0rq64clbrt09uuqxskdp_shutterstock_775362160.jpg?w=auto&h=600'}} style={styles.cardImg}
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardName}>Auli</Text>
        <Text style={styles.cardLocation}>Location: Uttarakhand, India </Text>
        <Text style={styles.cardDescp}>Auli ⛰️ is a beautiful hill station nestled in the Garhwal Himalayas, known as the "Skiing ⛷️ Capital of India."</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    headingText:{
        fontSize:25,
        fontWeight:'bold',
        paddingHorizontal:9,
    },
    cardBody:{
        marginHorizontal:20,
        borderRadius:3,
    },
    card:{
        width:350,
        height:350,
        marginHorizontal:20,
        marginVertical:10,
    },
    elevatedCard:{
        shadowColor:'#000000',
        elevation:5,
    },
    cardImg:{
        height:359,
        borderBottomWidth:20,
        borderRadius:5,
        borderTopLeftRadius:4,
    },
    cardName:{
        fontSize:20,
        fontWeight:'medium',
        marginLeft:20,
    },
    cardLocation:{
        fontSize:15,
        fontWeight:'light',
        marginLeft:20,

    },
    cardDescp:{
        fontSize:15,
        fontWeight:'medium',
        marginLeft:20,
        marginBottom:4,

    },

});