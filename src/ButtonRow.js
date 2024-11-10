// src/components/ButtonRow.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const ButtonRow = ({ children }) => (
  <View style={styles.buttonRow}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default ButtonRow;
