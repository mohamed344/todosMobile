//
//  DateTimeRangePicker for Android & IOS
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2018 otp. All rights reserved.
//

import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateTimeRangePicker() {

    const [mode, setMode] = useState<any>(Platform.OS === 'ios' ? "datetime" : "date");
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));


    const showPicker = () => {
        setIsPickerShow(true);
    };

    const onChange = (event: any, value: any) => {
        setDate(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    };


    return <View
        style={styles.timeView}>
        <View
            style={styles.datetimeView}>
            <Text
                style={styles.addParticipantsSevenText}>Starts</Text>

            {/* FOR IOS ONLY */}
            {Platform.OS === "ios" &&
                <DateTimePicker
                    display="compact"
                    style={styles.datetime}
                    testID="dateTimePicker"
                    value={date}
                    mode={"datetime"}
                    is24Hour={true}
                    onChange={onChange}
                />
            }

            {/* FOR ANDROID ONLY */}
            {Platform.OS === "android" &&
                (isPickerShow ?
                    <DateTimePicker
                        display="compact"
                        style={styles.datetime}
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                    /> :
                    <View style={styles.datetimeAndroindView}>
                        <TouchableOpacity onPress={showPicker} style={styles.pickedDateContainer}>
                            <Text style={styles.pickedDate}>{date.toDateString()}</Text>
                            <Ionicons name="ios-calendar-outline" color="gray" size={23} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={showPicker} style={styles.pickedTimeContainer}>
                            <Text style={styles.pickedDate}>{`${date.getHours()}:${new Date().getUTCMinutes()}`}</Text>
                            <MaterialIcons name="access-time" color="gray" size={23} />
                        </TouchableOpacity>
                    </View>)
            }


        </View>
        <View
            style={styles.datetimeView}>
            <Text
                style={styles.addParticipantsSevenText}>Ends  </Text>
            {/* FOR IOS ONLY */}
            {Platform.OS === "ios" &&
                <DateTimePicker
                    style={styles.datetime}
                    testID="dateTimePicker"
                    value={date}
                    mode={"datetime"}
                    is24Hour={true}
                    onChange={onChange}
                />
            }

            {/* FOR ANDROID ONLY */}
            {!isPickerShow && Platform.OS === "android" &&
                <View style={styles.datetimeAndroindView}>
                    <TouchableOpacity onPress={showPicker} style={styles.pickedDateContainer}>
                        <Text style={styles.pickedDate}>{date.toDateString()}</Text>
                        <Ionicons name="ios-calendar-outline" color="gray" size={23} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={showPicker} style={styles.pickedTimeContainer}>
                        <Text style={styles.pickedDate}>{`${date.getHours()}:${new Date().getUTCMinutes()}`}</Text>
                        <MaterialIcons name="access-time" color="gray" size={23} />
                    </TouchableOpacity>
                </View>
            }
        </View>
    </View>
}

const styles = StyleSheet.create({

    pickedDateContainer: {
        flexDirection: "row",
        padding: "3%",
        paddingHorizontal: "5%",
        backgroundColor: '#eee',
        borderRadius: 8,
        flex: 1,
        marginLeft: "5%",
        alignItems: "center",
        justifyContent: "center"
    },
    pickedTimeContainer: {
        flexDirection: "row",
        padding: "3%",
        backgroundColor: '#eee',
        borderRadius: 8,
        marginLeft: "5%",
        alignItems: "center",
        justifyContent: "center"
    },
    pickedDate: {
        fontSize: 14,
        color: theme.colors.text.primary,
        marginRight: "5%"
    },
    timeView: {
        marginTop: "5%",
        marginBottom: "10%",
    },
    addParticipantsSevenText: {
        marginRight: "10%",
        color: "rgb(51, 51, 51)",
        fontFamily: "ArialMT",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "normal",
        alignSelf: "center",
    },
    datetime: {
        alignSelf: "flex-end",
        width: "100%",
        flex: 1,
    },
    datetimeView: {
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "4%",
    },
    datetimeAndroindView: {
        flexDirection: "row",
        flex: 1
    },

})
