import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator, Image, View } from 'react-native';
import Colors from '../Colors';

const Button = ({ title, onPress, loading }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color={'blue'} />
      ) : <Text style={styles.font}>{title}</Text>}
    </TouchableOpacity>
  )
}

export const ImageButton = ({ image, title, onPress, size }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
        <Image source={image} style={{
          width: size,
          height: size,
          tintColor: '#777',
        }} />
      </TouchableOpacity>
      <Text style={{ textAlign: 'center' }}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    marginVertical: 10,
    paddingHorizontal: 28,
    padding: 10,
    elevation: 8,
  },
  font: {
    fontSize: 18,
  },
  btnContainer: {
    padding: 10,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 10,
    elevation: 8,
  },
})

export default Button;