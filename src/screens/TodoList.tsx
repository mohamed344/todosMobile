import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function TodoList() {

    return (
        <View>
            <Text style={styles.title} >TodoList</Text>
        </View>
    )
}

export default TodoList;


const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})