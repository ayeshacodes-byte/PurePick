import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const AboutUsScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>About Us</Text>

      {/* Mission Section */}
      <TouchableOpacity style={styles.card} onPress={() => alert("Our Mission details!")}>
        <Image source={require("../assets/images/mission.png")} style={styles.image} />
        <Text style={styles.cardTitle}>Our Mission</Text>
      </TouchableOpacity>

      {/* What We Offer Section */}
      <TouchableOpacity style={styles.card} onPress={() => alert("What we offer details!")}>
        <Image source={require("../assets/images/offer.png")} style={styles.image} />
        <Text style={styles.cardTitle}>What We Offer</Text>
      </TouchableOpacity>

      {/* Why PurePick Section */}
      <TouchableOpacity style={styles.card} onPress={() => alert("Why PurePick details!")}>
        <Image source={require("../assets/images/why.png")} style={styles.image} />
        <Text style={styles.cardTitle}>Why PurePick</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    marginBottom: 20,
  },
  card: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});

export default AboutUsScreen;
