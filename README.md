# Firebase

clone then repo and then go into root dir of the app and run
```
npm install or yarn
npm start or react-native start
npm run android or yarn android
```
ios
```
pod install
npm run ios or yarn ios
```
1. **create new firebase project from firebase console**
2. **add google-services.json file in android/app folder**
3. **add sha keys in firebase project settings**


____________________________________________________________________
### Generate keystore
**Move to RootProject-Directory/android/app then run this command to generate new keystore**
```
keytool -genkeypair -v -storetype PKCS12 -keystore firebase.keystore -alias fbalias -keyalg RSA -keysize 2048 -validity 10000
```

### Get Debug signing certificate SHA-1 key:
**first move to your keystore file dir. then run this command**
```
keytool -list -v -keystore firebase.keystore -alias fbalias -storepass android -keypass android
```
_____________________________________________________________________