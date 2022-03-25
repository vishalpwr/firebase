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