import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const Button = ({ title, onPress, loading }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color={'blue'} />
      ) : <Text style={styles.font}>{title}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'blue',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: 24,
    color: 'blue'
  },
})

export default Button;