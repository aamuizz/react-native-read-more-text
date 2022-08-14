# react-native-read-more-text
React native library to show text in a brief way and expand it when needed.  It is a lightweight inline read more text component. It is written in Typescript and supports both TS/JS. It can be used with react native cli and expo both.

![Screencast-from-08-14-2022-08_57_52-PM](https://user-images.githubusercontent.com/33664562/184545189-81c3baa3-f59d-4228-975f-23409274e2b8.gif)


### Installation

```
npm i @amuizz/read-more-text --save
```

or with yarn

```
yarn add @amuizz/read-more-text
```

### Usage

```javascript
import React from 'react';
import { View } from 'react-native';
import ReadMoreText from '@amuizz/read-more-text';
const Test = () => {
  return (
    <View>
      <ReadMoreText numberOfLines={1} readMoreText={"read more"} readLessText={"read less"} readMoreStyle={{color: "#CACACA"}} readLessStyle={{color: "#000"}} >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book</ReadMoreText>
    </View>
  );
};
export default Test;
```

## Props

| Prop | Type | Required | Note |
|---|---|---|---|
| `style` | `object or array` | no | text style
| `seeMoreText` | `string` | no | defaults to `more`
| `seeMoreStyle` | `object or array` | no | text style for `more` text
| `seeLessText` | `string` | no | defaults to `less`
| `seeLessStyle` | `object or array` | no | text style for `less` text
| `numberOfLines` | `number` | no | defaults to `1`

Any additional props can be passed down to underlying `Text` component.


#### Drop a star :star: to this repo, if you feel it is good
