import { StyleSheet } from "react-native";

import styles from "./themes";

const settings = StyleSheet.create({
  container: {
    padding: 5
  },
  buttons: {
    ...styles.buttonContainer,
    height: 35,
    paddingVertical: 5
  },
  texts: {
    ...styles.buttonText
  },
  textTitle: {
    fontSize: 20, 
    marginTop: 10
  },
  textSubtitle: {
    fontSize: 12, 
    marginBottom: 10 
  }
});

export default settings;
