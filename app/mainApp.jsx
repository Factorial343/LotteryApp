import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import LotteryDisplay from '../components/LotteryDisplay.jsx';
import NumberInput from '../components/NumberInput.jsx';
import * as FileSystem from 'expo-file-system';
import { readString } from 'react-native-csv';
import numbers from '../assets/numbers.json';


export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

const fetchNumber = async (word) => {
  try {
    setLoading(true);

    // Since numbers is a JSON array, no need to read or parse files
    const entry = numbers.find(
      item => item.word.toLowerCase() === word.toLowerCase()
    );

    setResult(entry ? entry.number : 'Not found');
  } catch (error) {
    console.error('Error:', error);
    setResult('Error loading data');
  } finally {
    setLoading(false);
  }
};


  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Lucky Numbers Book" />
        </Appbar.Header>
        <View style={styles.content}>
          <NumberInput onSubmit={fetchNumber} loading={loading} />
          <LotteryDisplay result={result} />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3f51b5',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});
