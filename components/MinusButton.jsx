import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MinusButton({ func }) {

  return (
    <TouchableOpacity 
      style={styles.grayButton}
      onPress={func}>
      <Text>Minus</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  grayButton: {
    width: '40%',
    backgroundColor: '#939597',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10
  }
});