import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height - 90,
    marginTop: -60,
    backgroundColor: "white",
    padding: 5
  }
});

export default styles;
