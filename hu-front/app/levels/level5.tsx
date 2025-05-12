import React from "react";
import { useMultiStepForm } from "@/hooks/useMultistepForm";
import { SafeAreaView, View, Text } from "react-native";
import FormBottomNavigation from "@/components/ui/FormBottomNavigation";
import LevelHeader from "@/components/ui/LevelHeader";
import { useRouter } from "expo-router";

const level5 = () => {
  const router = useRouter();
  const { step, steps, currentStepIndex, next, back, isLastStep } = useMultiStepForm([
    <View key={0}>
      <View className="w-full">
        <Text className="color-gray-100 font-bold text-3xl">Wat is proactief taalgebruik</Text>        
        <Text className="color-gray-100 text-lg mt-4">
          Proactieve mensen nemen initiatief en proberen gebeurtenissen te beïnvloeden door zich te richten op eigen gedrag en gedachten waar ze invloed op hebben.
        </Text>
        <Text className="color-gray-100 text-lg mt-4">
          Een voorbeeld van proactief taalgebruik is 
        </Text>
      </View>

      <View>
        <Text className="w-full p-8 bg-orange rounded-lg color-gray-100 text-xl font-semibold mt-4">
          “Ik zal een oplossing vinden.”
        </Text>
      </View>
    </View>,
    <View key={1}>
      <View className="w-full">
        <Text className="color-gray-100 font-bold text-3xl">Wat is reactief taalgebruik</Text>        
        <Text className="color-gray-100 text-lg mt-4">
          Daarentegen laten reactieve mensen zich sterk beïnvloeden door hun omgeving en door anderen. 
        </Text>
        <Text className="color-gray-100 text-lg mt-4">
          Een voorbeeld van reactief taalgebruik is
        </Text>
      </View>

      <View>
        <Text className="w-full p-8 bg-orange rounded-lg color-gray-100 text-xl font-semibold mt-4">
          “Ik kan hier niets aan doen.”
        </Text>
      </View>

      <View className="w-full">     
        <Text className="color-gray-100 text-lg font-bold mt-4">
          Let voor dit level minstens één dag actief op je taalgebruik. 
        </Text>
      </View>
    </View>,
        <View key={2}>
      <Text>Stap 3</Text>
    </View>,
        <View key={3}>
      <Text>Stap 4</Text>
    </View>
  ]);

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View className="flex-1 mr-[24] ml-[24] bg-gray-900 border border-pink-500">
        <LevelHeader
          levelName="Challenge 1"
          levelDescription="Level 5: Proactieve vs. reactive taal"
          barProgression={currentStepIndex / steps.length}
          handleBackPress={() => {
            router.replace("/(main)/dashboard");
          }}
        />
        {step}
        <View className="absolute bottom-0 left-0 right-0 flex-row w-full gap-x-4 py-5 bg-gray-900">
          <FormBottomNavigation
            next={isLastStep ? () => router.replace("/(main)/dashboard") : next}
            back={back}
            isLastStep={isLastStep}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default level5;
