import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
} from 'react-native';

function Apppro():JSX.Element{
    const isdarkmode = useColorScheme() === 'dark';
    return(
        <View style={style.Container}>
            <Text style={isdarkmode ? style.whiteText : style.darkText}>
                heloo world
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    Container:{
        flex:1,
        alignItems:'center',
    },
    whiteText:{
        color:'#FFFFF',
    },
    darkText:{
        color:'#000000',
    },
});

export default Apppro;