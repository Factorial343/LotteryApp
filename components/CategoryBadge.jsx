import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Orange and yellow shades for categories
const categoryStyles = {
  general: { backgroundColor: 'rgba(255,215,0,0.13)', color: '#FFA500', borderColor: 'rgba(255,215,0,0.3)' },
  names: { backgroundColor: 'rgba(255,215,0,0.13)', color: '#FFD700', borderColor: 'rgba(255,215,0,0.3)' },
  places: { backgroundColor: 'rgba(255,165,0,0.13)', color: '#FFA500', borderColor: 'rgba(255,165,0,0.3)' },
  objects: { backgroundColor: 'rgba(255,140,0,0.13)', color: '#FFA500', borderColor: 'rgba(255,140,0,0.3)' },
  actions: { backgroundColor: 'rgba(255,255,224,0.25)', color: '#FFD700', borderColor: 'rgba(255,255,224,0.3)' },
};

export default function CategoryBadge({ category }) {
  const style = categoryStyles[category] || categoryStyles.general;
  return (
    <View style={[styles.badge, { backgroundColor: style.backgroundColor, borderColor: style.borderColor }]}>
      <Text style={[styles.text, { color: style.color }]}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { borderWidth: 1, borderRadius: 12, paddingVertical: 4, paddingHorizontal: 12, marginVertical: 6 },
  text: { fontSize: 14, fontWeight: 'bold', fontFamily: 'Inter' },
});
