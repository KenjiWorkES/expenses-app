import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary300,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 100,
    width: '100%',
    maxWidth: 400,
  },
  image: {
    width: '100%',
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 32,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginTop: 30,
  },
  button: {
    marginTop: 40,
    borderRadius: 20,
    width: 300,
    backgroundColor: theme.colors.primary500,
    paddingVertical: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colors.light,
    fontFamily: theme.fonts.medium,
    fontSize: 24,
  },
  buttonPressed: {
    backgroundColor: theme.colors.primary600,
  },
});
