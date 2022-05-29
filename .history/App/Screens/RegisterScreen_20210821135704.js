import React from 'react';
import {StyleSheet, Image} from 'react-native'
import * as Yup from 'yup'
import { Auth } from 'aws-amplify';

import Screen from './Screen'
import { AppForm, AppFormField, SubmitButton} from '../Components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Username"),
    password: Yup.string().required().min(4).label("Password")
})

/* Sign up function */
async function signUp(username, password, nickname) {
    console.log(username, password)
  try {
     const { user } = await Auth.signUp({
      username: nickname,
      password: password,
      attributes: {
        email: email,
        nickname: nickname
      }});
      console.log(user)
      if(user) {
        alert('Success! Please check your email to confirm your account')
      }
  } catch (err) { 
    if(err) {
      console.log(err)
      const error = err.message
      alert(error); 

    }
  }

}


function RegisterScreen () { 

return ( 
<Screen style={styles.container}>
    <Image style={styles.logo}
    source={require('../assets/avocado.jpg')} />
<AppForm
initialValues={{username: '', password: '', nickname: ''}}
onSubmit={values => signUp(values.username, values.password, values.nickname)}
validationSchema={validationSchema}
>

<AppFormField
autoCapitalize="none"
autoCorrect={false}
icon="email"
placeholder="Email"
keyboardType="email-address"
name="username"
textContentType="username"
/>

<AppFormField
autoCapitalize="none"
autoCorrect={false}
icon="account"
placeholder="Username"
name="nickname"
/>


<AppFormField
autoCapitalize="none"
autoCorrect={false}
icon="lock"
name="password"
placeholder="Password"
textContentType="newPassword"
secureTextEntry
/>

<AppFormField
autoCapitalize="none"
autoCorrect={false}
icon="lock"
name="confirmpassword"
placeholder="Confirm Password"
textContentType="password"
secureTextEntry
/>

<SubmitButton title="Register"/>
</AppForm>

</Screen>
);
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    container: {
        padding: 10,
    }, 
   
})
export default RegisterScreen