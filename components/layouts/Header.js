import React from "react";
import { View, Text } from "react-native";
import Styles from "../../styles/header.js";

function Header() {
  return (
    <View style={Styles.wrapper}>
      <Text style={Styles.text}>PinItUp</Text>
    </View>
  );
}

export default Header;
