import React from 'react';

import {
    View,
    StyleSheet,
    TextInput
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'

function AppTextInput({icon, width = "100%", ...props}) {
    return ( 
    <View style={[styles.container, {width}]}> 
     {icon && (
    <MaterialCommunityIcons 
    name={icon} 
    size={20} 
    color={colors.medium} 
    style={styles.iconStyle}
    /> 
       )
      }
    <TextInput 
        placeholderTextColor={colors.medium}
        style={[defaultStyles.text, styles.textInput]} 
        {...props}
        status='success'
        multiline={true} 
        autoFocus={true}
    /> 
    </View>
        );
    }
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.light,
            borderRadius: 25,
            flexDirection: 'row',
            padding: 15,
            width: '100%',
            // marginBottom: 10
            // marginVertical: 10
        },
        iconStyle: {
            // marginRight: 10
            padding: 10,
            minWidth: 40
        },
        textInput: {
            paddingRight: '10%',
            width: '100%',
        }

    
     
    })
    export default AppTextInput