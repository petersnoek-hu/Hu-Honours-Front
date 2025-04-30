import { View, Text, Image } from "react-native";

type NotificatieProps = {
    level: number;
}

export default function NofitifcatieBalk({level}: NotificatieProps){

    return(
        <View>
            <View className="absolute top-0 left-0 right-0 bg-[#646568] py-4 px-8 flex-row items-center z-50">
                <View className="w-16 h-16 bg-[#4B4C4E] rounded-full"/>
                <View className="flex-1 ml-8">
                    <Text className="color-white">Het volgende level wat je kan spelen</Text>
                    <Text className="color-white font-semibold text-lg mt-2">Level {level}</Text>
                </View>
            </View>
        </View>
    )
}