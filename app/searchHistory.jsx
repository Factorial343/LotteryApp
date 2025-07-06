import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RecentSearches from '../components/RecentSearches';

export default function SearchHistoryPage({ navigation }) {
  // Optionally, add a handler for when a search is selected
  const handleSelect = (word) => {
    // If you want to navigate or trigger a search, do it here
    // For example: navigation.navigate('mainApp', { word });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search History</Text>
      <RecentSearches onSelect={handleSelect} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#1e293b' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
});
