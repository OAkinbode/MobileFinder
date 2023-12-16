import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.placeholder}>Place</Text>
        <Text style={styles.title}>Mobile Finder</Text>
        <TouchableOpacity onPress={() => console.log("Settings pressed")}>
          <Icon name="settings" size={25} color="green" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Open up App.js to start...</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "top",
    justifyContent: "center",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#C7E3CC",
    padding: 10,
    height: 70,
    marginTop: 60,
  },
  text: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "red",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#39403A",
  },
  button: {
    padding: 10,
    backgroundColor: "#278737",
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#B2F3BD",
    fontSize: 12,
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    color: "#C7E3CC",
  },
});
