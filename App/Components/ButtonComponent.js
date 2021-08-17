import React from 'react';

import {StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../StyleSheets/colors'

function ButtonComponent ({title, onPress, color = "primary", size, radius, fontSize}) { 
return ( 
<TouchableOpacity style={[styles.viewButton, {backgroundColor: colors[color]}, {width: size, borderRadius: radius}]} onPress={onPress}>
  <Text style={[styles.text, {fontSize: fontSize}]}>{title}</Text>
</TouchableOpacity>
);
}

const styles = StyleSheet.create({
    viewButton: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        textAlign: "center",
        padding: 15,
        marginVertical: 10,
        
    },
    text: {
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: "center",

    }
})
export default ButtonComponent