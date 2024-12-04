import React from "react";
import { View, StyleSheet, Image } from "react-native";
import ButtonComponent from "../components/ButtonComponent";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />

      {/* Buttons */}
      <ButtonComponent
        title="Allergen Check"
        onPress={() => navigation.navigate("AllergenCheck")}
      />
      <ButtonComponent
        title="Boycott Check"
        onPress={() => navigation.navigate("BoycottCheck")}
      />

      {/* Footer Icons */}
      <View style={styles.footer}>
        <Image
          source={{ uri: "dummy-path-to-home-icon" }} // Replace with actual path
          style={styles.icon}
        />
        <Image
          source={{ uri: "dummy-path-to-about-icon" }} // Replace with actual path
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "green",
    marginBottom: 30,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 30,
    width: "50%",
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default HomeScreen;