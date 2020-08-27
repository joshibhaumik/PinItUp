import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";

function RadioButton(props) {
  const [checked, toggleChecked] = useState(props.checked || false);

  const toggle = () => {
    let bool;
    if (checked) bool = false;
    else bool = true;
    toggleChecked(bool);
  };

  return (
    <TouchableOpacity
      onPress={toggle}
      style={{
        width: 25,
        height: 25,
        padding: 3,
        borderRadius: 50,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: checked ? props.color : "grey"
      }}
    >
      <View
        style={{
          borderRadius: 50,
          width: 15,
          height: 15,
          backgroundColor: checked ? props.color : "transparent"
        }}
      ></View>
    </TouchableOpacity>
  );
}

export default RadioButton;
