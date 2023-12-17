// YourComponent.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "../styles/styles";

const MainPage = () => {
  const handleButtonClick = (buttonNumber) => {
    console.log(`Button ${buttonNumber} is clicked.`);
  };

  return (
    <View style={styles.mainPage}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonClick(1)}
      >
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonClick(2)}
      >
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonClick(3)}
      >
        <Text style={styles.buttonText}>Button 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonClick(4)}
      >
        <Text style={styles.buttonText}>Button 4</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainPage;
