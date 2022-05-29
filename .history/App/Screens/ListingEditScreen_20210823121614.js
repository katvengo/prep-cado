import React, { useEffect, useState } from 'react';
import * as Yup from 'yup'
import { Storage} from 'aws-amplify';
import Amplify, { API,  graphqlOperation } from '@aws-amplify/api';
import config from '../../src/aws-exports'
Amplify.configure(config)
import useAuth from "../Auth/useAuth";

import { StyleSheet, View, ScrollView} from 'react-native'
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../Components/forms'
import Screen from './Screen'
import FormImagePicker from '../Components/forms/FormImagePicker'
//import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";
import uploadRecipeFromImage from '../Screens/UploadRecipeFromImage';

import { createRecipe } from '../../src/graphql/mutations'
import { listRecipes } from '../../src/graphql/queries'


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    description: Yup.string().min(1).max(1000).label("Description"),
    category: Yup.string().label("Category"),
    servings: Yup.string().label("Servings"),
    prepTime: Yup.string().label("Preparation Time"),
    cookTime: Yup.string().label("Cook Time"),
    ingredients: Yup.array().label("Ingredients"),
    directions: Yup.string().label("Directions"),
    images: Yup.array().min(1, "Please select at least one image."),
    
})


function ListingEditScreen () { 
const { user, logOut } = useAuth();
let sub = user.data.getUser.id
console.log(sub)
//const location = useLocation();
const [uploadVisible, setUploadVisible] = useState(false);
const [progress, setProgress] = useState(0);
const [userImages, setUserImages] = useState([])

const imageArray = []

const handleSubmit = async (recipe, { resetForm } ) => {
    console.log(recipe, "recipe")
    setProgress(0);
    setUploadVisible(true);
    try {
        const images = recipe.images
        
        for (let i = 0; i < images.length; i++) {
            console.log(images)
            const element = images[i];
            const recipeName = element..replace("[ ]+","g", '')

            const resImage = await fetch(element)
            const blob = await resImage.blob()
            setProgress(i)
            await Storage.put(recipeName + 'Image' + i + '.png', blob, {
                contentType: 'image/png',
                ACL: 'public-read',
                progressCallback(progress) {
                   console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                  },
            })
            .then (result => 
                {
                    const key = result.key
                    const base = 'https://prepcadofc01ed34616c49d38896e4fc4c3a59ea124736-dev.s3.us-west-2.amazonaws.com/public/'
                    const imageURL = base + key
                    imageArray.push(imageURL)
                }
                )
            .catch(err => alert(err)
            );   
        }
        console.log(imageArray)
        recipe.images = imageArray
        console.log(recipe)

        const r = API.graphql(graphqlOperation(createRecipe, {input: {type: 'post', ...recipe}}, (progress) => setProgress(progress)))
                if(!r) {
                console.log(r)
                setUploadVisible(false);
                alert('Could not save Recipe')
                } else if (r){
                console.log(r)
                setUploadVisible(false);
                alert('Recipe updated successfully')
                resetForm();


            }
      } catch (err) {
        console.log(err)
      }
    
}

return ( 
<Screen style={styles.container}>
<UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
 <ScrollView>
<AppForm
initialValues={{
    name: '', 
    servings: '', 
    prepTime: '', 
    cookTime: '', 
    ingredients: [], 
    category: '', 
    cuisine: '',
    description: '',
    directions: '',
    images: [],
    url: '',
    userId: sub
}
}
onSubmit={handleSubmit}
validationSchema={validationSchema}
>
<FormImagePicker name="images" />
<AppFormField
maxLength={255}
placeholder="Name"
name="name"
autoFocus={true}
 />

<AppFormField
maxLength={255}
multiline
placeholder="Description"
name="description"
 />
 <AppFormField
multiline
name="category"
placeholder="Category: Meat, seafood, chicken, freezer"
/>
<AppFormField
maxLength={255}
multiline
placeholder="Cuisine"
name="cuisine"
 />
<AppFormField
maxLength={255}
placeholder="Servings"
name="servings"
 />
<AppFormField
maxLength={255}
placeholder="Preparation Time"
name="prepTime"
 />
<AppFormField
maxLength={255}
placeholder="Cooking Time"
name="cookTime"
 />
<AppFormField
 multiline={true}
numberOfLines={2}
maxLength={600}
placeholder="Ingredients"
name="ingredients"
 />
<AppFormField
 multiline={true}
maxLength={255}
placeholder="Directions"
name="directions"
 />
 <AppFormField
 multiline={true}
numberOfLines={2}
maxLength={600}
placeholder="Reference url"
name='url' 
/>
<View style={styles.submit}>
  <SubmitButton title="Add" size={300} radius={10} fontSize={18}/>
</View>
</AppForm>
</ScrollView>
</Screen>

);
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    submit: {
        justifyContent: 'center',
        alignSelf: 'center'
    }

})
export default ListingEditScreen