import { Pressable, View, Text, Image } from "react-native";
import PopUp from "../dashboard/Level-Popup";
import { useState } from "react";
import { useRouter } from "expo-router";

type LevelProps = {
  level: number;
  titel: string;
  inset: string;
  active: boolean;
};

export default function Level({ level, titel, inset, active }: LevelProps) {
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

      <View className={`items-center ${inset}`}>
        <Pressable
          disabled={!active}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          onPress={handlePress}
          className={`w-24 h-24 ${
            active ? "bg-orange" : "bg-gray-400"
          } rounded-full justify-center items-center z-10`}
          style={{
            transform: [{ translateY: pressed ? 8 : 0 }],
          }}
        >
          <Image
            source={require("../../assets/images/book.png")}
            className="w-16 h-16"
          />
        </Pressable>
        <View
          className={`w-24 h-24 ${
            active ? "bg-[#C33A1A]" : "bg-gray-700"
          } rounded-full absolute mt-2`}
        />

        <Text className="color-white text-lg font-medium m-4">
          Level {level}
        </Text>
      </View>
    </View>
  );
}
