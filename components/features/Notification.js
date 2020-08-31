import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false
  })
});

async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Original Title",
    body: "And here is the body!",
    data: { data: "goes here" }
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  });
}

/*  
const getNotificationPermission = async () => {
  let permission = await Permissions.getAsync(
    Permissions.USER_FACING_NOTIFICATIONS
  );
  if (permission.status !== "granted") {
    permission = await Permissions.askAsync(
      Permissions.USER_FACING_NOTIFICATIONS
    );
    if (permission.status !== "granted") {
      Alert.alert("Permission not granted to show notifications");
    }
  }
  return permission;
};

export const PushNotification = async num => {
//   await getNotificationPermission();
  Notifications.presentLocalNotificationAsync({
    title: "Unread Pins",
    body: `You Have ${num} Unread Pins`,
    ios: {
      sound: true
    },
    android: {
      sound: true,
      vibrate: true,
      color: "#512DA8"
    }
  });
  Notifications.PushNotification();
};
*/
