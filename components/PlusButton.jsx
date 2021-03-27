import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MinusButton({ func }) {
  return (
    <TouchableOpacity 
      onPress={func}
      style={styles.yellowButton}>
      <Text>Plus</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  yellowButton: {
    width: '40%',
    backgroundColor: '#F5dF4D',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10
  }
});
