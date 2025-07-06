import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const steps = [
  { num: 1, title: 'Enter Your Word', desc: 'Type any word that comes to mind - dreams, objects, names, or feelings.' },
  { num: 2, title: 'Get Your Number', desc: 'Our dream book instantly provides the corresponding lottery number.' },
  { num: 3, title: 'Play Your Luck', desc: 'Use your lucky number in your favorite lottery games.' },
];

export default function HowItWorks() {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>How It Works</Text>
      <View style={styles.stepsContainer}>
        {steps.map(step => (
          <View key={step.num} style={styles.step}>
            <LinearGradient colors={['#FFD700', '#FFA500']} style={styles.circle}>
              <Text style={styles.circleText}>{step.num}</Text>
            </LinearGradient>
            <Text style={styles.title}>{step.title}</Text>
            <Text style={styles.desc}>{step.desc}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: 16, padding: 24, borderWidth: 1, borderColor: '#FFD700', marginTop: 32, width: '100%' },
  heading: { textAlign: 'center', fontSize: 22, fontWeight: 'bold', color: '#FFA500', fontFamily: 'PlayfairDisplay', marginBottom: 20 },
  stepsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  step: { alignItems: 'center', flex: 1, marginHorizontal: 8 },
  circle: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  circleText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  title: { fontWeight: 'bold', color: '#FFA500', fontFamily: 'Inter', marginBottom: 4 },
  desc: { color: '#FFA500', fontSize: 13, textAlign: 'center', fontFamily: 'Inter' },
});
