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
  grayButton: {
    width: '40%',
    backgroundColor: 'gray',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
});
