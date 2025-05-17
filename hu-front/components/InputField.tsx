import { StyleSheet, TextInput, View } from "react-native";

type InputFieldProps = {
  placeholder: string;
  value: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
};

const InputField = ({
  placeholder,
  value,
  secureTextEntry,
  onChangeText,
}: InputFieldProps) => {
  return (
    <View>
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#E4E4E4"
        onChangeText={onChangeText}
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
    marginTop: 32,
    color: "#fff",
  },
});
