import {Stack} from 'expo-router';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'

const RootLayout = () => {
    return (
      <Stack screenOptions={{
            headerStyle: {backgroundColor: '#ddd'},
            headerTintColor: '#333',
        }}>
        <Stack.Screen name = "index" options={{title: 'Home'}} />
        <Stack.Screen name = "mainApp" options={{title: 'Lottery'}} />
    </Stack>
    )

}

export default RootLayout
const styles = StyleSheet.create({})