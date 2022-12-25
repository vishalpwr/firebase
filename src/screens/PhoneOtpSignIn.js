import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PhoneSignIn from '../components/PhoneSignIn'

const PhoneOtpSignIn = () => {
  return (
    <View style={styles.container}>
      <PhoneSignIn />
    </View>
  )
}

export default PhoneOtpSignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})