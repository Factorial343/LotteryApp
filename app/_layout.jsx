import React from 'react';
import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Appbar } from 'react-native-paper';
import { Inter_400Regular } from '@expo-google-fonts/inter';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'PlayfairDisplay': require('../assets/fonts/PlayfairDisplay-Regular.ttf'), Inter_400Regular
  });

  if (!fontsLoaded) return null;

  return (
    <LinearGradient colors={['#fffbe6', '#fff8dc', '#fff']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Dream Book" titleStyle={styles.headerTitle} />
        </Appbar.Header>
        <Slot />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Your trusted lottery number companion since 1950</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(255,165,0,0.92)', // orange
    borderBottomWidth: 1,
    borderBottomColor: '#FFD700', // yellow
  },
  headerTitle: {
    fontFamily: 'PlayfairDisplay',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255,215,0,0.2)', // light yellow
    borderTopWidth: 1,
    borderTopColor: '#FFA500',
  },
  footerText: {
    color: '#FFA500',
    fontFamily: 'Inter',
    fontSize: 14,
  },
});
