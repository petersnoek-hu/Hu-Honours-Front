import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import axiosClient from "@/axiosClient";

import InputField from "@/components/InputField";
import useAuthStore from "@/AuthStore";
import axios from "axios";

export default function Aanmelden() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const { setToken } = useAuthStore();

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Foutmelding", "Je hebt nog niet alle velden ingevuld.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Foutmelding", "Één van de wachtwoorden klopt niet.");
      return;
    }

    try {
      await axiosClient
        .post(
          "/register",
          {
            username: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        });

      // router.push("/(main)/dashboard");
    } catch (error) {
      console.log(error);
      Alert.alert("Fout", "Kon geen verbinding maken met de server");
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-[24px] py-[70px]">
        <Image className="w-full h-[118px] justify-center"
          source={require("@/assets/images/hu-honours-logo.png")}
        />
        <Text className="text-4xl font-bold color-gray-100 mt-16 mb-2">Aanmelden</Text>
        <Text className="text-lg font-medium color-gray-100">Maak hier jouw account aan.</Text>

        <View>
          <InputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <InputField
            placeholder="Wachtwoord"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <InputField
            placeholder="Wachtwoord bevestigen"
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity className="p-4 bg-blue rounded-lg items-center" onPress={handleRegister}>
          <Text className="text-lg color-gray-100 font-bold">Inloggen</Text>
        </TouchableOpacity>

        <Text className="text-lg font-medium color-gray-100 mt-8 text-center">
          Al een account? 
          <Link className="underline" href="/(auth)/sign-up"> Inloggen</Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}