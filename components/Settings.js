import React, { useState } from "react";
import {
  Share,
  Picker,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Button,
  Alert
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import settings from "../styles/settings";

function Settings() {
  const [day, updateDay] = useState("15");
  const [date, setDate] = useState(new Date(1598887800000));
  const [show, toggleShow] = useState(false);

  const onShare = () => {
    try {
      Share.share({
        subject: "PinItUp",
        message:
          "PinItUp: an application to keep track of all your bookmarks from all different applications in one.\n https://www.google.com"
      });
    } catch (error) {
      Alert.alert("Failed to share the application. Try Again");
    }
  };

  const onChange = (event, s) => {
    const currentDate = s || date;
    toggleShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <View style={settings.container}>
      <View style={{ marginBottom: 20 }}>
        <Text style={settings.textTitle}>Choose Time</Text>
        <Text style={settings.textSubtitle}>
          Set the notification time. So, you will recieve a notification of all
          your unread pins at that time.
        </Text>
        <TouchableOpacity
          style={settings.buttons}
          onPress={() => toggleShow(true)}
        >
          <Text style={settings.texts}>Time</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            is24Hour={false}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <View>
        <Text style={settings.textTitle}>Select Days</Text>
        <Text style={settings.textSubtitle}>
          Select the number of days for your old pins to get deleted.
        </Text>
        <Picker
          selectedValue={day}
          style={{
            height: 50,
            width: Dimensions.get("window").width - 50
          }}
          onValueChange={val => updateDay(val)}
        >
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
          <Picker.Item label="13" value="13" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="17" value="17" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
        </Picker>
      </View>
      <View>
        <Text style={settings.textTitle}>Share Applications</Text>
        <Text style={settings.textSubtitle}>
          Liked this application, want to share this with your peers?
        </Text>
        <TouchableOpacity onPress={onShare} style={settings.buttons}>
          <Text style={settings.texts}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Settings;