import * as FileSystem from "expo-file-system";
import { MessageAPI } from "../api/message";
import mime from "mime";


function getFileUri(name: any, mimetype: string) {
  return FileSystem.documentDirectory + `${encodeURI(name)}.${mime.getExtension(mimetype)}`;
}

export default async (_id: string): Promise<string> => {
  const message = (await MessageAPI.get(_id)).data;

  const base64 = message.attachment.buffer;
  const filename = message.attachment.createdAt.toString();
  const fileUri = getFileUri(filename, message.attachment.mimetype);

  await FileSystem.writeAsStringAsync(fileUri, base64, { encoding: FileSystem.EncodingType.Base64 });  
  return fileUri;
}