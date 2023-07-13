import * as FileSystem from "expo-file-system";
import getFileProps from "./getFileProps";

const callback = (downloadProgress: any) => {
  const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
  console.log(progress);
};



export default async (uri: string): Promise<string | undefined> => {
  const { name }: any = getFileProps({ uri })
  console.log(name);

  const downloadResumable = FileSystem.createDownloadResumable(
    uri,
    FileSystem.documentDirectory + name,
    {},
    callback
  );

  try {
    const { uri }: any = await downloadResumable.resumeAsync();
    console.log('Finished downloading to ', uri);
    return uri;
  } catch (e) {
    console.error(e);
  }
}