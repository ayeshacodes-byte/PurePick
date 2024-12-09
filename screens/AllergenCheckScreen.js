import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const AllergenCheckScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     

      {/* Ingredient Image Placeholder */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/ingredients.png")} // Replace with actual path
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

        <TouchableOpacity style={styles.optionButton}>
          <Image
            source={require("../assets/images/boycott.png")} // Replace with actual path
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Boycott</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.footerButton}>
          <Image
            source={require("../assets/images/home.png")} // Replace with actual path
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AboutUs")} style={styles.footerButton}>
          <Image
            source={require("../assets/images/about.png")} // Replace with actual path
            style={styles.footerIcon}
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
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  backButton: {
    fontSize: 20,
    color: "white",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 250, // Square dimensions
    height: 250, // Same as width
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 10,
  },
  uploadButton: {
    backgroundColor: "green",
    paddingVertical: 10,
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
    borderColor: "green",
    borderRadius: 10,
    padding: 10,
    width: 100,
    height: 100,
  },
  optionIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  optionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "green",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 30,
    backgroundColor: "green",
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
