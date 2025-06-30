import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LotteryDisplay = ({ result }) => {
  if (!result) return null;

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Icon name="ticket-confirmation" size={50} color="#FFD700" />
        <Text variant="titleLarge" style={styles.title}>
          Your Lucky Number
        </Text>
        <View style={styles.numberContainer}>
          {result.split('').map((digit, index) => (
            <View key={index} style={styles.digitBox}>
              <Text variant="headlineMedium" style={styles.digit}>
                {digit}
              </Text>
            </View>
          ))}
        </View>
        <Text variant="bodySmall" style={styles.subtitle}>
          Generated from our secret lottery book
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  cardContent: {
    alignItems: 'center',
    padding: 25,
  },
  title: {
    marginVertical: 15,
    color: '#333',
    fontWeight: 'bold',
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  digitBox: {
    width: 50,
    height: 70,
    backgroundColor: '#3f51b5',
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  digit: {
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontStyle: 'italic',
    marginTop: 10,
    color: '#777',
  },
});

export default LotteryDisplay;
