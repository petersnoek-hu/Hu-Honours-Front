import { Pressable, View, Text, Image } from "react-native";
import PopUp from "../dashboard/Level-Popup";
import { useState } from "react";
import { useRouter } from "expo-router";

type LevelProps = {
  level: number;
  titel: string;
};

export default function Level({ level, titel }: LevelProps) {
  const [pressed, setPressed] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const router = useRouter();

  const handlePress = () => {
    setShowPopUp((prev) => !prev);
  };

  return (
    <View>
      {showPopUp && (
        <PopUp
          level={level}
          titel={titel}
          onPress={() => {
            // @ts-ignore
            router.push(`/levels/level${level}`);
          }}
        />
      )}

      <View className="items-center">
        <Pressable
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          onPress={handlePress}
          className="w-24 h-24 bg-[#EE5B39] rounded-full justify-center items-center z-10"
          style={{
            transform: [{ translateY: pressed ? 8 : 0 }],
          }}
        >
          <Image
            source={require("../../assets/images/book.png")}
            className="w-16 h-16"
          />
        </Pressable>
        <View className="w-24 h-24 bg-[#C33A1A] rounded-full absolute mt-2" />

        <Text className="color-white text-lg font-medium m-4">
          Level {level}
        </Text>
      </View>
    </View>
  );
}
