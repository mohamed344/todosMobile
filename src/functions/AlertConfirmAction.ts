import { Alert } from 'react-native';


export default (
    next: any,
    message: string = "Do you really want to delete this? this process cannot be undone.",
    action: string = "Delete"): void => {
    Alert.alert(
        "Are you sure?",
        message,
        [
            {
                text: "Cancel",
                onPress: () => console.log("Canceled"),
                style: "cancel"
            },
            {
                text: action, onPress: () => next()
            }
        ]
    );
}
