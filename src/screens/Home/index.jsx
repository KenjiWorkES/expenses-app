import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { theme } from '../../themes';

import { styles } from './styles';

export function Home({ onStart }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/E-commerce.png')}
        />
      </View>

      <Text style={styles.title}>Helps you to track your expenses.</Text>

      <Pressable
        onPress={onStart}
        style={styles.button}
        android_ripple={{ color: theme.colors.primary700 }}
      >
        <Text style={styles.buttonText}>Let’s Start!</Text>
      </Pressable>
    </View>
  );
}
