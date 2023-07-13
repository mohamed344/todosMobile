import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import useTheme from '../../hooks/useTheme';

const ActionModal = ({ visible, children, onClose }: Props) => {
    const { theme, mode } = useTheme();

    return (
        <Modal
            isVisible={visible}
            animationIn='slideInUp'
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            swipeDirection={'down'}
            propagateSwipe={true}
            onSwipeComplete={onClose}
            style={styles.modal}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalOverlay} />
            </TouchableWithoutFeedback>

            <View style={[styles.modalContent, { backgroundColor: theme.colors.bg.card }]}>
                <View style={[styles.header, { backgroundColor: theme.colors.disabled.dark }]} />
                {children}
            </View>
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
        marginBottom: "5%"
    },
    modalOverlay: {
        flex: 1,
    },
    modalContent: {
        height: '30%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 16,
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

export default ActionModal;