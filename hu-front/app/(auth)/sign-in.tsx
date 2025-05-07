import React, { useState } from "react";
import { Link, router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  TextInput,
  SafeAreaView,
} from "react-native";

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
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require("@/assets/images/hu-honours-logo.png")}
        />
        <Text style={styles.headerText}>Inloggen</Text>
        <Text style={styles.baseText}>Log hier in met je account</Text>

        <View>
          <TextInput
            style={styles.inputField}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Wachtwoord"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>

        <Button onPress={handlelogin} title="Inloggen" />

        <Text style={[styles.linkText, styles.baseText]}>
          Nog geen account?
          <Link href="/(auth)/sign-up"> Aanmelden</Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 47,
    paddingHorizontal: 24,
  },
  logoImage: {
    width: "100%",
    height: 118,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: 700,
    color: "#F6F6F6",
    marginTop: 32,
    marginBottom: 8,
  },
  baseText: {
    fontSize: 16,
    fontWeight: 500,
    color: "#F6F6F6",
  },
  linkText: {
    textAlign: "center",
    borderWidth: 2,
    marginTop: 32,
  },
  button: {
    borderRadius: 8,
  },
  inputField: {
    borderWidth: 3,
    borderColor: "#4D4D4D",
    borderRadius: 8,
    padding: 14,
    marginTop: 32,
    color: "#fff",
  },
});
