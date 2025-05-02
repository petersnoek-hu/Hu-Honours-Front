import { View, Text, Pressable } from "react-native";

type PopUpProps = {
    level: number;
    titel: string;
}

export default function Popup({level, titel}:PopUpProps){
    return(
        <View className="items-center bottom-2 z-50">
            <View className="bg-[#F15A33] rounded-xl px-6 py-4 w-full">
                <Text className="font-bold color-[#f6f6f6]">Level {level}: {titel}</Text>
                <Pressable className="bg-[#f6f6f6] rounded-lg justify-center items-center mt-4">
                    <Text className="font-bold pt-2 pb-2 color-[#EE5B39]">Start Level</Text>
                </Pressable>        
            </View>
            <View className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-[#F15A33]" />
        </View>
    )
}