import { View, Text } from "react-native";
import Streak from "../svg/streak";
import Badge from "../svg/badge";

type AchievementProps = {
    streak: number;
    badges: number;
}

export default function Achievementbalk({streak, badges}:AchievementProps){
    return(
        <View className="flex-row justify-between pb-4 pt-4 pl-8 pr-8 border-b-2 border-[#4B4C4E]">
            <View className="flex-row items-center">
                <Streak/>
                <Text className="color-white text-lg font-semibold ml-2">{streak}</Text>
            </View>
            <View className="flex-row items-center">
                <Badge/>
                <Text className="color-white text-lg font-semibold ml-2">{badges}</Text>
            </View>
        </View>
    )
}