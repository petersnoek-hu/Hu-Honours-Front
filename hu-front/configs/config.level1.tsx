import { View, Text } from "react-native";
import { LevelConfig } from "@/types/level.types";
import Checklist from "@/components/ui/Checklist";
import LottieView from "lottie-react-native";

const animation = require("../assets/lottie/badge-animation.json");

const IntroductionStep = () => (
  <View>
    <Text className="text-white text-lg">
      Voordat je kunt groeien als leider, moet je jezelf leren begrijpen. Wat
      drijft jou? Hoe reageer je op de wereld om je heen? In deze eerste fase
      maak je kennis met de basisprincipes van persoonlijk leiderschap. Je
      ontdekt hoe je meer invloed kunt uitoefenen op je eigen leven — door
      bewust te kiezen hoe je denkt, voelt en handelt.
    </Text>
  </View>
);

const ChecklistStep = (
  checkedItems: boolean[],
  handleCheck: (index: number) => void
) => (
  <View>
    <Text className="text-white text-3xl">Lees de volgende hoofdstukken</Text>
    <Checklist
      items={[
        "Paradigma's en principes",
        "Van binnen naar buiten",
        "De 7 eigenschappen - een overzicht",
        "Samenvatting",
      ]}
      onCheck={handleCheck}
      checkedItems={checkedItems}
      checkedColor="bg-orange"
    />
  </View>
);

const CompletionStep = () => (
  <View className="justify-center items-center">
    <View className="overflow-clip w-[300] h-[300] justify-center items-center">
      <LottieView
        source={animation}
        autoPlay={true}
        loop={true}
        resizeMode="contain"
        style={{
          width: 250,
          height: 250,
          aspectRatio: 1,
        }}
      />
    </View>
    <Text className="text-white text-3xl font-bold mb-3">
      Boekenwurm starter
    </Text>
    <Text className="text-white">
      Je hebt de eerste drie hoofdstukken gelezen en bent gestart met het
      verkennen van paradigma's en principes van binnen naar buiten. Een mooie
      stap richting persoonlijk leiderschap. Goed bezig!
    </Text>
  </View>
);

export default function level1Config(
  checkedItems: boolean[],
  handleCheck: (index: number) => void
): LevelConfig {
  return {
    levelName: "Inleiding",
    levelDescription: "Level 1: Eerste stappen",
    color: "bg-orange",
    checklistItems: [
      "Paradigma's en principes",
      "Van binnen naar buiten",
      "De 7 eigenschappen - een overzicht",
      "Samenvatting",
    ],
    steps: [
      {
        id: 1,
        component: <IntroductionStep />,
      },
      {
        id: 2,
        component: ChecklistStep(checkedItems, handleCheck),
      },
      {
        id: 3,
        component: <CompletionStep />,
      },
    ],
  };
}
