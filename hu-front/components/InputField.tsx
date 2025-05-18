import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

type InputFieldProps = {
  placeholder?: string;
  value: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
};

const InputField = ({
  placeholder = "Enter text...",
  value,
  onChangeText,
  secureTextEntry,
}: InputFieldProps) => {
  return (
    <View>
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#E4E4E4"
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 3,
    borderColor: "#4D4D4D",
    borderRadius: 8,
    padding: 14,
    marginTop: 16,
    color: "#fff",
  },
});
