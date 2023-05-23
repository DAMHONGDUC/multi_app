# Multiple Schemes and Configurations in a React Native

### Guide:

- Android: https://www.youtube.com/watch?v=Lt-1X8bgB6g&t=0s
- iOS: https://www.youtube.com/watch?v=rhdOWYqc-Cg

### iOS Note: echo script
  ```
  echo ".env" > /tmp/envfile
  ```

### iOS Note: after add scheme target to Podfile, just run:
  ```
  rm -rf Pods Podfile.lock
  ```
  
  ```
  pod deintegrate
  ```
  
  ```
  pod install
  ```
  
### Android note:
- You'll also need to manually apply a plugin to your app, from android/app/build.gradle:
  ```
  // 2nd line, add a new apply:
  apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
  ```
- add this to android/app/proguard-rules.pro
  - check the applicationId, ex: 
    ```
    defaultConfig {
        applicationId "my.app.abc"
        ...
    }
    ```
  ```
  -keep class com.reactnativecompressor.** {*;}
  -keep class ${applicationId}.BuildConfig { *;}
  ```
  
### Script
  ```
    "ios-dev": "react-native run-ios --scheme=dev --configuration Debug",
    "ios-stag": "react-native run-ios --scheme=stag --configuration Debug",
    "ios-prod": "react-native run-ios --scheme=prod --configuration Debug",
    "ios-dev-release": "react-native run-ios --scheme=dev --configuration Release",
    "ios-stag-release": "react-native run-ios --scheme=stag --configuration Release",
    "ios-prod-release": "react-native run-ios --scheme=prod --configuration Release",
    "android-dev": "ENVFILE=.env.dev react-native run-android",
    "android-stag": "ENVFILE=.env.stag react-native run-android",
    "android-prod": "ENVFILE=.env.prod react-native run-android",
    "android-dev-apk": "cd android && ./gradlew clean && ENVFILE=.env.dev ./gradlew assembleRelease",
    "android-stag-apk": "cd android && ./gradlew clean && ENVFILE=.env.stag ./gradlew assembleRelease",
    "android-prod-apk": "cd android && ./gradlew clean && ENVFILE=.env.prod ./gradlew assembleRelease",
    "android-dev-release": "ENVFILE=.env.dev react-native run-android --variant Release",
    "android-stag-release": "ENVFILE=.env.stag react-native run-android --variant Release",
    "android-prod-release": "ENVFILE=.env.prod react-native run-android --variant Release",
    "android-dev-aab": "cd android && ./gradlew clean && ENVFILE=.env.dev ./gradlew bundleRelease",
    "android-stag-aab": "cd android && ./gradlew clean && ENVFILE=.env.stag ./gradlew bundleRelease",
    "android-prod-aab": "cd android && ./gradlew clean && ENVFILE=.env.prod ./gradlew bundleRelease"
  ```


