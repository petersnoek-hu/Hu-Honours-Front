import React from "react";
import { View, Text } from "react-native";

type BulletListProps = {
  items: string[];
};

const BulletList = ({ items }: BulletListProps) => {
  return (
    <>
      {items.map((item: string, index: number) => {
        return (
          <View className="flex-row items-start my-2" key={index}>
            <Text className="mr-2 text-white">{"\u25CF"}</Text>
            <Text className="flex-1 text-white">{item}</Text>
          </View>
        );
      })}
    </>
  );
};

export default BulletList;
