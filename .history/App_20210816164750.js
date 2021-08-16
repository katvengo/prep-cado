import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';

import Amplify from 'aws-amplify'
//import config from './src/aws-exports'
//Amplify.configure(config)
//import AWSAppSyncClient from "aws-appsync";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
