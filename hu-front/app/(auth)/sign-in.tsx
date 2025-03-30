import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, Image, Button, Alert, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import InputField from '@/components/InputField';


export default function Inloggen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handlelogin = async () => {
        if (!email || !password) {
            Alert.alert("Fout", "Vul alle velden in");
            return;
        }
    };

    return(
        <SafeAreaProvider >
          <View style={styles.container}>
            <Image
                style={styles.logoImage}
                source={require('@/assets/images/hu-honours-logo.png')}
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

            <Button
            onPress={handlelogin}
            title="Inloggen"
            />

            <Text style={[styles.linkText, styles.baseText]}>Nog geen account?
              <Link href="/aanmelden"> Aanmelden</Link>
            </Text>

          </View>
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
    button:{
        borderRadius: 8,
    },
    inputField: {
        borderWidth: 3,
        borderColor: '#4D4D4D',
        borderRadius: 8,
        padding: 14,
        marginTop: 32,
        color: '#fff'
    }
});


