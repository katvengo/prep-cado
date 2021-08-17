import React, {useState} from 'react';

import {View, StyleSheet, Modal, Button, SafeAreaView, FlatList} from 'react-native'
import AppText from '../Components/AppText'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Screen from '../Screens/Screen'
import PickerItem from './PickerItem';

function AppPicker ({icon, items, placeholder, onSelectItem, selectedItem }) { 
    const [modalVisible, setModalVisible] = useState(false)
return ( 
    <>
    <TouchableWithoutFeedback
    onPress={() => setModalVisible(true)}>
    <View style={styles.container}> 
    {icon &&  ( <MaterialCommunityIcons 
    name={icon} 
    size={20} 
    color={colors.medium} 
    style={styles.icon}
    />
    )}
    {selectedItem ? ( 
    <AppText style={styles.text}>{selectedItem.label}</AppText> 
    ) : ( 
    <AppText style={styles.placeholder}>{placeholder}</AppText> )}
    
    <MaterialCommunityIcons 
    name="chevron-down" 
    size={20} 
    color={colors.medium} 
    />
    </View>
    </TouchableWithoutFeedback>
    <Modal
    visible={modalVisible} animationType="slide">
<Screen>
<Button title="Close" onPress={() => setModalVisible(false)}/>
<FlatList 
data={items}
keyExtractor={item => item.value.toString()}
style={styles.flat}
renderItem={({item} ) => 
    <PickerItem
    item={item}
    label={item.label}
    onPress={() => {
        setModalVisible(false)
        onSelectItem(item)
    }}
    />
}
/>
    </Screen>    
    </Modal>

</>
);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        color: colors.dark
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
    flat: {
        backgroundColor: colors.light,
        flex: 1,
        color: colors.black
    },
    picker: {
        color: colors.medium
    },
    placeholder: {
        color: colors.medium,
        flex: 1
    }
})
export default AppPicker