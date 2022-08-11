import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Button from './Button';

const GoogleSignIn = () => {
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState();

  const googleSignIn = async () => {
    setLoading(true)
    const { idToken } = await GoogleSignin.signIn().catch((e) => {
      Alert.alert(e.message)
      setLoading(false)
    });
    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    await auth().signInWithCredential(googleCredential)
      .then((res) => {
        setUserInfo(res);
        Alert.alert('UserData', JSON.stringify(res))
      }).catch((e) => {
        Alert.alert(e.message)
      });
    const accessToken = await (await GoogleSignin.getTokens()).accessToken;
    // console.log(res);
    console.log(accessToken);
    setLoading(false)
  }
  const googleSignOut = async () => {
    setLoading(true)
    auth().signOut().then(async () => {
      await GoogleSignin.signOut();
      await GoogleSignin.revokeAccess();
      console.log('User sign-out successfully!');
    }).catch(e => Alert.alert('Error', e.message));
    setLoading(false)
  }

  return (
    <View style={styles.separator}>
      <Button
        loading={loading}
        title={'Google Sign-In'}
        onPress={googleSignIn} />
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleSignIn}
        disabled={loading}
      />
      <Button
        loading={loading}
        title={'Google Sign-Out'}
        onPress={googleSignOut} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  separator: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderColor: 'gray'
  },
})

export default GoogleSignIn;