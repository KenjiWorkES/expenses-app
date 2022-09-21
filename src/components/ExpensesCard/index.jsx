import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';
import { theme } from '../../themes';

export function ExpensesCard({ isOut, label }) {
  return (
    <View style={styles.card}>
      <Ionicons
        name={isOut ? 'arrow-up-circle-sharp' : 'arrow-down-circle-sharp'}
        size={32}
        color={theme.colors.primary500}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardHeader}>{label}</Text>
        <Text style={styles.cardBody}>Value</Text>
      </View>
    </View>
  );
}
