import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import ButtonComponent from "../components/ButtonComponent";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")} // Replace with the actual logo path
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

      {/* Footer with Icons */}
      <View style={styles.footer}>
        {/* Home Button */}
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.footerButton}>
          <Image
            source={require("../assets/images/home.png")} // Replace with actual path
            style={styles.icon}
          />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        {/* About Us Button */}
        <TouchableOpacity onPress={() => navigation.navigate("AboutUs")} style={styles.footerButton}>
          <Image
            source={require("../assets/images/about.png")} // Replace with actual path
            style={styles.icon}
          />
          <Text style={styles.footerText}>About</Text>
        </TouchableOpacity>
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
    height: 150,
    marginBottom: 30,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    width: "60%",
  },
  footerButton: {
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  footerText: {
    fontSize: 12,
    color: "green",
  },
});

export default HomeScreen;
