import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, LayoutAnimation } from "react-native"
import { useTranslation } from 'react-i18next';



export default function SegmentedControlComponent({ setShowRead }: any) {

    const { t } = useTranslation();
    const [index, setIndex] = useState(0);


    const handleChange = (i: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIndex(i);

        if (i == 0) setShowRead(true)
        else setShowRead(false)
    }


    return (
        <View style={styles.tabsContainerStyle}>
            <TouchableOpacity onPress={() => handleChange(0)} style={[styles.tabStyle, { backgroundColor: index == 0 ? "white" : "#EEEDEE" }]}>
                <Text style={styles.tabTextStyle}>{t('all')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleChange(1)} style={[styles.tabStyle, { backgroundColor: index == 1 ? "white" : "#EEEDEE" }]}>
                <Text numberOfLines={1} style={styles.tabTextStyle}>{t('unread')}</Text>
            </TouchableOpacity>
        </View>
    )
};



const styles = StyleSheet.create({
    tabsContainerStyle: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#EEEDEE",
        borderRadius: 8
    },
    tabStyle: {
        borderRadius: 8,
        borderWidth: 4,
        padding: 5,
        borderColor: "#EEEDEE",
        width: "50%"
    },
    tabTextStyle: {
        textAlign: "center",
    }
});