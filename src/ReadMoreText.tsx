import React, { useState } from "react";
import { TextLayoutLine, Text } from "react-native";
import { IReadMoreTextProps } from "./interfaces/IReadMoreTextProps";

import { isAndroid, isiOS } from "./util/Platform";

interface TextProperties {
  length: number;
  isTruncatedText: boolean;
}

export default function ReadMoreText({
  style,
  numberOfLines = 1,
  children,
  readMoreText = "more",
  readLessText = "less",
  readMoreStyle = {color: "black"},
  readLessStyle = {color: "black"},
  ...props
}: IReadMoreTextProps) {
  const [readMore, setReadMore] = useState<boolean>(false);
  const [text, setText] = useState<TextProperties>({
    length: 0,
    isTruncatedText: false,
  });
  const getReadMoreStyle = () => {
    if(readMore){
      return readLessStyle;
    }
    return readMoreStyle;
  }
  
  function handleReadMoreText(textLayoutLines: TextLayoutLine[]) {
    let textLength = 0;
    if (textLayoutLines.length > numberOfLines) {
      for (var line=0; line<numberOfLines; line++){
        textLength += textLayoutLines[line].text.length;
      }
      setText({ length: textLength, isTruncatedText: true });
      return;
    }
    setText({ length: children.length, isTruncatedText: false });

  }
  return (
    <>
    {/** 
        iOS always requires one element without a line number 
        to determine the number of lines.
       */}
      {isiOS && (
        <Text
          style={{height: 0}}
          onTextLayout={({ nativeEvent: { lines } }) => {
            if (text.length > 0) {
              return;
            }
            if (isiOS()) {
              handleReadMoreText(lines);
            }
          }}
        >
          {children}
        </Text>
      )}
      <Text
        style={style}
        numberOfLines={text.length === 0 ? numberOfLines : 0}
        onTextLayout={({ nativeEvent: { lines } }) => {
            if (text.length > 0) {
            return;
          }
          if (isAndroid()) {
            handleReadMoreText(lines);
          }
        }}
        {...props}
      >
        {text.isTruncatedText && !readMore && text.length !== 0
          ? `${children.slice(0, text.length - 10).trim()}...`
          : children}
        {text.isTruncatedText && (
          <Text
            style={getReadMoreStyle()}
            onPress={() => setReadMore(!readMore)}
          >
            {readMore ? readLessText : readMoreText}
          </Text>
        )}
      </Text>
    </>
  );
}
