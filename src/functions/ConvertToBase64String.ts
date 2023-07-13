import { Buffer } from "buffer"


export default (image: any) => {
    return Buffer.from(image.buffer).toString("base64");;
}