
import { useTranslation } from "react-i18next";
import { Alert, Linking } from "react-native";
import * as Location from 'expo-location';


/**
* @Method Request premissions
* @returns null
* */

const RequestLocationPermission = () => {
    const { t } = useTranslation();

    Alert.alert(
        t('locationpermission'),
        t('locationaccess'),
        [
            { text: t('gotosettings'), onPress: () => Linking.openSettings() },
            { text: t('cancel'), style: 'cancel' },
        ],
        { cancelable: false }
    );
};


export default async () => {

    try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            RequestLocationPermission();
            return;
        }

        let device_location = await Location.getCurrentPositionAsync({});
        return device_location;
    } catch (error) {
        console.error(error);
    }

}
