import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, ScrollView } from 'react-native';
import EmailSignIn from './src/components/EmailSignIn';
import GoogleSignIn from './src/components/GoogleSignIn';
import PhoneSignIn from './src/components/PhoneSignIn';

const App = () => {

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }} style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <GoogleSignIn />
      <EmailSignIn />
      <PhoneSignIn />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})

export default App;