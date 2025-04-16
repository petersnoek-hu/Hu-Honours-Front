import { Pressable, View, Text, Image } from "react-native";

export default function Level(){
    return(
        <View className="basis-32 items-center">
            <Pressable className="w-24 h-24 bg-[#EE5B39] rounded-full justify-center items-center z-10">
                <Image source={require("../assets/images/book.png")}/>
            </Pressable>
            <View className="w-24 h-24 rounded-full bg-[#C33A1A] absolute top-2 mt-2"/>
            <Text className="color-white text-lg font-medium">Level 3</Text>
        </View>
    )
}
