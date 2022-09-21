import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ExpenseItem } from '../../components/ExpenseItem';
import { ExpensesCard } from '../../components/ExpensesCard';

import { styles } from './styles';
import { theme } from '../../themes';

export function StartScreen({ onAdd, expenses }) {
  const [total, setTotal] = useState(0);
  const [totalIn, setTotalIn] = useState(0);
  const [totalOut, setTotalOut] = useState(0);

  useEffect(() => {
    let totalValue = 0;
    let totalInValue = 0;
    let totalOutValue = 0;

    expenses.map((expense) => {
      if (expense.type) {
        return (totalValue = totalValue + parseFloat(expense.value));
      } else {
        return (totalValue = totalValue - parseFloat(expense.value));
      }
    });

    expenses.map((expense) => {
      if (expense.type) {
        return (totalInValue = totalInValue + parseFloat(expense.value));
      } else {
        return (totalOutValue = totalOutValue + parseFloat(expense.value));
      }
    });

    setTotal(totalValue);
    setTotalIn(totalInValue);
    setTotalOut(totalOutValue);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Overal Balance</Text>
        <Text style={styles.balance}>${total}</Text>
      </View>
      <View style={styles.resume}>
        <ExpensesCard label="In" value={totalIn} />
        <ExpensesCard label="Out" isOut={true} value={totalOut} />
      </View>

      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Text style={styles.bodyTitle}>Activity</Text>
        </View>
        <FlatList
          style={styles.list}
          data={expenses}
          renderItem={(itemData) => (
            <ExpenseItem
              name={itemData.item.name}
              value={itemData.item.value}
              day={itemData.item.day}
              type={itemData.item.type}
            />
          )}
        />

        <Pressable
          onPress={onAdd}
          style={styles.button}
          android_ripple={{ color: theme.colors.primary700, radius: 25 }}
        >
          <Ionicons name="add-outline" size={35} color={theme.colors.light} />
        </Pressable>
      </View>
    </View>
  );
}
