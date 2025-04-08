import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const BoycottProductScreen = ({ navigation, route }) => {
  // Extract category from route params
  const { category } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Header with Back and Home Buttons */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack(); // Go back if possible
            } else {
              navigation.navigate("Home"); // Fallback to HomeScreen
            }
          }}
        >
          <Image
            source={require("../assets/images/back_arrow.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../assets/images/home_icon.png")} // Replace with actual path
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Checkmark and Text */}
      <View style={styles.content}>
        <Image
          source={require("../assets/images/man_cross.png")} // Replace with actual path
          style={styles.image}
        />
        <Image
          source={require("../assets/images/cross.png")} // Replace with actual path
          style={styles.crossImage}
        />
        <Text style={styles.productText}>
          This product is on the {"\n"} boycott list!
        </Text>
      </View>

      {/* Scan Another Product Button */}
      <TouchableOpacity
        style={styles.button_scan}
        onPress={() => navigation.navigate("BoycottCheck")}
      >
        <Text style={styles.buttonText}>Scan Another Product</Text>
      </TouchableOpacity>

      {/* Search Alternatives Product Button */}
      <TouchableOpacity
        style={styles.button_alternatives}
        onPress={() =>
          navigation.navigate("Alternatives", {
            category,
            triggeredByButton: true,
          })
        }
      >
        <Text style={styles.buttonText}>Search Alternatives</Text>
      </TouchableOpacity>

      {/* Bottom Text */}
      <View style={styles.footer}>
        <Text style={styles.boldText}>Your voice is powerful!</Text>
        <Text style={styles.footerText}>
          Share with more people and help them make an ethical choice.
        </Text>

        {/* Link Icon */}
        <TouchableOpacity>
          <Image
            source={require("../assets/images/link-icon.png")} // Replace with actual path
            style={styles.linkIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa8787",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    top: 20,
    paddingHorizontal: 20,
    zIndex: 1, // Ensures the header stays on top
    paddingTop: 25,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "white", // Optional to match the text color
  },
  image: {
    width: 130,
    height: 130,
    right: 1,
    marginTop: 20, // Adjusted to avoid overlap with the header
    zIndex: 2,
  },
  crossImage: {
    width: 180,
    height: 180,
    marginBottom: 10,
    marginTop: -15,
  },
  content: {
    alignItems: "center",
  },
  productText: {
    fontSize: 28,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  button_alternatives: {
    justifyContent: "center",
    backgroundColor: "#cf3e3e",
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 20,
    marginBottom: 30,
    marginTop: 10,
    alignItems: "center",
    width: 280,
    height: 65,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // Elevation for Android
    elevation: 5,
    zIndex: 1,
  },
  button_scan: {
    justifyContent: "center",
    backgroundColor: "#cf3e3e",
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 20,
    marginBottom: 3,
    marginTop: 30,
    alignItems: "center",
    width: 280,
    height: 65,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // Elevation for Android
    elevation: 5,
    zIndex: 1,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    marginBottom: 20,
  },
  boldText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  footerText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginHorizontal: 20,
    fontWieght: "bold",
  },
  linkIcon: {
    width: 40,
    height: 40,
    marginTop: 10,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // Elevation for Android
    elevation: 5,
    zIndex: 1,
  },
});

export default BoycottProductScreen;