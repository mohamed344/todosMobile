import { View, StyleSheet, Text, TouchableOpacity,Linking } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { LinearGradient } from "expo-linear-gradient"


export default function Login({ navigation }: any) {
    return (
        <View>
            <LinearGradient colors={["#02DADC", "#B932EE"]} start={[0.1, 0.1]} style={styles.linearGradient}>
                <Text style={styles.title} >Sign in</Text>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" />
                <TouchableOpacity onPress={() => navigation.navigate('TodoList')} >
                    <LinearGradient colors={["#02DADC", "#B932EE"]} start={[0.5, 0.1]} style={styles.button}>
                    <Text>Log in</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.text} >Don't have an account?
                    <Text style={styles.link} onPress={()=>{Linking.openURL(`${'YOUR_SIGNUP_URL'}`)}} >Sign up</Text>
                </Text>
            </LinearGradient>
    </View>
    )
}


const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        color: '#444',
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