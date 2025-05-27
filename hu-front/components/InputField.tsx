import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

type InputFieldProps = {
  placeholder?: string;
  value: string;
  secureTextEntry?: boolean;
  fullHeight?: boolean;
  onChangeText?: (text: string) => void;
};

const InputField = ({
  placeholder = "Enter text...",
  value,
  secureTextEntry,
  fullHeight = false,
  onChangeText,
}: InputFieldProps) => {
  return (
    <View className={`${fullHeight ? "h-[200px]" : "h-[60px]"} my-2`}>
      <TextInput
        className="border-2 border-[#4D4D4D] rounded-lg p-4 h-full text-white"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#E4E4E4"
        multiline={fullHeight}
        textAlignVertical={fullHeight ? "top" : "center"}
        numberOfLines={fullHeight ? 10 : 1}
        style={{
          textAlignVertical: fullHeight ? "top" : "center",
        }}
      />
    </View>
  );
};

export default InputField;

// You can remove this unused StyleSheet if you're using NativeWind classes
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
