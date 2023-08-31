import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native';
import { languajes } from "./config";

export default function Calendar({ date, onMonthChange, options }) {

    const { lang, oneCharDays, customDayLabels, customDayLabelsNames } = options;
    const { dayLongNames, dayShortNames, monthNames } = languajes[lang];
    const { customLongDayNames, customShortDayNames } = customDayLabelsNames;
    const month = monthNames;
    var dayLabels = oneCharDays ? dayShortNames : dayLongNames;

    if(customDayLabels === true) {
        dayLabels = oneCharDays ? customShortDayNames : customLongDayNames;
    }

    console.log("Day names: " + dayLabels);

    const handleBackButton = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() - 1);
        onMonthChange(newDate);
    };

    const handleForwardButton = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + 1);
        onMonthChange(newDate);
    };

    const renderDayNames = () => {
        const days = [];
        for (let index = 0; index < 7; index++) {
            days.push(
                <Text style={styles.dayNames}>{dayLabels[index]}</Text>
            );
        }
        return days;
    }

    return (
        <View style={{ width: "100%" }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 14 }}>
                <View style={{ width: "20%", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.button} onPress={handleBackButton}>
                        <Image style={{ height: "60%", aspectRatio: 1 }} source={require('../../assets/back.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: "60%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{month[date.getMonth()]} {date.getFullYear()}</Text>
                </View>
                <View style={{ width: "20%", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.button} onPress={handleForwardButton}>
                        <Image style={{ height: "60%", aspectRatio: 1 }} source={require('../../assets/forward.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "center" }}>
                {renderDayNames()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    dayNames: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
        width: "13%",
        margin: "0.5%",
        textAlign: "center",
    },
    button: {
        height: 30,
        aspectRatio: 1,
        borderRadius: 100,
        backgroundColor: "#F0F0F0",
        justifyContent: "center",
        alignItems: "center",
    },
});
