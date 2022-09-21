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
import { AddScreen } from './src/screens/AddScreen';
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
  const [add, setAdd] = useState(false);
  const [expenses, setExpenses] = useState([]);

  if (!fonts) {
    return <AppLoading />;
  }

  const changeToStartScreenHandler = () => {
    setStart(true);
  };

  const changeToAddScreenHandler = () => {
    setAdd(true);
  };

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    setAdd(false);
  };

  let screen = <Home onStart={changeToStartScreenHandler} />;

  if (start) {
    screen = (
      <StartScreen onAdd={changeToAddScreenHandler} expenses={expenses} />
    );
  }

  if (add) {
    screen = <AddScreen onAddExpense={addExpense} />;
  }

  return <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
