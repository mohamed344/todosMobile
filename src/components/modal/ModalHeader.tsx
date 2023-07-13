import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import useTheme from '../../hooks/useTheme';

const ModalHeader = ({ title, RightHeader, LeftHeader, ToggleModal, modalLevel }: Props) => {

    const level = modalLevel ? modalLevel * 25 : 10;
    const { theme, mode } = useTheme();
    const { t } = useTranslation();
    const [isRequestPending, setRequestPending] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.bg.card }}>
            <View style={[styles.container, { backgroundColor: theme.colors.bg.primary, marginTop: level }]}>
                {isRequestPending
                    ? <ActivityIndicator color={theme.colors.text.primary} />
                    : <Text style={{ fontSize: 14, fontWeight: "bold", color: theme.colors.text.primary }}>{title}</Text>
                }
                <View style={{ right: 16, position: "absolute" }}>
                    {RightHeader ? <RightHeader /> :
                        //<Button title={"Close"} onPress={ToggleModal} />
                        <TouchableOpacity style={{ marginRight: 5 }} onPress={ToggleModal}>
                            <Text style={{ fontSize: 16, color: "#007BFF" }}>{t('close')}</Text>
                        </TouchableOpacity>
                    }
                </View>
                {LeftHeader &&
                    <View style={{ left: 16, position: "absolute" }}>
                        <LeftHeader />
                    </View>
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 16,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});

interface Props {
    title: string,
    ToggleModal: any,
    RightHeader: any,
    LeftHeader?: any,
    modalLevel?: number
}

export default ModalHeader;