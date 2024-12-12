import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const WhyPurePickScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#ffffff", "#d4edda", "#086308"]} // Updated gradient to use green shades
      style={styles.gradient}
    >
      <View style={styles.container}>
        {/* Title Section */}
        <Text style={styles.title}>Why PurePick?</Text>

        {/* Benefits Section */}
        <View style={styles.benefitsContainer}>
          <View style={styles.row}>
            {/* Benefit 1 */}
            <View style={styles.benefitBox}>
              <Image
                source={require("../assets/images/health.png")}
                style={styles.icon}
              />
              <Text style={styles.benefitTitle}>Health First</Text>
              <Text style={styles.benefitDescription}>
                Products free from harmful allergens and chemicals.
              </Text>
            </View>

            {/* Benefit 2 */}
            <View style={styles.benefitBox}>
              <Image
                source={require("../assets/images/ethics.png")}
                style={styles.icon}
              />
              <Text style={styles.benefitTitle}>Ethical Choices</Text>
              <Text style={styles.benefitDescription}>
                Support companies that align with your values.
              </Text>
            </View>
          </View>

          {/* Benefit 3 */}
          <View style={[styles.benefitBox, { width: "100%" }]}>
            <Image
              source={require("../assets/images/ai.png")}
              style={styles.icon}
            />
            <Text style={styles.benefitTitle}>Cutting-Edge AI</Text>
            <Text style={styles.benefitDescription}>
              Real-time and accurate product insights with AI.
            </Text>
          </View>
        </View>

        {/* Call to Action */}
        <Text style={styles.callToAction}>
          Join the PurePick community today and take control of your health and
          ethics!
        </Text>

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
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#086308", // Updated to match the theme color
    textAlign: "center",
    marginBottom: 10,
  },
  benefitsContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  benefitBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#086308", // Updated to match the theme color
    textAlign: "center",
    marginBottom: 4,
  },
  benefitDescription: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    lineHeight: 18,
  },
  callToAction: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
    marginVertical: 10,
    lineHeight: 20,
  },
  homeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#086308", // Updated to match the theme color
    padding: 10,
    borderRadius: 25,
    width: 140,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  homeIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  homeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WhyPurePickScreen;
