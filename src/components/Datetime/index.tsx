//
//  DateTimeRangePicker for Android & IOS
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2018 otp. All rights reserved.
//

import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';



export default function Datetime({ datetime, setDatetime, title, disabled = false }: any) {

    const [picker, setPicker] = useState<null | string>(Platform.OS === "ios" ? "datetime" : null);


    const showPicker = (mode: string) => {
        setPicker(mode);
    };


    function combineDateWithTime(d: any, t: any) {
        return new Date(
            d.getFullYear(),
            d.getMonth(),
            d.getDate(),
            t.getHours(),
            t.getMinutes(),
            t.getSeconds(),
            t.getMilliseconds()
        );
    }


    const onChange = (event: any, value: any) => {
        switch (picker) {
            case "datetime":
                setDatetime(value);
                break;
            case "date":
                const d = combineDateWithTime(value, datetime)
                setDatetime(d);
                break;
            case "time":
                const t = combineDateWithTime(datetime, value)
                setDatetime(t);
                break;
            default:
                break;
        }


        if (Platform.OS === 'android') {
            setPicker(null);
        }

    };



    return <View
        style={styles.datetimeView}
        pointerEvents={disabled ? "none" : undefined}
    >
        <Text style={styles.addParticipantsSevenText}>{title}</Text>


        {/* FOR ANDROID && IOS  */}
        {picker &&
            <DateTimePicker
                style={styles.datetime}
                value={datetime}
                mode={picker}
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
        }

        {Platform.OS === "android" &&
            <View style={styles.datetimeAndroindView}>
                <TouchableOpacity onPress={() => showPicker("date")} style={styles.pickedDateContainer}>
                    <Text style={styles.pickedDate}>{datetime.toDateString()}</Text>
                    {/*<Ionicons name="ios-calendar-outline" color="gray" size={23} />*/}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => showPicker("time")} style={styles.pickedTimeContainer}>
                    <Text style={styles.pickedDate}>{`${datetime.getHours()}:${new Date().getUTCMinutes()}`}</Text>
                    {/*<MaterialIcons name="access-time" color="gray" size={23} />*/}
                </TouchableOpacity>
            </View>
        }
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
