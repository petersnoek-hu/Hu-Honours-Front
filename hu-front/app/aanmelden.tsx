import React from 'react';
import {Link} from 'expo-router';
import {View, Text, StyleSheet, TextInput, Image, Button, Pressable} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import { ThemedView } from '@/components/ThemedView';


export default function Aanmelden() {
    return(
<SafeAreaProvider >
          <ThemedView style={styles.container}>
            <Image
                source={require('@/assets/images/hu-honours-logo.png')}
            />
            <Text>Inloggen</Text>
            <Text>Log hier in met je account</Text>
            
            <View>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#fff"
               />
                        
               <TextInput
                placeholder="Wachtwoord"
                placeholderTextColor="#fff"
                secureTextEntry={true}
               />

              <Link href="/aanmelden">Wachtwoord vergeten</Link>
            </View>

            <Button
            title="Inloggen"
            />

            <Text>Al een account?
            <Link href="/inloggen">Inloggen</Link>
            </Text>

          </ThemedView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})