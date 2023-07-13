import Attachment from "./Attachment";
import Device from "./Device";
import Preference from "./Preference";
import Rating from "./Rating";
import Role from "./Role";


export default interface User {
    _id?: string,
    firstname: string;
    lastname: string;
    name: string;
    isMale: boolean;
    picture?: Attachment;
    tel: number;
    device?: Device;
    password?: string;
    role?: Role;
    verified?: boolean;
    enabled?: boolean;
    rating?: Rating;
    preference?: Preference;
    firstSignIn?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}