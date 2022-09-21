import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { ExpensesCard } from '../../components/ExpensesCard';

import { styles } from './styles';
import { theme } from '../../themes';

export function StartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Overal Balance</Text>
        <Text style={styles.balance}>$12453,12</Text>
      </View>
      <View style={styles.resume}>
        <ExpensesCard label="In" />
        <ExpensesCard label="Out" isOut={true} />
      </View>

      <View>
        <Text>Activity</Text>
        <FlatList />
      </View>
    </View>
  );
}
