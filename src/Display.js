// src/components/Display.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ value }) => (
  <View style={styles.displayContainer}>
    <Text style={styles.displayText}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  displayContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
  },
  displayText: {
    color: "white",
    fontSize: 48,
  },
});

export default Display;
