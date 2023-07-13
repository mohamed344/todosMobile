import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';


const ModalBody = ({ children, padding }: Props) => {
    const { theme, mode } = useTheme();

    return (
        <View style={{
            flex: 1,
            justifyContent: "flex-start",
            paddingRight: padding ? 10 : 0,
            paddingLeft: padding ? 10 : 0,
            backgroundColor: theme.colors.bg.primary,
            height: "100%"
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