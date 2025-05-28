import React, { useState } from "react";
import { View, Text } from "react-native";
import { LevelConfig, LevelFeatures } from "@/types/level.types";
import InputField from "@/components/InputField";
import MultipleChoice from "@/components/ui/MultipleChoice";
import LottieView from "lottie-react-native";

const animation = require("../assets/lottie/badge-animation.json");

const ExplanationStep = () => (
  <View className="w-full">
    <Text className="color-gray-100 font-bold text-3xl">Proactief taalgebruik</Text>
    <Text className="color-gray-100 font-medium text-lg mt-4 ">
      Proactieve mensen nemen initiatief en proberen gebeurtenissen te beïnvloeden
      door zich te richten op eigen gedrag en gedachten waar ze invloed op hebben.
    </Text>
    <Text className="color-gray-100 text-lg">
      Een voorbeeld van proactief taalgebruik is:
    </Text>
    <Text className="w-full p-8 bg-orange text-lg font-bold text-xl font-semibold rounded-lg mt-8 color-gray-100">
      "Ik zal een oplossing vinden."
    </Text>
  </View>
);

const ReactiveExplanationStep = () => (
  <View className="w-full">
    <Text className="color-white font-bold text-3xl">Reactief taalgebruik</Text>
    <Text className="color-gray-100 text-lg mt-4 font-dmsans">
      Daarentegen laten reactieve mensen zich sterk beïnvloeden door hun omgeving en door anderen.
    </Text>
    <Text className="color-gray-100 font-medium text-lg mt-4">Een voorbeeld van reactief taalgebruik is:</Text>
    <Text className="w-full p-8 bg-orange text-lg font-bold text-xl font-semibold rounded-lg mt-8 color-gray-100">
      "Ik kan hier niets aan doen."
    </Text>
    <Text className="color-gray-100 text-lg font-bold mt-4">
      Let voor dit level minstens één dag actief op je taalgebruik.
    </Text>
  </View>
);

const TextInputStep = ({
  texts,
  handleText,
  type,
}: {
  texts: string[];
  handleText: (index: number, value: string) => void;
  type: "proactive" | "reactive";
}) => (
  <View className="gap-y-6">
    <Text className="color-white font-bold text-3xl">
      Schrijf drie voorbeelden van {type === "proactive" ? "proactief" : "reactief"} taalgebruik
    </Text>
    <Text className="color-white text-lg">
      Zet deze in volgorde van meest tot minst gebruikt.
    </Text>
    {texts.map((value, i) => (
      <InputField
        key={i}
        placeholder={`Voorbeeld ${i + 1}`}
        value={value}
        onChangeText={(val) => handleText(i, val)}
      />
    ))}
  </View>
);

const MultipleChoiceStep = ({
  answers,
  handleAnswer,
  type,
}: {
  answers: boolean[];
  handleAnswer: (index: number) => void;
  type: "proactive" | "reactive";
}) => {
  const items =
    type === "proactive"
      ? [
          "Wanneer ik verantwoordelijkheid wilde tonen",
          "Wanneer ik een probleem wilde oplossen",
          "Wanneer ik een doel wilde stellen voor mijzelf",
        ]
      : [
          "Wanneer ik instructies van iemand kreeg",
          "Wanneer ik iets wilde vermijden",
          "Wanneer er geen andere opties meer waren",
        ];

  return (
    <View className="gap-y-6">
      <Text className="color-white font-bold text-3xl">
        Wanneer heb je het gebruikt?
      </Text>
      <Text className="color-white text-lg">
        Kies de situaties waarin jij het vaakst {type === "proactive" ? "proactief" : "reactief"} taalgebruik toepaste.
      </Text>
      <MultipleChoice
        items={items}
        selected={answers}
        onSelect={handleAnswer}
        selectedColor="bg-orange"
        selectedTextColor="color-gray-100"
      />
    </View>
  );
};

const CompletionStep = () => (
  <View className="flex-1 h-full justify-center items-center">
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
    <Text className="text-white text-3xl font-bold mb-3">Goed gedaan!</Text>
    <Text className="text-white">Klaar voor het volgende level?</Text>
  </View>
);

export default function level5Config(): LevelConfig {
  const [proactiveText, setProactiveText] = useState(["", "", ""]);
  const [reactiveText, setReactiveText] = useState(["", "", ""]);
  const [proactiveAnswer, setProactiveAnswer] = useState([false, false, false]);
  const [reactiveAnswer, setReactiveAnswer] = useState([false, false, false]);

  const handleText = (type: "proactive" | "reactive") => (index: number, value: string) => {
    if (type === "proactive") {
      setProactiveText((prev) => prev.map((val, i) => (i === index ? value : val)));
    } else {
      setReactiveText((prev) => prev.map((val, i) => (i === index ? value : val)));
    }
  };

  const handleAnswer = (type: "proactive" | "reactive") => (index: number) => {
    if (type === "proactive") {
      setProactiveAnswer((prev) => prev.map((val, i) => (i === index ? !val : val)));
    } else {
      setReactiveAnswer((prev) => prev.map((val, i) => (i === index ? !val : val)));
    }
  };

  return {
    levelName: "Challenge 1",
    levelDescription: "Level 5: Proactieve vs. reactieve taal",
    steps: [
      { id: 1, component: <ExplanationStep /> },
      { id: 2, component: <ReactiveExplanationStep /> },
      {
        id: 3,
        component: (
          <TextInputStep
            texts={proactiveText}
            handleText={handleText("proactive")}
            type="proactive"
          />
        ),
      },
      {
        id: 4,
        component: (
          <TextInputStep
            texts={reactiveText}
            handleText={handleText("reactive")}
            type="reactive"
          />
        ),
      },
      {
        id: 5,
        component: (
          <MultipleChoiceStep
            answers={proactiveAnswer}
            handleAnswer={handleAnswer("proactive")}
            type="proactive"
          />
        ),
      },
      {
        id: 6,
        component: (
          <MultipleChoiceStep
            answers={reactiveAnswer}
            handleAnswer={handleAnswer("reactive")}
            type="reactive"
          />
        ),
      },
      {
        id: 7,
        component: <CompletionStep />,
      },
    ],
  };
}