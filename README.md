# React Native Multiple Schemes & Multiple Environments Config

### Guide:

- Android: 
  - https://www.youtube.com/watch?v=Lt-1X8bgB6g&t=0s
  - https://blog.logicwind.com/adding-multiple-target/
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
  project.ext.envConfigFiles = [
    dev: ".env.dev",  
    stag: ".env.stag",
    prod: ".env.prod",
  ]
  apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
  ```


