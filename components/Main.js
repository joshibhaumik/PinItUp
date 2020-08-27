import React from "react";
import { ToastAndroid, View, Text } from "react-native";

import Home from "./Home";
import Layout from "./layouts/Layout";
import Themes from "./Themes";
import Settings from "./Settings";

function Main() {
  return (
    <Layout>
      {/* <Home /> */}
      <Themes />
      {/* <Settings /> */}
    </Layout>
  );
}

export default Main;
