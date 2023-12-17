import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles/styles";
import NavBar from "./components/navbar";
import MainPage from "./components/mainpage";

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.body}>
        <MainPage />
        <Text style={styles.text}>Open up App.js to start...</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
