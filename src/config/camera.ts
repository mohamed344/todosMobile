import { Platform } from "react-native";

const CameraOptions = Platform.OS == 'ios' ? {} : { quality: 0.7, skipProcessing: true }
export default CameraOptions;