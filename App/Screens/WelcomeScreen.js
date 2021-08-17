import React from "react";

import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import ButtonComponent from "../Components/ButtonComponent";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={1}
      resizeMode="cover"
      style={styles.imageBgk}
      source={require("../assets/prepcado.png")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.tagline}> PrepCado </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <ButtonComponent
          color="secondary"
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBgk: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  tagline: {
    fontSize: 60,
    fontWeight: "600",
    paddingVertical: 50,
    lineHeight: 60,
    color: "#008B7B",
    fontWeight: "900",
    textTransform: "uppercase",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontStyle: "italic",
    textShadowRadius: 1,
    textShadowColor: "#007F7F",
    textShadowOffset: {
      width: 2,
      height: 1,
    },
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
});
export default WelcomeScreen;
