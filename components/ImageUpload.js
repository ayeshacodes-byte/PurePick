import React, { useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { TouchableOpacity, Text, View, StyleSheet, Alert, Image } from "react-native";
import { launchCamera } from "react-native-image-picker";
import TextRecognition from "@react-native-ml-kit/text-recognition";

const ImageUpload = ({ onTextExtracted }) => {
  const [imageUri, setImageUri] = useState(null);

  const handleCameraLaunch = () => {
    const options = {
      mediaType: "photo", // Allow only photos
      includeBase64: false, // Don't include base64 data
      saveToPhotos: true, // Save the captured image to the device's photo library
      cameraType: "back", // Use the rear camera
    };

    // Open the camera
    launchCamera(options, async (response) => {
      if (response.didCancel) {
        Alert.alert("User cancelled camera");
      } else if (response.error) {
        Alert.alert("Camera Error: ", response.error);
      } else if (response.assets && response.assets.length > 0) {
        const file = response.assets[0];
        setImageUri(file.uri); // Set the image URI for preview

        // Extract text from the image
        try {
          const text = await TextRecognition.recognize(file.uri);
          onTextExtracted(text.text); // Pass the extracted text to the parent component
        } catch (error) {
          console.error("Text recognition failed:", error);
          Alert.alert("Error", "Failed to extract text from the image.");
        }
      }
    });
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleCameraLaunch}>
        <Text style={styles.buttonText}>Upload Ingredients Image</Text>
      </TouchableOpacity>

      {/* Display the captured image */}
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.previewImage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: "#086308",
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 20,
    marginVertical: 20,
    alignItems: "center",
    width: 300,
    height: 65,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  previewImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default ImageUpload;