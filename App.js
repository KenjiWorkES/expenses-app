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

export default function App() {
  const [fonts] = useFonts({
    'extra-light': ReadexPro_200ExtraLight,
    light: ReadexPro_300Light,
    regular: ReadexPro_400Regular,
    medium: ReadexPro_500Medium,
    'semi-bold': ReadexPro_600SemiBold,
    bold: ReadexPro_700Bold,
  });

  if (!fonts) {
    return <AppLoading />;
  }
  return <Home />;
}
