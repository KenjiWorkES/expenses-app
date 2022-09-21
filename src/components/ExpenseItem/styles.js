import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.light,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  content: {},
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.dark,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.gray,
  },
  value: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary500,
  },
});
