import { Pressable, View, Text, Image } from "react-native";
import { useState } from "react";


export default function Level(){
    const [pressed, setPressed] = useState(false);

    return(
        <View className="items-center">
            {!pressed &&(
                <View className="w-24 h-24 bg-[#C33A1A] rounded-full absolute mt-2"/>
            )}


            <Pressable 
               onPressIn={() => setPressed(true)}
               onPressOut={() => setPressed(false)}
               className="w-24 h-24 bg-[#EE5B39] rounded-full justify-center items-center z-10"
               style={{
                transform: [{ translateY: pressed ? 8 : 0 }]
              }}>
                <Image source={require("../../assets/images/book.png")} className="w-16 h-16"/>
            </Pressable>

            <Text className="color-white text-lg font-medium m-4">Level ...</Text>
        </View>
    )
}
