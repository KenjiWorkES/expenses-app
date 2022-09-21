import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    paddingHorizontal: 32,
    backgroundColor: theme.colors.primary300,
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontFamily: theme.fonts.regular,
    color: theme.colors.dark,
  },
  value: {
    marginTop: 40,
    fontSize: 65,
    borderBottomColor: theme.colors.primary500,
    borderBottomWidth: 3,
    fontFamily: theme.fonts.bold,
  },
  body: {
    paddingHorizontal: 32,
    paddingVertical: 40,
  },
  type: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 50,
  },
  typeButton: {
    borderColor: theme.colors.primary500,
    borderWidth: 3,
    width: 70,
    heigh: 570,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeText: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
  },
  //active button
  typeButtonActive: {
    backgroundColor: theme.colors.primary500,
    width: 70,
    heigh: 570,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeTextActive: {
    color: theme.colors.light,
    fontSize: 20,
    fontFamily: theme.fonts.medium,
  },
  control: {
    marginBottom: 20,
  },
  label: {
    color: theme.colors.dark,
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderColor: theme.colors.primary500,
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: theme.fonts.regular,
  },
  submit: {
    width: '100%',
    backgroundColor: theme.colors.primary500,
    paddingVertical: 15,
    borderRadius: 16,
  },
  submitText: {
    textAlign: 'center',
    color: theme.colors.light,
    fontFamily: theme.fonts.medium,
    fontSize: 20,
  },
});
