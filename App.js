import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthPage from './src/screens/AuthPage';
import PhoneOtpSignIn from './src/screens/PhoneOtpSignIn';

GoogleSignin.configure({
  webClientId: 'XXXX-XXXXXX.apps.googleusercontent.com',
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="AuthPage" component={AuthPage} />
        <Stack.Screen name="PhoneSignIn" component={PhoneOtpSignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;