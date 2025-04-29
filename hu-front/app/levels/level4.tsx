import LevelHeader from "@/components/ui/LevelHeader";
import { useMultiStepForm } from "@/hooks/useMultistepForm";
import LevelSvg from "@/components/svgs/LevelSvg";
import React from "react";
import { SafeAreaView, View, Text, Button, Image } from "react-native";
import CustomButton from "@/components/ui/CustomButton";
import { useRouter } from "expo-router";
import LevelSvg2 from "@/components/svgs/LevelSvg2";
import UploadFile from "@/components/svgs/UploadFileSvg";
import UploadFileSvg2 from "@/components/svgs/UploadFileSvg2";
import LottieView from "lottie-react-native";

const Level4Screen = () => {
  const router = useRouter();
  const animation = require("../../assets/lottie/badge-animation.json");
  const { step, steps, currentStepIndex, next, back, isLastStep } =
    useMultiStepForm([
      <View
        key={0}
        className="flex-1 bg-[#EE5B39] justify-around items-center rounded-3xl p-5 w-full"
      >
        <View className=" w-full justify-center items-center">
          <Text className="color-white font-bold text-3xl">Level 4</Text>
          <Text className="color-white">Lees deze korte uitleg</Text>
        </View>
        <View className=" w-full">
          <Text className="color-white w-1/2 text-lg">
            De cirkel van betrokkenheid bevat alles waar jij je mee bezighoudt,
            zoals werk, studie, nieuws of sociale situaties.
          </Text>
        </View>
        <View className="flex-row justify-between w-full items-center ">
          <LevelSvg />
          <Text className="color-white w-1/2 text-lg">
            De cirkel van invloed bevat de dingen waar je écht invloed op hebt,
            zoals je gedrag, reacties en keuzes.
          </Text>
        </View>
        <View
          className="
       w-full justify-center items-center"
        >
          <Text className="color-white text-lg">
            “Succesvolle mensen focussen zich op hun cirkel van invloed en
            verspillen minder energie aan dingen waar ze geen controle over
            hebben.”
          </Text>
        </View>
      </View>,
      <View
        key={1}
        className="flex-1 bg-[#EE5B39] justify-around items-center rounded-3xl p-5 w-full"
      >
        <View className="absolute -top-4 -right-4 z-10">
          <LevelSvg2 />
        </View>
        <View className="w-full flex-row h-full">
          <View className="w-3/4 justify-around">
            <Text className="color-white text-3xl font-bold">Uitdaging 1</Text>
            <Text className="color-white">
              1. Teken twee cirkels op een vel papier.
            </Text>
            <Text className="color-white">
              {"    \u2B24"} De buitenste cirkel = betrokkenheid (waar jij je
              mee bezighoudt).
            </Text>
            <Text className="color-white">
              De binnenste cirkel = invloed (waar jij echt iets aan kunt
              veranderen).
            </Text>
            <Text className="color-white">
              2. Draag het papier een dag met je mee.
            </Text>
            <Text className="color-white">
              3. Schrijf tijdens de dag steekwoorden op in de juiste cirkel.
            </Text>
            <Text className="color-white">
              Waar voelde je je betrokken bij?
            </Text>
            <Text className="color-white">Waar had je écht invloed op?</Text>
          </View>
          <View className="w-1/4 justify-around items-center py-20">
            <View className="bg-white w-[50] h-[50] rounded-full"></View>
            <View className="bg-white w-[50] h-[50] rounded-full"></View>
            <View className="bg-white w-[50] h-[50] rounded-full"></View>
          </View>
        </View>
      </View>,
      <View key={2} className="flex-1">
        <View className="flex-row bg-[#EE5B39] h-[200] justify-around items-center p-5 mb-5 rounded-3xl">
          <View className="flex h-full justify-center">
            <Text className="text-3xl font-bold color-white pb-2">Upload</Text>
            <Text className="color-white w-3/4 pt-2">
              Upload een foto van jouw cirkel
            </Text>
          </View>
          <View>
            <UploadFile />
          </View>
        </View>
        <View className="flex h-[200] justify-center items-center bg-[#464646] mt-5 rounded-3xl border-dashed border-white border-2">
          <UploadFileSvg2 />
          <Text className="text-white mt-5">Upload hier</Text>
        </View>
      </View>,
      <View key={3} className="flex-1 h-full justify-center items-center">
        <View className="overflow-clip w-[250] h-[250] justify-center items-center">
          <LottieView
            source={animation}
            autoPlay={true}
            loop={true}
            resizeMode="contain"
            style={{
              width: 600,
              aspectRatio: 1,
            }}
          />
        </View>
        <Text className="text-white text-3xl font-bold mb-3">
          Lekker bezig!
        </Text>
        <Text className="text-white">Klaar voor het volgende level?</Text>
      </View>,
    ]);
  return (
    <SafeAreaView className="flex-1 pt-[40] px-[20] bg-[#333333]">
      <View className="flex-1 w-full bg-[#333333]">
        <LevelHeader
          levelName="Challenge 1"
          levelDescription="Level 4: cirkel van betrokkenheid"
          barProgression={currentStepIndex / steps.length}
          handleBackPress={() => {
            if (currentStepIndex > 0) {
              back();
            } else {
              router.replace("/(main)/dashboard");
            }
          }}
        />
        {step}
        <View className={`flex-row justify-end items-center my-5 w-full`}>
          {isLastStep ? (
            <CustomButton
              title="Voltooien"
              handlePress={() => {
                router.replace("/(main)/dashboard");
              }}
              textStyles="text-white"
              containerStyles="bg-[#EE5B39] w-full h-[40px] my-5 rounded-xl"
            />
          ) : (
            <CustomButton
              title="Volgende"
              handlePress={next}
              textStyles="text-white"
              containerStyles="bg-[#EE5B39] w-1/2 h-[40px] my-5 rounded-xl"
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Level4Screen;
