import { TextInput, View } from 'react-native';

type InputFieldProps = {
    placeholder: string ;
    value?: string ;
    secureTextEntry?: boolean ;
    onChangeText?: (text: string) => void ;
}

export default function InputField({placeholder, value, secureTextEntry, onChangeText}:InputFieldProps){
    return(
        <View>
            <TextInput className="border-2 border-gray-600 rounded-lg p-4 color-gray-100 font-medium"
             placeholder={placeholder}
             value={value}
             secureTextEntry={secureTextEntry}
             onChangeText={onChangeText}
             placeholderTextColor="#F6F6F6"
            />
        </View>
    )
}
