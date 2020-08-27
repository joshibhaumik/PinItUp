import React from "react";
import { View, Text } from "react-native";

class RenderDate extends React.Component {
   
  getDate() {
    let currentDate =  new Date().getDate().toString() + '-' + + '-' + new Date().getFullYear().toString();
    
  }
  render() {
    return(
      <View>
        <Text>
          {this.props.date}
        </Text>
      </View>
    );
  }
}

export default RenderDate;
