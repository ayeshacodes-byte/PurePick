import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ImageBackground } from "react-native";

const AllergenCheckScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/ACback.png")} // Add your background image here
      style={styles.container} // Apply the background image to the container
    >
      {/* Ingredient Image Placeholder */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/ingredients.png")}
          style={styles.image}
        />
      </View>

      {/* Upload Button */}
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload Ingredients Image</Text>
      </TouchableOpacity>

      {/* Allergen and Boycott Buttons */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Image
            source={require("../assets/images/allergen.png")} // Replace with actual path
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Allergen</Text>
        </TouchableOpacity>

        {/* Boycott Button: Green when AllergenCheckScreen is active */}
        <TouchableOpacity
          style={[styles.optionButton, styles.boycottButtonActive]}
          onPress={() => navigation.navigate("BoycottCheck")}
        >
          <Image
            source={require("../assets/images/boycott.png")} // Replace with actual path
            style={styles.optionIcon}
          />
          <Text style={styles.newText}>Boycott</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.footerButton}>
          <Image
            source={require("../assets/images/bottomhome.png")} // Replace with actual path
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AboutUs")} style={styles.footerButton}>
          <Image
            source={require("../assets/images/bottomabout.png")} // Replace with actual path
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>About</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover", // Ensures the background image covers the entire screen
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "#086308", // Green border
    borderRadius: 10,
  },
  uploadButton: {
    backgroundColor: "#086308", // Green background for the button
    paddingVertical: 12,
    marginHorizontal: 50,
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 20,
  },
  uploadButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  optionButton: {
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#086308", 
    borderRadius: 10,
    padding: 15,
    width: 120,
    height: 120,
  },
  optionIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  optionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#086308", // Green text
  },
  newText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF", 
  },
  boycottButtonActive: {
    backgroundColor: "#086308", // Green background for Boycott
    borderColor: "#086308", // Green border for Boycott
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#086308", // Green background for footer
    paddingVertical: 10,
  },
  footerButton: {
    alignItems: "center",
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  footerText: {
    fontSize: 12,
    color: "white",
  },
});

export default AllergenCheckScreen;
