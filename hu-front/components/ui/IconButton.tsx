import React from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";

type IconButtonProps = {
  icon: any;
  width?: number;
  height?: number;
  customStyle?: string;
  handlePress: () => void;
};

const IconButton = ({
  icon,
  width = 60,
  height = 60,
  customStyle,
  handlePress,
}: IconButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        className={`flex flex-row items-center justify-center ${customStyle}`}
        onPress={handlePress}
        style={{ width, height }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{ width: width * 0.6, height: height * 0.6 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default IconButton;
