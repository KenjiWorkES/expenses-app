import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function ExpenseItem({ value, name, day, type }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{type ? 'In' : 'Out'}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.value}>{type ? `+${value}` : `-${value}`}</Text>
        <Text style={styles.subTitle}>{day}</Text>
      </View>
    </View>
  );
}
