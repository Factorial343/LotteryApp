import React, { useState } from 'react';
import { Link } from 'expo-router';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import LotteryDisplay from '../components/LotteryDisplay';
import NumberInput from '../components/NumberInput';
import RecentSearches from '../components/RecentSearches';
import HowItWorks from '../components/HowItWorks';
import numbers from '../assets/numbers.json';
import { useSearchHistory, SearchHistoryProvider } from '../context/SearchHistoryContext';

export default function MainApp() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNumber = async (word) => {
    setLoading(true);
    const entry = numbers.find(item => item.word.toLowerCase() === word.toLowerCase());
    setResult(entry ? entry : null);
    setLoading(false);
  };

  return (
    <PaperProvider>
      <SearchHistoryProvider>
        <ScrollView contentContainerStyle={styles.content}>
          <NumberInput onSubmit={fetchNumber} loading={loading} />
          <LotteryDisplay result={result} />
          
          <HowItWorks />
        </ScrollView>
      </SearchHistoryProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, alignItems: 'center' },
  historyLink: {
    color: '#FFA500',
    fontWeight: 'bold',
    marginVertical: 12,
    fontSize: 16,
    fontFamily: 'Inter',
    textDecorationLine: 'underline'
  }
});
