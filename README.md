# react-native-thesis
A React Native library with helpful components to build the UI of a news application really fast. This is part of my thesis at International Hellenic University.

In order to use this library first you have to install the node modules the root folder and in the /examples folder. 

```
npm install 
cd examples && npm install
```

To test the News Application Demo:

```
cd examples
react-native run-android

or

react-native run-ios
```

To use the News Applicatin you'll need an API key from NewsApi. They're free for development, open-source, and non-commercial use and you can get one over [here](https://newsapi.org).

Simple change this one line of code at /examples/src/config/rest_config.js

```
export const articles_url = "https://newsapi.org/v2/top-headlines";
export const language = "us";
export const category = "general";

export const _api_key = "YOUR_API_KEY_GOES_HERE";
```
