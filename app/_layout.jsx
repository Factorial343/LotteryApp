import React, {useState} from 'react';
import { Slot, Link, useRouter} from 'expo-router';
import { SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Appbar, Menu, PaperProvider } from 'react-native-paper';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { SearchHistoryProvider } from '../context/SearchHistoryContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'PlayfairDisplay': require('../assets/fonts/PlayfairDisplay-Regular.ttf'), Inter_400Regular
  });
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const insets = useSafeAreaInsets();


  if (!fontsLoaded) return null;

  return (
    <PaperProvider>
    <LinearGradient colors={['#fffbe6', '#fff8dc', '#fff']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Dream Book" titleStyle={styles.headerTitle} />
        {/* Hamburger Menu Icon */}
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <Appbar.Action
                icon="menu"
                color="#fff"
                onPress={() => setMenuVisible(true)}
              />
            }
          >
            <Menu.Item
  onPress={() => {
    setMenuVisible(false);
    router.push('/'); // or router.replace('/')
  }}
  title="Home"
/>
<Menu.Item
  onPress={() => {
    setMenuVisible(false);
    router.push('/mainApp');
  }}
  title="Search"
/>
<Menu.Item
  onPress={() => {
    setMenuVisible(false);
    router.push('/mainApp/history');
  }}
  title="History"
/>
          </Menu>
        </Appbar.Header>
        <SearchHistoryProvider>
        <Slot />
        </SearchHistoryProvider>
        <View style={[styles.footer, { paddingBottom: insets.bottom || 16 }]}>
  <Text style={styles.footerText}>
    2025 Ubadada Ventures, Inc | www.Ubadada.com
  </Text>
</View>

      </SafeAreaView>
    </LinearGradient>
    </PaperProvider>
    
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
