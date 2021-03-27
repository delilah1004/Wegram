import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlusButton from './components/PlusButton'
import MinusButton from './components/MinusButton'

export default function App() {

  const [count, setCount] = useState(0);

  const Minus = () => {
    setCount(count - 1)
  }

  const Plus = () => {
    setCount(count + 1)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>카운터 : {count}</Text>
      <View style={styles.buttonContainer}>
        <PlusButton func={Plus}/>
        <MinusButton func={Minus}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 20,
    paddingVertical: 20,
  },
  buttonContainer: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});