import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles/styles";

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.placeholder}>Place</Text>
      <Text style={styles.title}>Mobile Finder</Text>
      <TouchableOpacity onPress={() => console.log("Settings pressed")}>
        <Icon name="settings" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
