import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingLeft: 20,
    paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
    height: 150,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "green"
  },
  text: {
    color: "white",
    fontSize: 25,
    paddingTop: 10
  }
});

export default Styles;
