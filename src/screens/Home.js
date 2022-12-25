import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

const Home = () => {

  const googleSignOut = async () => {
    setLoading(true)
    auth().signOut().then(async () => {
      await GoogleSignin.signOut();
      await GoogleSignin.revokeAccess();
      console.log('User sign-out successfully!');
    }).catch(e => Alert.alert('Error', e.message));
    setLoading(false)
  }

  const emailSignOut = async () => {
    setLoading(false);
    auth().signOut()
      .then(() => {
        Alert.alert('', 'User account signed out')
      })
      .catch(error => {
        Alert.alert('', error.message)
      });
    setLoading(false);
  }
  return (
    <View>
      <Button
        loading={loading}
        title={'Google Sign-Out'}
        onPress={googleSignOut} />
      <Button
        loading={loading}
        title={'Email/Password sign-out'}
        onPress={emailSignOut} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})