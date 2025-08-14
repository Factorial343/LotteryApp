import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#fffbe6', '#fff8dc', '#fff']} style={styles.cardGradient}>
        <Card style={styles.card} elevation={8}>
          <Card.Content style={styles.content}>
            <Icon name="ticket-confirmation" size={64} color="#FFD700" style={styles.icon} />
            <Text variant="headlineLarge" style={styles.title}>
              Mr. Know It All's{'\n'}Lottery Dream Book
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              Enter a word and discover its secret lottery number! Our classic lottery book brings tradition to your fingertips.
            </Text>
            <Link href="/mainApp" asChild>
              <Button
                mode="contained"
                icon="magnify"
                style={styles.button}
                labelStyle={styles.buttonLabel}
              >
                Start Searching
              </Button>
            </Link>
          </Card.Content>
        </Card>
      </LinearGradient>
      <Text variant="bodySmall" style={styles.footer}>
        "The most comprehensive lottery dream book in the world"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  cardGradient: { borderRadius: 20, width: '100%', maxWidth: 380 },
  card: { borderRadius: 20, backgroundColor: '#fffdf5' },
  content: { alignItems: 'center' },
  icon: { marginBottom: 16 },
  title: { fontFamily: 'PlayfairDisplay', textAlign: 'center', color: '#FFA500', marginBottom: 12, fontWeight: 'bold' },
  paragraph: { fontFamily: 'Inter', color: '#FFA500', textAlign: 'center', marginBottom: 24 },
  button: { backgroundColor: '#FFD700', borderRadius: 8, paddingVertical: 6, paddingHorizontal: 20 },
  buttonLabel: { color: '#FFA500', fontWeight: 'bold', fontSize: 18 },
  footer: { marginTop: 32, color: '#FFA500', fontStyle: 'italic', textAlign: 'center' },
});
