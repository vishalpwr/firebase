import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, ScrollView } from 'react-native';
import GoogleSignIn from './src/components/GoogleSignIn';

const App = () => {

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }} style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Text style={styles.text}>Firebase Authentications</Text>
      <GoogleSignIn />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
})

export default App;