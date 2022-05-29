import React, {useState, useEffect} from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import RecipeCard from '../Components/AppRecipes/RecipeCard'
import Screen from '../Screens/Screen'
import useAuth from "../Auth/useAuth";

import Amplify, {API,  graphqlOperation } from '@aws-amplify/api';
import config from '../../src/aws-exports'
Amplify.configure(config)

import { listRecipes } from '../../src/graphql/queries'
// import { FlatList } from 'react-native-gesture-handler';

async function grabRecipesByUser (sub) {
  console.log(sub, "grabRecipes")
  const result = await API.graphql(graphqlOperation(listRecipes, {authorRecipe: sub}))
  return result
}

function Feed(props) {
  const { user, logOut } = useAuth();
  const [userRecipes, setUserRecipes ] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    grabRecipesByUser(user.sub)
    console.log(user.sub, 'user.sub')
    .then((result) => {
      if(result !== undefined) {
      const allRecipes = result.data.listRecipes.items
      console.log(allRecipes)
      setUserRecipes([...allRecipes])
      } else if (result === undefined) {
        console.log("no recipes :(")
        
 }
   
    })  }, []);

  return (

    <Screen style={styles.screen}>

<View style={styles.container}>
       <FlatList
          data={userRecipes}
          keyExtractor={(recipe) => recipe.id.toString()}
          renderItem={({ item }) => (
            <RecipeCard
              header={item.name}
              // subTitle={"$" + item.ingredients}
              image={item.images[0]}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0]}
            />
          )}
          refreshing={refreshing}
          onRefresh={() => {
            grabRecipesByUser(user.sub)
            .then((result) => {
              const allRecipes = result.data.listRecipes.items
              setUserRecipes([...allRecipes])
            }) 
          }}
        />
    </View> 
</Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    flexWrap: "wrap"
  },
  container: {
    margin: 20
  },
  screen: {
    padding: 20,
  },
});

export default Feed;