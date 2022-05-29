import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

import {API,  graphqlOperation } from '@aws-amplify/api';

import { getUser } from '../../src/graphql/queries'

 async function currentUser (sub) {
   if(sub) {
      console.log(sub, "sub")
  // const grabCurrentUser = await API.graphqlOperation({ getUser, id: id });
  const result = await API.graphql(graphqlOperation(getUser, {id: sub}))
  console.log(result, "currentUserfunction")
  return result
   } else {
     conosle.log('no sub found')
   }
 
}

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    console.log(authToken, "token")
    const userDetails = authToken
    const userInfo = userDetails.idToken.payload
    const token = authToken.accessToken.jwtToken
    authStorage.storeToken(token);
    
    currentUser(userInfo.sub)
    .then((data) => {
      console.log(data, "current User")
      setUser(data.data, token)
    })
    //const token = authToken.accessToken.jwtToken
   // setUserSession(userDetails.idToken.payload);
    //authStorage.storeToken(token);
    //  console.log(grabUser, 'console')
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };



  return { user, logIn, logOut };
};
