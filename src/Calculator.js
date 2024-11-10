// src/components/Calculator.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from './Display';
import Button from './buttons';
import ButtonRow from './ButtonRow';

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  // Handle button press logic
  const handlePress = (input) => {
    if (input === "C") {
      setDisplay("0");
    } else if (input === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else {
      setDisplay((prev) => (prev === "0" ? input : prev + input));
    }
  };

  return (
    <View style={styles.container}>
      {/* Display */}
      <Display value={display} />

      {/* Buttons */}
      <ButtonRow>
        <Button label="C" onPress={handlePress} />
        <Button label="+/-" onPress={handlePress} />
        <Button label="%" onPress={handlePress} />
        <Button label="/" onPress={handlePress} />
      </ButtonRow>
      <ButtonRow>
        <Button label="7" onPress={handlePress} />
        <Button label="8" onPress={handlePress} />
        <Button label="9" onPress={handlePress} />
        <Button label="*" onPress={handlePress} />
      </ButtonRow>
      <ButtonRow>
        <Button label="4" onPress={handlePress} />
        <Button label="5" onPress={handlePress} />
        <Button label="6" onPress={handlePress} />
        <Button label="-" onPress={handlePress} />
      </ButtonRow>
      <ButtonRow>
        <Button label="1" onPress={handlePress} />
        <Button label="2" onPress={handlePress} />
        <Button label="3" onPress={handlePress} />
        <Button label="+" onPress={handlePress} />
      </ButtonRow>
      <ButtonRow>
        <Button label="0" onPress={handlePress} />
        <Button label="." onPress={handlePress} />
        <Button label="=" onPress={handlePress} />
      </ButtonRow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    justifyContent: "flex-end",
    padding: 10,
  },
});

export default Calculator;
