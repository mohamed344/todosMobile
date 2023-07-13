
import mime from "mime";

export default ({ uri }: any) => {
    const fileName = uri.split('/').pop();
    return { uri, name: fileName, type: mime.getType(fileName) }
}
