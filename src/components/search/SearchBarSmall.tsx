import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTheme from '../../hooks/useTheme';
import { w } from '../../config/dimensions';



const SearchBarSmall = ({ value, setValue }: Props) => {
    const { mode, theme } = useTheme();
    const { t } = useTranslation();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.bg.input }]}>
            <Ionicons color={theme.colors.text.gray} name='search' size={20} />
            <TextInput
                onChangeText={(value) => setValue(value)}
                value={value}
                placeholder={t('search')}
                placeholderTextColor={theme.colors.text.gray}
                style={[styles.search, { color: theme.colors.text.primary }]}
            />
        </View>

    )
}


const styles = StyleSheet.create({
    search: {
        fontSize: w * 4,
        marginLeft: "3%",
    },
    container: {
        flexDirection: "row",
        padding: 8,
        borderRadius: 10,
        marginVertical: "3%"
    }

});

interface Props {
    value: string,
    setValue: any,
    backgroundColor?: string,
}

export default SearchBarSmall;