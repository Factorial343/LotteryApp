import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useSearchHistory } from '../context/SearchHistoryContext';
import { Link } from 'expo-router';

export default function RecentSearches({ onSelect }) {
  const { searchHistory } = useSearchHistory();

  if (!searchHistory.length) return null;

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {searchHistory.slice(0, 8).map((item, idx) => (
          <Button
            key={idx}
            mode="outlined"
            style={styles.button}
            labelStyle={styles.buttonLabel}
            onPress={() => onSelect(item.word)}
          >
            {item.word} → {item.number}
          </Button>
        ))}
      </ScrollView>
      {/* Add this button below the search history list */}
      <Link href="/searchHistory" asChild>
        <Button
          mode="contained"
          style={styles.historyButton}
          labelStyle={styles.historyButtonLabel}
        >
          View Full Search History
        </Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 16, width: '100%' },
  button: { marginRight: 8, borderColor: '#334155', backgroundColor: 'rgba(51,65,85,0.5)' },
  buttonLabel: { color: '#fff', fontFamily: 'Inter' },
  historyButton: { marginTop: 12, backgroundColor: '#FFD700' },
  historyButtonLabel: { color: '#3f51b5', fontWeight: 'bold' },
});
