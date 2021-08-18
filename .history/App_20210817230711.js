import React, {useState} from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import AppLoading from 'expo-app-loading'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import Amplify, { Storage } from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
// import { Auth } from 'aws-amplify';
import AWSAppSyncClient from "aws-appsync";

import { StyleSheet} from 'react-native';

import navigationTheme from './App/Navigation/navigationTheme'
import AppNavigationTab from './App/Navigation/AppNavigationTab'
import AuthNavigator from './App/Navigation/AuthNavigator'
import AuthContext from './App/Auth/context'
import authStorage from './App/Auth/storage'
import { navigationRef } from './App/Navigation/rootNavigation'

const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: config.aws_appsync_authenticationType,
    jwtToken: async () => token, 
  }
});

export default function App() {
  const [user, setUser] = useState()
  const [client, setClient] = useState()
  const [isReady, setIsReady] = useState(false);
  
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    // console.log(user, "user");
    if (user) setUser(user);
    
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onError={console.warn} onFinish={() => setIsReady(true)} />
    );

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <AuthContext.Provider value={{user, setUser}}>
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
    { user ? <AppNavigationTab /> : <AuthNavigator /> 
    }
    </NavigationContainer>  
    </AuthContext.Provider>
    </ApplicationProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    backgroundColor: '#000'
  }
});