import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { theme } from '../../themes';

import { styles } from './styles';

export function AddScreen({ onAddExpense }) {
  const [isIn, setIsIn] = useState(true);
  const [value, setValue] = useState(null);
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);

  const changeTypeHandler = (value) => {
    setIsIn(value);
  };

  const changeValueHandler = (text) => {
    setValue(text);
  };

  const changeNameHandler = (text) => {
    setName(text);
  };

  const changeDateHandler = (text) => {
    setDate(text);
  };

  const addExpenseHandler = () => {
    if (!value || !name || !date) {
      Alert.alert('Error', 'fill all fileds before add a expense!', [
        { text: 'ok', style: 'cancel' },
      ]);
      return;
    }

    onAddExpense({ name: name, value: value, day: date, type: isIn });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add</Text>
        <TextInput
          style={styles.value}
          onChangeText={changeValueHandler}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.body}>
        <View style={styles.type}>
          <Pressable
            onPress={changeTypeHandler.bind(this, true)}
            style={isIn ? styles.typeButtonActive : styles.typeButton}
          >
            <Text style={isIn ? styles.typeTextActive : styles.typeText}>
              In
            </Text>
          </Pressable>
          <Pressable
            onPress={changeTypeHandler.bind(this, false)}
            style={!isIn ? styles.typeButtonActive : styles.typeButton}
          >
            <Text style={!isIn ? styles.typeTextActive : styles.typeText}>
              Out
            </Text>
          </Pressable>
        </View>
        <View style={styles.control}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} onChangeText={changeNameHandler} />
        </View>
        <View style={styles.control}>
          <Text style={styles.label}>Day</Text>
          <TextInput
            style={styles.input}
            onChangeText={changeDateHandler}
            keyboardType="number-pad"
          />
        </View>

        <Pressable
          style={styles.submit}
          onPress={addExpenseHandler}
          android_ripple={{ color: theme.colors.primary700 }}
        >
          <Text style={styles.submitText}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}
