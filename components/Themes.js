import React, { useState } from "react";
import {
  View,
  ToastAndroid,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";

import RadioButton from "./features/RadioButton";

import styles from "../styles/themes.js";
// import { themes } from "../data/themes";

const Theme = colors => {
  let color = colors.item.color;
  let id = colors.item.color;
  return (
    <View key={id} style={styles.themeContainer}>
      <Text style={styles.themeColor}>
        {color.charAt().toUpperCase() + color.slice(1, color.length)}
      </Text>
      <RadioButton color={color} checked={color === "green" ? true : false} />
    </View>
  );
};

function Themes(props) {
  const [theme, setTheme] = useState(themes);

  const ApplyChanges = () => {
    ToastAndroid.show("Changes Saved", ToastAndroid.SHORT);
  };

  return (
    <View>
      <View>
        {/* <FlatList
          data={theme}
          renderItem={Theme}
          keyExtractor={item => item.id}
        /> */}
      </View>
      <View style={{ justifyContent: "center" }}>
        <TouchableOpacity onPress={ApplyChanges} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Apply Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Themes;
