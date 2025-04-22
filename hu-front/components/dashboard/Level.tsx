import { Pressable, View, Text, Image } from "react-native";
import { useState } from "react";

type LevelProps = {
    level: number;
}

export default function Level({level}: LevelProps){
    const [pressed, setPressed] = useState(false);

    return(
        <View className="items-center border">
            <Pressable 
               onPressIn={() => setPressed(true)}
               onPressOut={() => setPressed(false)}
               className="w-24 h-24 bg-[#EE5B39] rounded-full justify-center items-center z-10"
               style={{
                transform: [{ translateY: pressed ? 8 : 0 }]
              }}>
                <Image source={require("../../assets/images/book.png")} className="w-16 h-16"/>
            </Pressable>
            <View className="w-24 h-24 bg-[#C33A1A] rounded-full absolute mt-2"/>

            <Text className="color-white text-lg font-medium m-4">Level {level}</Text>
        </View>
    )
}
