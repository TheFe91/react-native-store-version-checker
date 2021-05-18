# react-native-store-version-checker

A plugin who tells you when your React Native app needs to be updated

## Installation

```shell
npm i react-native-store-version-checker
```

or

```shell
yarn add react-native-store-version-checker
```

## Usage

```jsx
import { checkIOSNeedsUpdate, checkAndroidNeedsUpdate } from 'react-native-store-version-checker';
import { Platform, Alert } from 'react-native';

// At App Start
useEffect(() => {
    (Platform.OS === 'android' ? checkAndroidNeedsUpdate() : checkIOSNeedsUpdate()).then((shouldUpdate) => {
        if (shouldUpdate) {
            // do stuff (open AlertDialog, block app execution, ...)
        } else {
            // start your App
        }
    });
}, []);
```
