import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import { Text, StatusBar, StyleSheet, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import Colors from '../Colors';
import { ImageButton } from '../components/Button';
import EmailSignIn from '../components/EmailSignIn';
import GoogleSignIn from '../components/GoogleSignIn';


GoogleSignin.configure({
  webClientId: 'XXXX-XXXXXX.apps.googleusercontent.com',
});

const AuthPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <Image source={require('../assets/images/image00.png')} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.hello}>🟠 Firebase Authentication</Text>
        <EmailSignIn />
        <Text style={{ textAlign: 'center' }}>Or</Text>
        <View style={styles.separator} />
        <View style={styles.row}>
          <GoogleSignIn />
          <ImageButton
            size={28}
            title={'Phone'}
            onPress={() => navigation.navigate('PhoneSignIn')}
            image={require('../assets/images/phone.png')} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  text: {
    fontSize: 16,
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 50,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  hello: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    width: '70%',
    alignSelf: 'center',
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: 'gray'
  },
  row: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    justifyContent: 'space-around',
  },
  image: {
    width: 350,
    height: 100,
    marginVertical: 70,
  },
})

export default AuthPage;