import * as DocumentPicker from 'expo-document-picker';


export default async (): Promise<any> => {
    let result = await DocumentPicker.getDocumentAsync({});
    return result
}
