import { ExpoPushToken } from "expo-notifications";


export default interface Device {
  isDevice: boolean;
  manufacturer: string;
  modelName: string;
  osVersion: string;
  deviceName: string;
  expoPushToken?: ExpoPushToken | string;
  createdAt: Date;
  updatedAt?: Date;
}