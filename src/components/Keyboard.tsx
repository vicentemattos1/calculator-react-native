import {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface KeyboardProps {
  value: string;
  amount: string;
  setDisplay: (value: string) => void;
  setAmount: (value: string) => void;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 40,
  },
  operator: {
    backgroundColor: 'orange',
    color: 'white',
  },
  button: {
    padding: 10,
    height: (Dimensions.get('window').height - 260) / 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'gray',
    borderRadius: 10,
    width: Dimensions.get('window').width / 4,
  },
  double: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  triple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export const Keyboard = ({
  setDisplay,
  value,
  amount,
  setAmount,
}: KeyboardProps) => {
  const [clearOnNext, setClearOnNext] = useState(false);
  const buttons = [
    {
      label: 'AC',
      action: clearDisplay,
      size: '3xl',
    },
    {
      label: '/',
      isOperator: true,
      action: (digit: string) => Operation(digit),
    },
    {
      label: '7',
      action: (digit: string) => addDigit(digit),
    },
    {
      label: '8',
      action: (digit: string) => addDigit(digit),
    },
    {
      label: '9',
      action: (digit: string) => addDigit(digit),
    },
    {
      label: '*',
      isOperator: true,
      action: (digit: string) => Operation(digit),
    },
    {
      label: '4',
      action: (digit: string) => addDigit(digit),
    },
    {
      label: '5',
      action: (digit: string) => addDigit(digit),
    },
    {
      label: '6',
      action: (digit: string) => addDigit(digit),
    },
    {
      label: '-',
      isOperator: true,
      action: (digit: string) => Operation(digit),
    },
    {
      label: '1',
      action: (digit: string) => addDigit(digit),
    },
    {
      label: '2',
      action: (digit: string) => addDigit(digit),
    },
    {
      label: '3',
      action: (digit: string) => addDigit(digit),
    },
    {
      label: '+',
      isOperator: true,
      action: (digit: string) => Operation(digit),
    },
    {
      label: '0',
      action: (digit: string) => addDigit(digit),
      size: '2xl',
    },
    {
      label: '.',
      action: (digit: string) => addDigit(digit),
    },
    {
      label: '=',
      isOperator: true,
      action: (digit: string) => Operation(digit),
    },
  ];

  function addDigit(digit: string) {
    if (digit !== '.') {
      if (value === '0') {
        setDisplay(digit);
        return;
      }
    } else if (String(value).includes('.')) {
      return;
    }

    if (clearOnNext) {
      if (digit === '.') {
        setDisplay('0.');
        setClearOnNext(false);
        return;
      }
      setDisplay(digit);
      setClearOnNext(false);
      return;
    }

    const newValue = value + digit;
    setDisplay(newValue);
  }

  function Operation(digit: string) {
    if (digit === '=') {
      if (!amount) {
        return;
      }
      const newValue = eval(`${amount}${value}`);
      setDisplay(newValue);
      setClearOnNext(true);
      setAmount('');
      return;
    }
    if (!amount) {
      setAmount(value + digit);
      setDisplay(amount);
    } else if (value) {
      const newValue = eval(`${amount}${value}`);
      setAmount(`${newValue}${digit}`);
      setDisplay('');
    }
  }

  function clearDisplay() {
    setDisplay('0');
    setAmount('');
  }

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => button.action(button.label)}
          style={[
            styles.button,
            button.size === '2xl' ? styles.double : null,
            button.size === '3xl' ? styles.triple : null,
            button.isOperator ? styles.operator : null,
          ]}>
          <Text style={styles.text}>{button.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
