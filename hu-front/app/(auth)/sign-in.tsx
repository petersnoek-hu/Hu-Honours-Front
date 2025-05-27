import React, { useState } from "react";
import { Link, router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
} from "react-native";
import InputField from "@/components/InputField";

import axiosClient from "@/axiosClient";
import useAuthStore from "@/AuthStore";

export default function Inloggen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useAuthStore();

  const handlelogin = async () => {
    if (!email || !password) {
      Alert.alert("Fout", "Vul alle velden in");
      return;
    }

    try {
      await axiosClient
        .post(
          "/login",
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
          if (response.status === 200) {
            setToken(response.data.token);
            router.push("/(main)/dashboard");
          } else {
            Alert.alert("Fout", "Inloggen mislukt");
          }
          console.log(response.data);
        });
    } catch (error) {}
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View className="flex-1 px-6 py-18">
        <Image className="w-full h-30 justify-center"
          source={require("@/assets/images/hu-honours-logo.png")}
        />
        <Text className="text-4xl font-bold color-gray-100 mt-16 mb-2">Inloggen</Text>
        <Text className="text-lg font-medium color-gray-100">Log hier in met je account</Text>

        <View className="mb-24">
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
        </View>

        <TouchableOpacity className="p-4 bg-blue rounded-lg items-center" onPress={handlelogin}>
          <Text className="text-lg color-gray-100 font-bold">Inloggen</Text>
          </TouchableOpacity>

        <Text className="text-lg font-medium color-gray-100 mt-8 text-center">
          Nog geen account? 
          <Link className="underline" href="/(auth)/sign-up"> Aanmelden</Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}

