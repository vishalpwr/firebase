import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import Button from './Button';

export default function PhoneSignIn() {
  const [loading, setLoading] = useState(false)
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
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
      <View style={styles.separator}>
        <Button
          title="Phone Number Sign In"
          loading={loading}
          onPress={() => signInWithPhoneNumber('+91 9999988888')}
        />
      </View>
    );
  }

  return (
    <View style={styles.separator}>
      <TextInput value={code} onChangeText={text => setCode(text)}
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
  input: {
    backgroundColor: '#eee',
    marginVertical: 10,
    width: '80%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
  },
  separator: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 2,
  },
})
