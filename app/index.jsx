import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={8}>
        <Card.Content style={styles.content}>
          <Icon name="ticket-confirmation" size={64} color="#FFD700" style={styles.icon} />
          <Text variant="headlineLarge" style={styles.title}>
            Lucky Numbers Book
          </Text>
          <Text variant="bodyMedium" style={styles.paragraph}>
            Enter a word and discover its secret lottery number! Our classic lottery book brings tradition to your fingertips.
          </Text>
          <Link href="/mainApp" asChild>
            <Button
              mode="contained"
              icon="magnify"
              style={styles.button}
              contentStyle={{ flexDirection: 'row-reverse' }}
              labelStyle={styles.buttonLabel}
            >
              Start Searching
            </Button>
          </Link>
        </Card.Content>
      </Card>
      <Text variant="bodySmall" style={styles.footer}>
        Good luck and play responsibly!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f51b5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    borderRadius: 20,
    paddingVertical: 32,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    color: '#3f51b5',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  paragraph: {
    color: '#444',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonLabel: {
    color: '#3f51b5',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    marginTop: 32,
    color: '#fff',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default HomeScreen;
