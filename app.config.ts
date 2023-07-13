import 'dotenv/config';


export default {

  expo: {
    name: "Boilerplate",
    slug: "boilerplate",
    owner: "noteasy",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#FFFFFF"
    },
    plugins: [
      [
        "expo-notifications",
        {
          icon: "./assets/icon.png",
          color: "#ffffff",
          /*sounds: [
            "./local/assets/notification-sound.wav",
            "./local/assets/notification-sound-other.wav"
          ]*/
        }
      ]
    ],
    notification: {
      icon: "./assets/icon.png",
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      config: {
        googleMapsApiKey: "AIzaSyCt5VIEH-krQyGcSHJVLc_MXJA_AHsBjJM"
      }
    },
    android: {
      package: "com.noteasy.boilerplate",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/playstore.png",
        backgroundColor: "#FFFFFF"
      },
      config: {
        googleMaps: {
          apiKey: "AIzaSyCt5VIEH-krQyGcSHJVLc_MXJA_AHsBjJM" 
        }
      }
    },
    web: {
      favicon: "./assets/favicon.ico"
    },
    extra: {
      // APP CONFIG HERE
      API_URL: "", // your api url
      X_API_KEY: "", // http://your-api-key/
      TIMEOUT: 15000,
      SOCKET: "", // ws://your-api-key/
      GOOGLE_API_KEY: 'AIzaSyCt5VIEH-krQyGcSHJVLc_MXJA_AHsBjJM',
      //SOCKET: "ws://api.dinna.com",
      eas: {
        projectId: "" // set the product id after creating a project in expo dev
      }
    }
  }
}
