import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  if(authToken) {
    try {
    await SecureStore.setItemAsync(key, authToken);
  } 
  catch (error) {
    try {
      console.log("hitting storage", authToken)
      console.log("type", typeof authToken)
      await localStorage.setItem(key, authToken);
    } 
    catch {
      console.log("Error storing the auth token", error);

    }
  }
  }
  
};

const getToken = async () => {
  try {
    return await f.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  } 
};

const getUser = async () => {
  
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default { getToken, getUser, removeToken, storeToken };
