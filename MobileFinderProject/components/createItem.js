import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import NavBar from "../components/navbar";
import MainPage from "../components/mainpage";

export default function CreateItem() {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.body}>
        <MainPage />
        <Text style={styles.text}>This is the create Item page..</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
