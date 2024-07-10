import React from 'react';
import { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar translucent={true} backgroundColor={'#ffffff00'} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
