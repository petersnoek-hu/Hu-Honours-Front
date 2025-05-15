import React, { useState } from "react";
import { useMultiStepForm } from "@/hooks/useMultistepForm";
import { SafeAreaView, View, Text } from "react-native";
import FormBottomNavigation from "@/components/ui/FormBottomNavigation";
import LevelHeader from "@/components/ui/LevelHeader";
import { useRouter } from "expo-router";
import InputField from "@/components/InputField";

const level5 = () => {
  const router = useRouter();
  const inputFields = ["Voorbeeld 1", "Voorbeeld 2", "Voorbeeld 3"];
  const [answer, setAnswer] = useState('');

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

        <Text className="w-full p-8 bg-orange rounded-lg color-gray-100 text-xl font-semibold mt-4">
          “Ik zal een oplossing vinden.”
        </Text>
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

        <Text className="w-full p-8 bg-orange rounded-lg color-gray-100 text-xl font-semibold mt-4">
          “Ik kan hier niets aan doen.”
        </Text>

      <View className="w-full">     
        <Text className="color-gray-100 text-lg font-bold mt-4">
          Let voor dit level minstens één dag actief op je taalgebruik. 
        </Text>
      </View>
    </View>,
    <View key={2}>
      <View className="mb-8">
      <Text className="color-gray-100 font-bold text-3xl">
        Welk soort taalgebruik heb je het vaakst gebruikt?
      </Text>
      <Text className="color-gray-100 text-lg mt-4">
        Schrijf drie voorbeelden van proactief taalgebruik op die jij het vaakst gebruikt hebt.
      </Text>
      <Text className="color-gray-100 text-lg mt-4">
        Zet deze voorbeelden vervolgens in volgorde van meest tot minst gebruikt.
      </Text>
    </View>  
      {inputFields.map((item, index) => (
      <View className="mb-8">
        <InputField
          key={index}
          placeholder={`Voorbeeld ${index + 1}`}
        />
      </View>
      ))}
    </View>,
    <View key={3}>
      <Text className="color-gray-100 font-bold text-3xl">
        Welk soort taalgebruik heb je het vaakst gebruikt?
      </Text>
      <Text className="color-gray-100 text-lg mt-4">
        Schrijf nu drie voorbeelden van reactief taalgebruik op die jij het vaakst gebruikt hebt.
      </Text>
      <Text className="color-gray-100 text-lg mt-4 mb-4">
        Zet deze voorbeelden ook weer vervolgens in volgorde van meest tot minst gebruikt.
      </Text>

      {inputFields.map((item, index) => (
      <View className="mb-8">
        <InputField
          key={index}
          placeholder={`Voorbeeld ${index + 1}`}
        />
      </View>
      ))}
    </View>,
    <View key={4}>
      <Text className="color-gray-100 font-bold text-3xl">
        Wanneer heb je het gebruikt?
      </Text>
      <Text className="color-gray-100 text-lg mt-4 mb-4">
        Kies uit de situaties hieronder waarbij jouw taalgebruik het beste bij paste. dit is een multiple-choice stap.
      </Text>

      <Text className="color-gray-100 text-lg mt-4 mb-4">
        Ik heb het vaakst proactief taalgebruik gebruikt
      </Text>
    </View>,
        <View key={5}>
      <Text className="color-gray-100 font-bold text-3xl">
        Wanneer heb je het gebruikt?
      </Text>
      <Text className="color-gray-100 text-lg mt-4 mb-4">
        Kies uit de situaties hieronder waarbij jouw taalgebruik het beste bij paste. dit is een multiple-choice stap.
      </Text>

      <Text className="color-gray-100 text-lg mt-4 mb-4">
        Ik heb het vaakst reactief taalgebruik gebruikt
      </Text>
    </View>
  ]);

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View className="flex-1 mr-[24] ml-[24] bg-gray-900">
        <LevelHeader
          levelName="Challenge 1"
          levelDescription="Level 5: Proactieve vs. reactive taal"
          barProgression={currentStepIndex / steps.length}
          progressionColor="bg-orange"
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
            buttonColor="bg-orange"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default level5;
