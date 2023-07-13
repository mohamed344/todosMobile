import * as ImagePicker from 'expo-image-picker';
import getFileProps from './getFileProps';

export default async (mediaTypes: ImagePicker.MediaTypeOptions = ImagePicker.MediaTypeOptions.Images): Promise<any> => {

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
    });

    if (!result.canceled) return getFileProps(result.assets[0]);
}
