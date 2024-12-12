import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const WhatWeOfferScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#ffffff", "#d4edda", "#086308"]} // Updated gradient to use green shades
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>What We Offer</Text>

        {/* Card 1: Allergen Check */}
        <View style={styles.card}>
          <Image
            source={require("../assets/images/allergen.png")} 
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Allergen Detection</Text>
          <Text style={styles.cardDescription}>
            PurePick uses smart AI to quickly scan and analyze product ingredients. It helps you spot harmful allergens or substances that could affect your health, whether you have food allergies, skin sensitivities, or other restrictions. This way, you can choose safely and confidently.
          </Text>
        </View>

        {/* Card 2: Ethical Boycott */}
        <View style={styles.card}>
          <Image
            source={require("../assets/images/boycott.png")} 
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Ethical Choice Selection</Text>
          <Text style={styles.cardDescription}>
            PurePick helps you stay aware of products from companies involved in unethical practices. It alerts you when a product is linked to a boycott, so you can make responsible choices that match your values and avoid supporting harmful businesses.
          </Text>
        </View>

        {/* Card 3: Real-Time Analysis */}
        <View style={styles.card}>
          <Image
            source={require("../assets/images/analysis.png")} 
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Real-Time Analysis</Text>
          <Text style={styles.cardDescription}>
            With PurePick, you can easily scan product ingredients and barcodes using your phone’s camera. The app instantly gives you important details about allergens, harmful ingredients, and ethical concerns, helping you make better choices for your health and values.
          </Text>
        </View>

        {/* Home Button */}
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../assets/images/bottomhome.png")} 
            style={styles.homeIcon}
          />
          <Text style={styles.homeText}>Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#086308", // Updated to match the theme color
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#086308", // Updated to match the theme color
    marginBottom: 10,
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    textAlign: "center",
  },
  homeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#086308", // Updated to match the theme color
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    width: 150,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  homeIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  homeText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WhatWeOfferScreen;

