import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
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

      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Text style={styles.bodyTitle}>Activity</Text>
        </View>

        <FlatList style={styles.list} />
        <Pressable
          style={styles.button}
          android_ripple={{ color: theme.colors.primary700, radius: 25 }}
        >
          <Ionicons name="add-outline" size={35} color={theme.colors.light} />
        </Pressable>
      </View>
    </View>
  );
}
