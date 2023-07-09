import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"



function Login() {

    return (

        <View>
        <LinearGradient colors={["#02DADC", "#B932EE"]} start={[0.1, 0.1]} style={styles.linearGradient}>
            <Text style={styles.title} >Sign in</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" />
            <TouchableOpacity onPress={handlePress}>
                <LinearGradient colors={["#02DADC", "#B932EE"]} start={[0.5, 0.1]} style={styles.button}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.text} >Don't have an account?
                <Text style={styles.link} onPress={()=>{Linking.openURL(`${'YOUR_SIGNUP_URL'}`)}} >Sign up</Text>
            </Text>
        </LinearGradient>
    </View>
    )
}

export default Login;


const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        color: '#fff',
        height: 40,
        width: 250,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
        backgroundColor:"#F3F3F3"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        width: 250,
        margin: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        color: '#333',
        fontSize: 17,
        margin: 12
    },
    link: {
        fontWeight: 'bold'
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center',
    }
})