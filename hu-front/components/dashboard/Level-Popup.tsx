import { View, Text, Pressable } from "react-native";

export default function Popup(){
    return(
        <View className="items-center">
            <View className="bg-[#F15A33] rounded-xl px-6 py-4 w-80">
                <Text className="font-bold color-[#f6f6f6]">Level: Voorbeeld titel</Text>
                <Pressable className="bg-[#f6f6f6] rounded-lg justify-center items-center mt-4">
                    <Text className="font-bold pt-2 pb-2 color-[#EE5B39]">Start Level</Text>
                </Pressable>        
            </View>
            <View className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-[#F15A33]" />
        </View>
    )
}