import React from "react";
import { View, Text, ImagePropTypes } from "react-native";
import Styles from "../../styles/header.js";

function Header(props) {
  return (
    <View style={Styles.wrapper}>
      <Text style={Styles.text}>{props.heading}</Text>
    </View>
  );
}

export default Header;
