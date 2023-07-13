import { createContext, useEffect, useRef, useState } from "react";
import { NotificationAPI } from "../api/notification";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { UserAPI } from '../api/user';
import DeviceT from '../types/Device';
import { NotificationRequest } from 'expo-notifications';
import useAuth from "../hooks/useAuth";
import { Alert, Platform } from "react-native";


/**
* notification middleware
* @returns void
* */

Notifications.setNotificationHandler({
  handleNotification: async (notification) => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }
  },
});

/**
* cancel local notification by id
* @returns void
* */

export async function cancelNotification(identifier: string) {
  await Notifications.cancelScheduledNotificationAsync(identifier);
}

/**
* find local notification by id
* @returns void
* */

export async function findNotificationIdentifier(_id = null) {
  const scheduledNotifications: NotificationRequest[] = await Notifications.getAllScheduledNotificationsAsync();
  return scheduledNotifications.find((notif: NotificationRequest) => notif.content.data._id == "xxxx")?.identifier;
}

/**
* update local notifications
* @returns void
* */

export async function updateNotifications() {
  const scheduledNotifications: NotificationRequest[] = await Notifications.getAllScheduledNotificationsAsync();
  scheduledNotifications.forEach(notification => {
  });

  const id = await findNotificationIdentifier();
  if (id) await cancelNotification(id);
}

/**
* local notification setup
* @returns void
* */

export async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { collection: 'tasks', _id: "99999" },
    },
    trigger: { seconds: 300 },
  });
}


// ============================================================
export const NotificationsContext = createContext({
  notifications: [],
});
// ============================================================

const NotificationsProvider = ({ children }: any) => {
  const [notifications, setNotifications] = useState([]);

  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();
  const { auth, isLogged, update } = useAuth();


  /**
  * Find * notifications 
  * @returns notifications[]
  * */

  const getNotifications = () => {

    registerForPushNotificationsAsync().then(token => {
      if (token) checkUserExpoPushToken(auth.user, token)
    });

    /*
    NotificationAPI.getAll()
      .then(({ data }: any) => {
        setNotifications(data);
      })
      .catch((e: any) => console.log(e));
      */
  }


  /**
  * init
  * @returns void
  * */


  useEffect(() => {
    if (isLogged) getNotifications()
  }, [isLogged]);


  /**
  * set listeners
  * @returns void
  * */

  useEffect(() => {
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    });

    return () => {
      /* used sockets to listen for notifications so it can be delivered without permissions */
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);



  /**
  * compare device expoPushToken 
  * update it if changed
  * @returns void
  * */

  function checkUserExpoPushToken(user: any, expoPushToken: string) {
    if (!Device.isDevice) return;
    if (user.device && expoPushToken == user.device.expoPushToken) return;

    UserAPI.setDevice({
      isDevice: Device.isDevice,
      manufacturer: Device.manufacturer,
      modelName: Device.modelName,
      osVersion: Device.osVersion,
      deviceName: Device.deviceName,
      expoPushToken
    } as DeviceT)
      .then(() => update())
      .catch(e => console.log(e))
  }


  /**
  * check its real device
  * get permissions
  * android config
  * @returns void
  * */

  async function registerForPushNotificationsAsync() {
    let token = "";

    if (!Device.isDevice) {
      Alert.alert('Notifications', 'Must use physical device for Push Notifications');
      return;
    }

    // get current permissions
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    // request permission if not
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    // return alert if not granted
    if (finalStatus !== 'granted') {
      Alert.alert('Notifications', 'Failed to get push token!');
      return;
    }

    // android platfom config
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    // update token
    token = (await Notifications.getExpoPushTokenAsync()).data;

    return token;
  }



  return (
    <NotificationsContext.Provider value={{ notifications }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;
