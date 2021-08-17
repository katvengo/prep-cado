import React from 'react';

import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from '../AppText'

import colors from '../../config/colors'

import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem ({image, title, subTitle, onPress, renderRightActions}) { 
return ( 
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight
    underlayColor={colors.light}
    onPress={onPress}>

<View style={styles.container}>
<Image style={styles.image} source={image} />
<View>
    <AppText>{title}</AppText>
    <AppText>{subTitle}</AppText>
</View>

</View>    
</TouchableHighlight>
</Swipeable>

);
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    }
})
export default ListItem