import { Platform } from "react-native";
export const isAndroid = () => Platform.OS === 'android';
export const isiOS = () => Platform.OS === 'ios';