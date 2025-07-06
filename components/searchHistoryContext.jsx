import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SEARCH_HISTORY_KEY = 'search_history';

const SearchHistoryContext = createContext();

export function SearchHistoryProvider({ children }) {
  const [searchHistory, setSearchHistory] = useState([]);

  // Load search history from AsyncStorage on mount
  useEffect(() => {
    (async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(SEARCH_HISTORY_KEY);
        setSearchHistory(jsonValue ? JSON.parse(jsonValue) : []);
      } catch (error) {
        setSearchHistory([]);
      }
    })();
  }, []);

  // Save search history to AsyncStorage whenever it changes
  useEffect(() => {
    AsyncStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(searchHistory));
  }, [searchHistory]);

  // Add a new search to history
  const addSearch = (word, number) => {
    setSearchHistory(prev => {
      // Prevent duplicates
      if (prev.some(item => item.word === word)) return prev;
      // Add new search to front, keep max 8
      return [{ word, number }, ...prev].slice(0, 8);
    });
  };

  return (
    <SearchHistoryContext.Provider value={{ searchHistory, addSearch }}>
      {children}
    </SearchHistoryContext.Provider>
  );
}

// Hook to use search history in any component
export function useSearchHistory() {
  return useContext(SearchHistoryContext);
}
