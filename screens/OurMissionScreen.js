import React from "react"; 
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const OurMissionScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")} 
      style={styles.background}
    >
      <LinearGradient
        colors={["rgba(8, 99, 8, 0.9)", "rgba(255, 255, 255, 0.9)"]} // Adjusted for #086308
        style={styles.gradient}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Mission Of PurePick</Text>
          <Text style={styles.description}>
            "At PurePick, our mission is to empower consumers with the knowledge they need to make safe, ethical, and
            informed choices. Through cutting-edge AI and machine learning technology, we provide real-time product
            analysis by scanning ingredients and identifying harmful allergens and unethical practices. We are committed
            to promoting healthier, more responsible purchasing decisions for a better and more sustainable world."
          </Text>
        </View>

        {/* Home Button */}
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../assets/images/bottomhome.png")} // Replace with a suitable home icon path
            style={styles.homeIcon}
          />
          <Text style={styles.homeText}>Home</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  gradient: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#086308", // Updated green color
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "#333",
    lineHeight: 26,
    textAlign: "center",
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
  homeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#086308", // Updated green color
    padding: 10,
    borderRadius: 25,
    width: 150,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default OurMissionScreen;
