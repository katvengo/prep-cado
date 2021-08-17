import React, { useState, useEffect, Button } from 'react';
import { Auth } from 'aws-amplify';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from '@react-navigation/native';
import DrawerNavigation from '../../App/Navigation/DrawerNavigation'

import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Screen from '../Screens/Screen'
import ListItem from '../Components/lists/ListItem'
import Icon from "../Components/Icon";
import routes from "../Navigation/routes";
import colors from '../config/colors'
import useAuth from "../Auth/useAuth";
import { API, graphqlOperation } from '@aws-amplify/api';
import RecipeCard from '../Components/AppRecipes/RecipeCard'
import { getUser } from '../../src/graphql/queries'
import { listRecipes } from '../../src/graphql/queries'
import { FlatList } from 'react-native-gesture-handler';

async function currentUser(sub) {
  const result = await API.graphql(graphqlOperation(getUser, { id: sub }))
  const userData = result.data.getUser
  return userData

}

async function grabRecipesByUser(sub) {
  const result = await API.graphql(graphqlOperation(listRecipes, { authorRecipe: sub }))
  console.log(result, "MyAccount grabRecipesByUserFunction")
  return result
}

function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function MyAccount({navigation}) {
  const { user, logOut } = useAuth();
  const [userDetails, setUserDetails] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // const navigation = useNavigation();

  useEffect(() => {
    currentUser(user.sub)
      .then((result) => {
        const userInfo = result
        setUserDetails(userInfo)
      }),
      grabRecipesByUser(user.sub)
        .then((result) => {
          console.log(result)
          if (result) {
            const allRecipes = result.data.listRecipes.items
            console.log(allRecipes)
            setUserRecipes([...allRecipes])
          } else {
            print("lets get to creating your first recipe!")
          }
          
        })
  }, []);

  return (
    <>
    <Screen>
      {/* <View style={styles.container}> */}
    {/* <View style={styles.left}>
          <MaterialCommunityIcons
            name="email-outline"
            color={colors.dark}
            size={30}
            onPress={() => navigation.navigate(routes.MESSAGES)}
            style={styles.setting}
          />
        </View>
    <View style={styles.right}>
          <MaterialCommunityIcons
            name="settings"
            color={colors.dark}
            size={30}
            onPress={() => navigation.navigate(routes.SETTINGS)}
            style={styles.setting}
          />
        </View> */}
        <View style={styles.heading}>
        <View style={styles.subheading}>
        <ListItem
          image={require('../assets/me.jpg')}
          title={userDetails.preferred_username}
        />
        </View>
<View style={styles.log}>  
<MaterialCommunityIcons name="logout" backgroundColor="#ffe66d" size={30} onPress={() => logOut()}/>
</View>
        </View> 
<ScrollView>
          <FlatList
          data={userRecipes}
          keyExtractor={(recipe) => recipe.id.toString()}
          renderItem={({ item }) => (
            <RecipeCard
              header={item.name}
              // subTitle={"$" + item.ingredients}
              image={item.images[0]}
              //onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0]}
            />
          )}   
        /> 
        </ScrollView>
</Screen>
</>
)
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 15,
    marginTop: 50,
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'column'
  },
  subContainer: {
    padding: 10,
    marginBottom: 10,
    marginTop: 30,
    margin: 15,
    backgroundColor: colors.white,

  },
  right: {
    alignSelf: 'flex-end',
    marginTop: -35,

    
  },
  left: {
    alignSelf: 'flex-start',
    
  },
  heading: {
    display: 'flex',

  },
  subheading: {
    alignSelf: 'flex-start'
  },
  log: {
    alignSelf: 'flex-end',
  },

})
export default MyAccount