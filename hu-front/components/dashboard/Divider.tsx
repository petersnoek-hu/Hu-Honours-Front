import { View, Text } from "react-native";

type DividerProps = {
    challenge: number | string;
}

export default function Divider({challenge}: DividerProps){
    return(

            <View className="flex-row items-center pt-8 pb-8">
                <View className="flex-1 h-0.5 rounded-xs bg-[#4B4C4E]"/>
                    <Text className="ml-4 mr-4 text-white text-lg font-medium">Challenge {challenge}</Text>
                <View className="flex-1 h-0.5 bg-[#4B4C4E] roundex-xs"/>
            </View>
 
        
    )
}