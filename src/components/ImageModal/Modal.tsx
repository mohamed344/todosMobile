import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet, SafeAreaView } from 'react-native';
import Modal from "react-native-modal";
import useTheme from '../../hooks/useTheme';

const ImageModal = ({ visible, children, onClose }: Props) => {
    const { theme, mode } = useTheme();

    return (
        <Modal
            isVisible={visible}
            animationIn='slideInUp'
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            swipeDirection={'down'}
            onSwipeComplete={onClose}
            style={styles.modal}
        >
            <SafeAreaView>
                <View style={[styles.header, { backgroundColor: theme.colors.disabled.dark }]} />
                <View style={styles.modalContent}>
                    {children}
                </View>
            </SafeAreaView>
        </Modal>
    )
}



const styles = StyleSheet.create({
    header: {
        height: 5,
        borderRadius: 50,
        width: 50,
        alignSelf: "center",
        justifyContent: "center",
        marginVertical: "5%",
    },
    modalOverlay: {
        flex: 1,
    },
    modalContent: {
        height: '90%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    modal: {
        //top: 0,
        //left: 0,
        //right: 0,
        //padding: 0,
        margin: 0,
        marginHorizontal: 0,
        //justifyContent: 'flex-end',
    }
});


interface Props {
    children: any,
    visible: any,
    onClose: any,
}

export default ImageModal;