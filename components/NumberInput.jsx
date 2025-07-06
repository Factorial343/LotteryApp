import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, ActivityIndicator, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

const NumberInput = ({ onSubmit, loading }) => {
  const [word, setWord] = useState('');

  const handleSubmit = () => {
    if (word.trim()) onSubmit(word.trim());
  };

  return (
    <Animatable.View animation="fadeInDown" duration={600} style={styles.container}>
      <Text style={styles.label}>Enter a Word</Text>
      <TextInput
        value={word}
        onChangeText={setWord}
        style={styles.input}
        mode="outlined"
        autoCapitalize="none"
        disabled={loading}
        placeholder="Type a word..."
        left={<TextInput.Icon name={() => <Icon name="magnify" size={20} color="#FFA500" />} />}
      />
      {loading ? (
        <ActivityIndicator animating={true} color="#FFA500" />
      ) : (
        <Button mode="contained" onPress={handleSubmit} style={styles.button} labelStyle={styles.buttonLabel}>
          Find Lucky Number
        </Button>
      )}
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 30, width: '100%' },
  label: { marginBottom: 8, color: '#FFA500', fontWeight: 'bold', fontFamily: 'Inter' },
  input: { marginBottom: 20, backgroundColor: '#fff' },
  button: { backgroundColor: '#FFD700', paddingVertical: 5 },
  buttonLabel: { fontSize: 18, fontWeight: 'bold', color: '#FFA500', fontFamily: 'Inter' },
});

export default NumberInput;
