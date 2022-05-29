import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MyAccount from '../Screens/MyAccount';
import Feed from '../Screens/Feed';
import Listing from '../Screens/ListingEditScreen';
import colors from '../config/colors'
import { ColorPropType } from 'react-native';

import AccountNavigator from './AccountNavigator'
import PrepCadoTopBar from './PrepCadoTopBar';
const Tab = createBottomTabNavigator();

const AppNavigationTab = () => (
    <Tab.Navigator 
    initialRouteName="Feed"
    screenOptions = {{showLabel: false}}
    >
     <Tab.Screen name="Feed" component={PrepCadoTopBar} 
    options={{ 
        tabBarIcon: (color, size) => (
            <MaterialCommunityIcons name="home" color={colors.primary} size={40} />
        ),
      
        }}
    />
       <Tab.Screen name="AddRecipes" component={Listing}
     options={{ 
        tabBarIcon: (color, size) => (
            <MaterialCommunityIcons name="plus" color={colors.primary} size={40} />
        ),
      
        }} />
    
   <Tab.Screen 
    name="Account" 
    component={AccountNavigator}
    options={{ 
    tabBarIcon: (color, size) => (
        <MaterialCommunityIcons name="account-circle" color={colors.primary} size={40} />
    ),
  
    }}
     />
</Tab.Navigator>
  
)

export default AppNavigationTab