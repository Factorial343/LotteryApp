import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Clipboard from 'expo-clipboard';
import * as Animatable from 'react-native-animatable';
import CategoryBadge from './CategoryBadge';

const LotteryDisplay = ({ result }) => {
  const [copied, setCopied] = useState(false);
  if (!result) return null;

  const handleCopy = async () => {
    await Clipboard.setStringAsync(result.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Animatable.View animation="fadeInUp" duration={600} style={{ width: '100%' }}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Icon name="ticket-confirmation" size={50} color="#FFD700" />
          <Text style={styles.title}>Your Lucky Number</Text>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{result.number}</Text>
          </View>
          <CategoryBadge category={result.category || 'general'} />
          <TouchableOpacity onPress={handleCopy} style={styles.copyButton}>
            <Icon name={copied ? "check" : "content-copy"} size={20} color="#FFA500" />
            <Text style={styles.copyText}>{copied ? "Copied!" : "Copy Number"}</Text>
          </TouchableOpacity>
          <Text style={styles.subtitle}>Generated from our secret lottery book</Text>
        </Card.Content>
      </Card>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fffbe6', borderRadius: 15, elevation: 10, marginBottom: 20, borderWidth: 1, borderColor: '#FFD700' },
  cardContent: { alignItems: 'center', padding: 25 },
  title: { marginVertical: 15, color: '#FFA500', fontWeight: 'bold', fontFamily: 'PlayfairDisplay', fontSize: 22 },
  numberContainer: { marginVertical: 20 },
  numberText: { fontSize: 48, fontWeight: 'bold', color: '#FFD700', fontFamily: 'PlayfairDisplay' },
  copyButton: { flexDirection: 'row', alignItems: 'center', marginTop: 10, padding: 8 },
  copyText: { color: '#FFA500', marginLeft: 6, fontWeight: 'bold' },
  subtitle: { fontStyle: 'italic', marginTop: 10, color: '#FFA500', fontFamily: 'Inter' },
});

export default LotteryDisplay;
