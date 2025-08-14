import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { useSearchHistory } from '../../context/SearchHistoryContext';
import CategoryBadge from '../../components/CategoryBadge';

export default function HistoryScreen() {
  const { history, clearHistory } = useSearchHistory();

  if (history.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No past searches yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search History</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => item.word + index}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.word}>{item.word}</Text>
              <Text style={styles.number}>Lucky Number: {item.number}</Text>
              <CategoryBadge category={item.category || 'general'} />
            </Card.Content>
          </Card>
        )}
      />
      {/* Clear History Button */}
      <Button
        mode="contained"
        onPress={clearHistory}
        style={styles.clearButton}
        labelStyle={styles.clearButtonLabel}
      >
        Clear History
      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#FFA500', marginBottom: 16, fontFamily: 'PlayfairDisplay' },
  emptyText: { textAlign: 'center', fontSize: 16, color: '#FFA500', marginTop: 40 },
  card: { backgroundColor: '#fffbe6', borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#FFD700' },
  cardContent: { padding: 12 },
  word: { fontSize: 18, fontWeight: 'bold', color: '#FFA500', fontFamily: 'Inter' },
  number: { fontSize: 16, color: '#FFD700', fontFamily: 'Inter', marginTop: 4 },
  clearButton: {
    backgroundColor: '#FFD700',
    marginTop: 16,
    paddingVertical: 6,
  },
  clearButtonLabel: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
});
