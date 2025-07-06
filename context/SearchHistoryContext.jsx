import React, { createContext, useContext, useState } from 'react';

const SearchHistoryContext = createContext();

export function SearchHistoryProvider({ children }) {
  const [searchHistory, setSearchHistory] = useState([]);
  const addSearch = (word, number) => {
    setSearchHistory(prev => {
      const exists = prev.find(item => item.word === word);
      if (exists) return prev;
      return [{ word, number }, ...prev].slice(0, 8);
    });
  };
  return (
    <SearchHistoryContext.Provider value={{ searchHistory, addSearch }}>
      {children}
    </SearchHistoryContext.Provider>
  );
}

export function useSearchHistory() {
  return useContext(SearchHistoryContext);
}
