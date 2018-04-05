import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const Input = ({ placeholder, label, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
      secureTextEntry={secureTextEntry} 
      placeholder={placeholder}
      autoCorrect={false}
      style ={styles.input}
      value={value}
      onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    container: {
        flex: 1,
        height: 40,
        flexDirection: "row",
        alignItems: "center"
    }
};

export { Input };
