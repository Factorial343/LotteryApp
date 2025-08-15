import React, { useState } from 'react';
import { Link } from 'expo-router';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Provider as PaperProvider, Menu, Button } from 'react-native-paper';
import LotteryDisplay from '../components/LotteryDisplay';
import NumberInput from '../components/NumberInput';
import HowItWorks from '../components/HowItWorks';
import numbers from '../assets/numbers.json';
import { useSearchHistory } from '../context/SearchHistoryContext';

export default function MainApp() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [digitLimit, setDigitLimit] = useState(5);
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  const { history, addToHistory } = useSearchHistory();

 const fetchNumber = async (word) => {
  setLoading(true);

  try {
    // Normalize 'word' safely
    const normalizedWord = typeof word === 'string' ? word.toLowerCase().trim() : '';

    const entry = numbers.find((item) => {
      // Normalize 'item.Dream' safely
      const dream = typeof item?.Dream === 'string' ? item.Dream : '';
      const normalizedDream = dream.toLowerCase().trim();

      // Only match if both normalized strings are equal and non-empty
      return normalizedDream.length > 0 && normalizedDream === normalizedWord;
    });

    if (entry) {
      const digitKey = `${digitLimit} Digit`; // "3 Digit", "4 Digit", etc.
      const numberValue = entry[digitKey]?.toString() ?? '';

      const transformedEntry = {
        word: entry.Dream,
        number: numberValue,
        displayNumber: numberValue,
        category: entry.Category ?? 'general',
      };

      setResult(transformedEntry);
      addToHistory(transformedEntry);
    } else {
       const min = Math.pow(10, digitLimit - 1);
      const max = Math.pow(10, digitLimit) - 1;
      const randomNumber = Math.floor(
        Math.random() * (max - min + 1) + min
      ).toString();
      const transformedEntry = {
        word,
        number: randomNumber,
        displayNumber: randomNumber,
        category: 'random'
  };
  setResult(transformedEntry);
      addToHistory(transformedEntry);
    }
  } catch (error) {
    console.error('Error in fetchNumber:', error);
  }

  setLoading(false);
};


  return (

      <ScrollView contentContainerStyle={styles.content}>
        {/* Dropdown for digit selection */}
        <View style={styles.menuWrapper}>
          <Text style={styles.label}>Choose Number Length</Text>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
              <Button
                mode="outlined"
                onPress={openMenu}
                style={styles.menuButton}
                labelStyle={styles.menuButtonLabel}
              >
                {digitLimit} Digit Number
              </Button>
            }
          >
            {[3, 4, 5].map((num) => (
              <Menu.Item
                key={num}
                onPress={() => {
                  setDigitLimit(num);
                  closeMenu();
                }}
                title={`${num} Digit`}
              />
            ))}
          </Menu>
          <Link href="/mainApp/history" style={styles.historyLink}>
  <Text style={styles.historyLink}>View Search History</Text>
</Link>
        </View>

        <NumberInput onSubmit={fetchNumber} loading={loading} />
        <LotteryDisplay result={result} />

        <HowItWorks />
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    alignItems: 'center',
  },
  menuWrapper: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFA500',
  },
  menuButton: {
    borderColor: '#FFA500',
    backgroundColor: '#fffbe6',
  },
  menuButtonLabel: {
    color: '#FFA500',
    fontFamily: 'Inter',
    fontWeight: 'bold',
  },
  historyLink: {
    color: '#FFA500',
    fontWeight: 'bold',
    marginVertical: 12,
    fontSize: 16,
    fontFamily: 'Inter',
    textDecorationLine: 'underline',
  },
});
