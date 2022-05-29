import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image,
    TouchableWithoutFeedback,Platform,
    Alert,} from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from "expo-image-picker";

function ImageInput({imageUri, onChangeImage}) {
  const [image, setImage] = useState(null)

    useEffect(() => {
        requestPermission();
      }, []);
    
      const requestPermission = async () => {
        if (Platform.OS !== 'web') {
          const {status} = await
          ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert("You need to enable permission to access the library.")
          }
        }
        // const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        // if (!granted) alert("You need to enable permission to access the library.");
      };
    
      const handlePress = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4,3],
          quality: 1,
        });

        console.log(result);

        if(!result.cancelled) {
          setImage(result);
        } else if (result.cancelled){
          console.log(result.cancelled)
        } else {
           Alert.alert("Delete", "Are you sure you want to delete this image?", [
            { text: "Yes", onPress: () => onChangeImage(null) },
            { text: "No" },
          ]);
        }
         
      };

      // const selectImage = async () => {
      //   try {
      //     const result = await ImagePicker.requestMediaLibraryPermissionsAsync({
      //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
      //       quality: 0.5,
      //     });
      //     console.log(result)
      //     if (!result.cancelled) onChangeImage(result.uri);
      //   } catch (error) {
      //     console.log("Error reading an image", error);
      //   }
      // };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.container}>
      {!imageUri && (
      <MaterialCommunityIcons 
      name="camera" 
      size={40}
      color={colors.medium}
      />
      )}
{image && <Image source={{uri: image}} style={styles.image} /> }
  </View>       
   </TouchableWithoutFeedback>

  )
  
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.light,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      width: 100
  }, 
  image: {
      width: '100%',
      height: '100%'
  }
});

export default ImageInput;