import React from 'react';
import { Modal, Platform } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';


const ModalComponent = ({ title, visibility, children, RightHeader, LeftHeader, ToggleModal, modalLevel, padding }: Props) => {
    const level = modalLevel || 0;

    return (
        <Modal
            presentationStyle="fullScreen"
            onRequestClose={ToggleModal}
            animationType="slide"
            //transparent={true}
            visible={visibility}>
            <ModalHeader title={title} ToggleModal={ToggleModal} RightHeader={RightHeader} LeftHeader={LeftHeader} modalLevel={level} />
            <ModalBody padding={padding}>
                {children}
            </ModalBody>
            {Platform.OS === "ios" && <KeyboardSpacer />}
        </Modal>
    )
}


interface Props {
    children: any,
    visibility: boolean,
    title: string,
    ToggleModal: any,
    padding?: boolean,
    modalLevel?: number,
    RightHeader?: any,
    LeftHeader?: any,
}

export default ModalComponent;