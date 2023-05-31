import {StyleSheet, Text, View} from 'react-native';

interface DisplayProps {
  value: string;
  amount: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 20,
    height: 150,
  },
  text: {
    fontSize: 50,
    color: 'white',
  },
  textAmount: {
    fontSize: 25,
    opacity: 0.5,
  },
});

export const Display = ({value, amount}: DisplayProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textAmount]}>{amount}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};
