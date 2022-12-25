import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import Button from './Button';
import Colors from '../Colors';

export default function PhoneSignIn() {
  const [loading, setLoading] = useState(false)
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    setLoading(true);
    await auth().signInWithPhoneNumber(phoneNumber)
      .then((res) => {
        setConfirm(res);
        // console.log(res);
      }).catch(e => Alert.alert('error', e.message));
    setLoading(false);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
      throw new Error(error);
    }
  }

  const verifyOtp = () => {
    setLoading(true);
    confirmCode().then(() => {
      Alert.alert('Success', 'Otp verified!');
      setConfirm(null)
    }).catch(e => Alert.alert('Error', e.message))
    setLoading(false);
  }

  if (!confirm) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Enter Phone Number</Text>
        <TextInput
          value={phoneNumber}
          placeholder='Phone Number'
          onChangeText={text => setPhoneNumber(text)}
          style={styles.input}
        />
        <Button
          title="Phone Number Sign In"
          loading={loading}
          onPress={() => signInWithPhoneNumber(phoneNumber)}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter OTP Code</Text>
      <TextInput
        value={code}
        placeholder="OTP"
        onChangeText={text => setCode(text)}
        style={styles.input}
      />
      <Button
        loading={loading}
        title="Confirm Code"
        onPress={verifyOtp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: Colors.alphaPrimary,
    marginVertical: 10,
    width: '100%',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
