import React from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, Image, Button, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/ThemedView';


export default function Inloggen() {
    return(
        <SafeAreaProvider >
          <ThemedView style={styles.container}>
            <Image
                style={styles.logoImage}
                source={require('@/assets/images/hu-honours-logo.png')}
            />
            <Text style={styles.headerText}>Inloggen</Text>
            <Text style={styles.baseText}>Log hier in met je account</Text>
            
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#fff"
                style={styles.inputField}
               />
                        
               <TextInput
                placeholder="Wachtwoord"
                placeholderTextColor="#fff"
                style={styles.inputField}
                secureTextEntry={true}
               />

              <Link href="/aanmelden" style={styles.baseText}>Wachtwoord vergeten</Link>
            </View>

            <Button
            title="Inloggen"
            />

            <Text style={styles.baseText}>Nog geen account?
            <Link href="/aanmelden" style={styles.baseText}>Aanmelden</Link>
            </Text>

          </ThemedView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    headerText:{
        fontSize: 32,
        fontWeight: 700,
        color: '#F6F6F6',
    },
    baseText: {
        fontSize: 16,
        fontWeight: 500,
        color: '#F6F6F6',
    },
    pressableText: {
        fontSize: 16,
        fontWeight: 500,
        color: '#fff',
    },
    inputField: {
        borderWidth: 3,
        borderColor: '#4D4D4D',
        borderRadius: 8,
        padding: 14,
        marginTop: 32,
    },
    inputContainer: {
        borderWidth: 3,
        borderColor: 'pink',
        borderRadius: 8,
    },
    logoImage: {
        borderColor: 'red',
        borderWidth: 2,
        width: '100%',
        justifyContent: 'center',
    }
});


