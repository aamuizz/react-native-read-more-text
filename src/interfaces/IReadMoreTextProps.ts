
import { TextStyle, StyleProp, TextProps } from "react-native";
export interface  IReadMoreTextProps extends TextProps {
    style?: StyleProp<TextStyle>;
    numberOfLines?: number;
    children: string;
    readMoreText?: string;
    readLessText?: string;
    readMoreStyle?: StyleProp<TextStyle>;
    readLessStyle?: StyleProp<TextStyle>;
}