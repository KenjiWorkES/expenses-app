import { Home } from './src/screens/Home';
import {
  useFonts,
  ReadexPro_200ExtraLight,
  ReadexPro_300Light,
  ReadexPro_400Regular,
  ReadexPro_500Medium,
  ReadexPro_600SemiBold,
  ReadexPro_700Bold,
} from '@expo-google-fonts/readex-pro';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import { StartScreen } from './src/screens/StartScreen';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  const [fonts] = useFonts({
    ReadexPro_200ExtraLight,
    ReadexPro_300Light,
    ReadexPro_400Regular,
    ReadexPro_500Medium,
    ReadexPro_600SemiBold,
    ReadexPro_700Bold,
  });

  const [start, setStart] = useState(false);

  if (!fonts) {
    return <AppLoading />;
  }

  const changeToStartScreenHandler = () => {
    setStart(true);
  };

  let screen = <Home onStart={changeToStartScreenHandler} />;

  if (start) {
    screen = <StartScreen />;
  }

  return <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
