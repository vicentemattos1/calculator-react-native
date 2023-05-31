import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Display} from './components/Display';
import {Keyboard} from './components/Keyboard';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});

function App(): JSX.Element {
  const [display, setDisplay] = useState('0');
  const [amount, setAmount] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Display value={display} amount={amount} />
      <Keyboard
        value={display}
        setDisplay={setDisplay}
        amount={amount}
        setAmount={setAmount}
      />
    </SafeAreaView>
  );
}

export default App;
