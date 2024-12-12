import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonComponent = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: "#008000",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    width: 200, // Adjust button width
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ButtonComponent;
