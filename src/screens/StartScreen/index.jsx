import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

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
        <View style={styles.card}>
          <Ionicons
            name="arrow-up-circle-sharp"
            size={32}
            color={theme.colors.primary500}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardHeader}>In</Text>
            <Text style={styles.cardBody}>Value</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Ionicons
            name="arrow-down-circle-sharp"
            size={32}
            color={theme.colors.primary500}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardHeader}>Out</Text>
            <Text style={styles.cardBody}>Value</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
