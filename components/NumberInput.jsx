import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, ActivityIndicator, Text } from 'react-native-paper';

const NumberInput = ({ onSubmit, loading }) => {
  const [word, setWord] = useState('');

  const handleSubmit = () => {
    if (word.trim()) {
      onSubmit(word.trim());
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={styles.label}>
        Enter a Word
      </Text>
      <TextInput
        value={word}
        onChangeText={setWord}
        style={styles.input}
        mode="outlined"
        autoCapitalize="none"
        disabled={loading}
        placeholder="Type a word..."
      />
      {loading ? (
        <ActivityIndicator animating={true} color="#3f51b5" />
      ) : (
        <Button
          mode="contained"
          onPress={handleSubmit}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Find Lucky Number
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  label: {
    marginBottom: 8,
    color: '#3f51b5',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3f51b5',
    paddingVertical: 5,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default NumberInput;
