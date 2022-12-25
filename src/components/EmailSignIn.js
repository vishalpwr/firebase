import React, { useState } from 'react';
import { View, StyleSheet, Alert, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from './Button';
import Colors from '../Colors';

const EmailSignIn = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailSignUp = async () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Success!', 'User account created & signed in!')
      })
      .catch(error => {
        let e = ''
        if (error.code === 'auth/email-already-in-use') {
          e = 'That email address is already in use!'
        }

        if (error.code === 'auth/invalid-email') {
          e = 'That email address is invalid!'
        }
        console.log(error);
        Alert.alert('Error!', e.message)
      });
    setLoading(false);
  }
  const emailSignIn = async () => {
    setLoading(true);
    auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('User account signed in!', res);
      })
      .catch(error => {
        let e = ''
        if (error.code === 'auth/invalid-email') {
          e = 'That email address is invalid!'
        }
        console.log(error);
        Alert.alert('Error!', e.message)
      });
    setLoading(false);
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
    <View style={styles.container}>
      <TextInput
        value={email}
        placeholder='Email'
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        value={password}
        placeholder='Password'
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <View style={styles.buttons}>
        <Button
          loading={loading}
          title={'Sign-up'}
          onPress={emailSignUp} />
        <Button
          loading={loading}
          title={'Sign-in'}
          onPress={emailSignIn} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  input: {
    backgroundColor: Colors.alphaPrimary,
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    paddingHorizontal: 16,
  },
  buttons: {
    marginVertical: 10,
  },
})

export default EmailSignIn;