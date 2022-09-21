import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.primary300,
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 20,
    minWidth: 150,
    borderRadius: 30,
  },
  cardContent: {
    marginTop: 40,
  },
  cardHeader: {
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.colors.primary500,
  },
  cardBody: {
    fontFamily: theme.fonts.medium,
    fontSize: 24,
    color: theme.colors.primary500,
  },
});
