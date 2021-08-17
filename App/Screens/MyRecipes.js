import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Screen from './Screen'
import ListItem from '../Components/lists/ListItem'
import Icon from "../Components/Icon";
import routes from "../Navigation/routes";
import colors from '../config/colors'
import useAuth from "../Auth/useAuth";
import {API,  graphqlOperation } from '@aws-amplify/api';
import RecipeCard from '../Components/AppRecipes/RecipeCard'
import { getUser } from '../../src/graphql/queries'
import { listRecipes } from '../../src/graphql/queries'
import { FlatList } from 'react-native-gesture-handler';

async function currentUser (sub) {
  const result = await API.graphql(graphqlOperation(getUser, {id: sub}))
  const userData = result.data.getUser
  return userData

}

async function grabRecipesByUser (sub) {
  const result = await API.graphql(graphqlOperation(listRecipes, {authorRecipe: sub}))
  return result
}

function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function MyRecipes (props) { 
  const { user, logOut } = useAuth();
  const [ userDetails, setUserDetails ] = useState([]);
  const [userRecipes, setUserRecipes ] = useState([]);

   useEffect(() => {
    currentUser(user.sub)
    .then((result) => {
      const userInfo = result
      setUserDetails(userInfo)
    }),
    grabRecipesByUser(user.sub)
    .then((result) => {
      const allRecipes = result.data.listRecipes.items
      console.log(allRecipes)
      setUserRecipes([...allRecipes])
    }) 
  }, []);

return ( 
<Screen>
<View style={styles.container}>
    <ListItem 
    image={require('../assets/me.jpg')}
    title={userDetails.preferred_username}
    />
    <ListItem
        title="Settings"
        IconComponent={<Icon name="settings" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
</View>
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
</Screen>
);
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 15,
        marginTop: 50,
        backgroundColor: colors.white,
    },
    subContainer: {
        padding: 10,
        marginBottom: 10,
        marginTop: 30,
        margin: 15,
        backgroundColor: colors.white,

     },

})
export default MyRecipes