import React from 'react';
import { View, StyleSheet} from 'react-native';
import AppTextHeader from '../AppTextHeader';
import AppText from '../AppText';
import ButtonComponent from '../ButtonComponent';
import { Image } from "react-native-expo-image-cache";
import Amplify from 'aws-amplify';
import awsconfig from '../../../amplifyaws-exports';

import { withAuthenticator, S3Image } from 'aws-amplify-react-native';
Amplify.configure(awsconfig)

import colors from '../../config/colors'

function RecipeCard({image, header, description, tags}) {
  return (
    <>
    <View styles={styles.container}>
    <Image uri={image} style={styles.image}/>
    <View style={styles.container}>
    <AppTextHeader header={header} />
    <AppText>{description}</AppText>
    <AppText>{tags}</AppText>
    <ButtonComponent title="Get Recipe" size={120} radius={5} fontSize={12} color="primary" />

    </View>
    </View>
</>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      marginBottom: 20,
      overflow: 'hidden',
      padding: 20,
      borderBottomStartRadius: 10,
      borderBottomEndRadius: 10,

    },
    firstContainer: {
        width: 200,
        justifyContent: 'flex-start',
        alignSelf: 'auto',
      },
  image: {
    width: '100%',
    height: 200,


  },
  button: {
      width: "50%"
  }
});

export default withAuthenticator(RecipeCard);