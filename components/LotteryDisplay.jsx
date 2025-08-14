import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text, Menu, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Clipboard from 'expo-clipboard';
import * as Animatable from 'react-native-animatable';
import CategoryBadge from './CategoryBadge';

const LotteryDisplay = ({ result }) => {
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedDigit, setSelectedDigit] = useState("3 Digit");

  if (!result || !result.displayNumber) 
    return (
    <View style={styles.cardContent}>
      <Text style={{ color: '#FFA500', fontStyle: 'italic' }}>
        No lucky number found for this word.
      </Text>
    </View>
  );
  const handleCopy = async () => {
    const numberMap = {
      "3 Digit": result.number3,
      "4 Digit": result.number4,
      "5 Digit": result.number5,
    };
    await Clipboard.setStringAsync(`${selectedDigit}: ${numberMap[selectedDigit]}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleMenu = () => setVisible(!visible);

  const handleSelect = (digit) => {
    setSelectedDigit(digit);
    setVisible(false);
  };

  const numberMap = {
    "3 Digit": result.number3,
    "4 Digit": result.number4,
    "5 Digit": result.number5,
  };

  return (
    <Animatable.View animation="fadeInUp" duration={600} style={{ width: '100%' }}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Icon name="ticket-confirmation" size={50} color="#FFD700" />
          <Text style={styles.title}>Your Lucky Number</Text>

          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>
  {result.displayNumber?.length > 0 ? result.displayNumber : 'No number available'}
</Text>

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
  card: {
    backgroundColor: '#fffbe6',
    borderRadius: 15,
    elevation: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FFD700'
  },
  cardContent: {
    alignItems: 'center',
    padding: 25
  },
  title: {
    marginVertical: 15,
    color: '#FFA500',
    fontWeight: 'bold',
    fontFamily: 'PlayfairDisplay',
    fontSize: 22
  },
  numberContainer: {
    marginVertical: 20
  },
  numberText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFD700',
    fontFamily: 'PlayfairDisplay'
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 8
  },
  copyText: {
    color: '#FFA500',
    marginLeft: 6,
    fontWeight: 'bold'
  },
  subtitle: {
    fontStyle: 'italic',
    marginTop: 10,
    color: '#FFA500',
    fontFamily: 'Inter'
  },
  menuWrapper: {
    marginBottom: 10
  },
  menuButton: {
    borderColor: '#FFA500'
  }
});

export default LotteryDisplay;
