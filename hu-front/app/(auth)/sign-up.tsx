import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { View, Text, TextInput, Image, Button, Alert, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { create } from 'zustand';

import { ThemedView } from '@/components/ThemedView';
import InputField from '@/components/InputField' ;


type AuthState = {
  token: string | null;
  setToken: (token: string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token })
}));

export default function Aanmelden() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const router = useRouter();
      const setToken = useAuthStore((state) => state.setToken);
  
  
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
          const response = await fetch('', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password, confirmPassword}),
          });
          
          const data = await response.json();
          setToken(data.token);
          router.push('/(main)/dashboard');
        } 

        catch (error) {
          Alert.alert("Fout", "Kon geen verbinding maken met de server");
        }
      };


    return(
      <SafeAreaProvider >
          <ThemedView style={styles.container}>
            <Image
            style={styles.logoImage}
                source={require('@/assets/images/hu-honours-logo.png')}
            />
            <Text style={styles.headerText}>Aanmelden</Text>
            <Text style={styles.baseText}>Maak hier jouw account aan.</Text>
            
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
          
            <Button
              title="Inloggen"
              onPress={handleRegister}
            />

            <Text style={[styles.linkText, styles.baseText]}>Al een account?
              <Link href="/inloggen"> Inloggen</Link>
            </Text>

          </ThemedView>
      </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 47,
    paddingHorizontal: 24,
  },
  logoImage: {
    width: '100%',
    height: 118,
    justifyContent: 'center',
},
  headerText:{
    fontSize: 32,
    fontWeight: 700,
    color: '#F6F6F6',
    marginTop: 32,
    marginBottom: 8,
  },
  baseText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#F6F6F6',
  },
  linkText: {
    textAlign: 'center',
    borderWidth: 2,
    marginTop: 32,
  },
})