// src/components/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={() => onPress(label)}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 32,
  },
});

export default Button;
