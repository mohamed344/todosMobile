import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ModalBody = ({ children, padding }: Props) => {
    return (
        <View style={{
            //flex: 1,
            justifyContent: "flex-end",
            paddingRight: padding ? 10 : 0,
            paddingLeft: padding ? 10 : 0,
            backgroundColor: "red",
            height: "50%"
        }}>
            {children}
        </View>
    )
}

interface Props {
    children: any,
    padding?: boolean
}

export default ModalBody;