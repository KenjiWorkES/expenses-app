import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 32,
    fontFamily: theme.fonts.regular,
    color: theme.colors.dark,
  },
  subtitle: {
    color: theme.colors.gray,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
  },
  balance: {
    marginTop: 8,
    fontSize: theme.fonts.bold,
    fontSize: 40,
    color: theme.colors.dark,
  },
  resume: {
    paddingHorizontal: 32,
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
  body: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 32,
    backgroundColor: theme.colors.primary300,
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    textAlign: 'left',
  },
  bodyTitle: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.dark,
  },
  list: {
    maxWidth: 200,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: theme.colors.primary500,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
