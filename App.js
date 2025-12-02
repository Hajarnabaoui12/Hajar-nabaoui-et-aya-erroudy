import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [op, setOp] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const x = parseFloat(a);
    const y = parseFloat(b);

    if (isNaN(x) || isNaN(y) || op === '') {
      setResult('Erreur : valeurs invalides');
      return;
    }

    let r = 0;
    if (op === '+') r = x + y;
    else if (op === '-') r = x - y;
    else if (op === '*') r = x * y;

    setResult(r);
  };

  const clear = () => {
    setA('');
    setB('');
    setOp('');
    setResult(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculatrice</Text>

      <TextInput
        style={styles.input}
        placeholder="Valeur A"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />

      <TextInput
        style={styles.input}
        placeholder="Valeur B"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />

      <View style={styles.row}>
        <Button title="+" onPress={() => setOp('+')} />
        <Button title="-" onPress={() => setOp('-')} />
        <Button title="*" onPress={() => setOp('*')} />
      </View>

      <Button title="Calculer" onPress={calculate} />

      {result !== null && (
        <Text style={styles.result}>Résultat : {result}</Text>
      )}

      <Button title="Clear" color="red" onPress={clear} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: 'white'   
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center',
    color: 'black' 
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: 'black' 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  result: {
    marginVertical: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black' 
  },
});
