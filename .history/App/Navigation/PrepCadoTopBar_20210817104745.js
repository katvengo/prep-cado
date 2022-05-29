import React from "react";
import { View, Text, StyleSheet, FlatList} from 'react-native';

// import { createStackNavigator } from "@react-navigation/stack";
// const Stack = createStackNavigator();
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Feed from "../Screens/Feed";
import MessagesScreen from "../Screens/MessagesScreen";
import MyAccountScreen from "../Screens/MyAccountSettings";

import colors from '../config/colors'

const Tab = createMaterialTopTabNavigator();

const PrepCadoTopBar = () => (
  <>
  <View style={{marginTop: 50, paddingLeft: 20 }}>
 <Text>
  PrepCado
  </Text> 
   </View>
    <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions= {{
      // style: { marginTop: -15},
      showIcon: true,
      showLabel: false,
    }}
    >

      <Tab.Screen name="Feed" component={Feed}   
      options={{ 
        tabBarIcon: (color, size) => (
            <MaterialCommunityIcons name="home" color={colors.primary} size={25} />
        ),
      
        }} />

    </Tab.Navigator>
</>

)


export default PrepCadoTopBar;