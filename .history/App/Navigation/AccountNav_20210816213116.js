import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// const Stack = createStackNavigator();
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import AccountScreen from "../Screens/MyAccount";
// import MessagesScreen from "../Screens/MessagesScreen";
// import MyAccountScreen from "../Screens/MyAccountSettings";

import colors from '../config/colors'

const Tab = createMaterialTopTabNavigator();

const AccountNav = () => (
  <>
    <Tab.Navigator
    initialRouteName="Account"
    tabBarOptions= {{
      style: { marginTop: 30},
      showIcon: true,
      showLabel: false,
    }}
    >

      <Tab.Screen name="Account" component={AccountScreen}   
      options={{ 
        tabBarIcon: (color, size) => (
            <MaterialCommunityIcons name="account-circle" color={colors.primary} size={25} />
        ),
      
        }} />
      <Tab.Screen name="Messages" component={MessagesScreen} 
       options={{ 
        tabBarIcon: (color, size) => (
            <MaterialCommunityIcons name="email-outline" color={colors.primary} size={25} />
        ),
      
        }}/>
      <Tab.Screen name="MyAccountSettings" component={MyAccountScreen} 
       options={{ 
        tabBarIcon: (color, size) => (
            <MaterialCommunityIcons name="settings" color={colors.primary} size={25} />
        ),
      
        }} />

    </Tab.Navigator>
    </>
)


export default AccountNav;