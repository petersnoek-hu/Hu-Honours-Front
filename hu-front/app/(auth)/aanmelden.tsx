import React from 'react';
import {Link} from 'expo-router';
import {View, Text, StyleSheet, TextInput, Image, Button, Pressable} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import { ThemedView } from '@/components/ThemedView';
import InputField from '@/components/InputField'


export default function Aanmelden() {
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
              placeholder="Email"/>
              <InputField
              placeholder="Wachtwoord"
              secureTextEntry={true}/>
              <InputField
              placeholder="Wachtwoord bevestigen"
              secureTextEntry={true}/>
            </View>
          
            <Button
            title="Inloggen"
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