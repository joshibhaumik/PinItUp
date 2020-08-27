import React, { Component } from "react";
import { View, ScrollView } from "react-native";

import Header from "./Header";

import styles from "../../styles/layout";

function Layout(props) {
  return (
    <View>
      <Header heading={"this.props.heading"} />
      <View style={{ marginHorizontal: 10 }}>
        <ScrollView style={styles.container}>{props.children}</ScrollView>
      </View>
    </View>
  );
}

export default Layout;
