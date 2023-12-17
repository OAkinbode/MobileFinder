import { StyleSheet } from "react-native";

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
    backgroundColor: "#fff",
    padding: 10,
    height: 70,
    marginTop: 60,
  },
  text: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "red",
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#39403A",
  },
  button: {
    padding: 10,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 20,
    width: 200,
    borderColor: "#e38f10",
    borderWidth: 1,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    color: "#fff",
  },
  mainPage: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "top",
    justifyContent: "top",
  },
});

export default styles;
