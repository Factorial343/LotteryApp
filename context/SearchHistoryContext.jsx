// context/SearchHistoryContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'lottery-history';
const SearchHistoryContext = createContext();

export const SearchHistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  // Load history on mount
  useEffect(() => {
    const loadHistory = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) setHistory(JSON.parse(stored));
      } catch (error) {
        console.warn('Failed to load history', error);
      }
    };
    loadHistory();
  }, []);

  // Save history to storage
  const saveHistory = async (newHistory) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
    } catch (error) {
      console.warn('Failed to save history', error);
    }
  };

  const addToHistory = (entry) => {
    const newHistory = [entry, ...history.filter(e => e.word !== entry.word)].slice(0, 50);
    setHistory(newHistory);
    saveHistory(newHistory);
  };

  const clearHistory = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setHistory([]);
    } catch (error) {
      console.warn('Failed to clear history', error);
    }
  };

  return (
    <SearchHistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};

export const useSearchHistory = () => useContext(SearchHistoryContext);
