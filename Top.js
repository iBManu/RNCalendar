import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native';

export default function Calendar({ date, onMonthChange }) {
    const day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
                <Text style={styles.dayNames}>{day[index]}</Text>
            );
        }
        return days;
    }

    return (
        <View style={{ width: "100%" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginBottom: 14 }}>
                <TouchableOpacity style={styles.button} onPress={handleBackButton}>
                    <Image style={{height: "60%", aspectRatio: 1}} source={require('../../assets/back.png')}/>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{month[date.getMonth()]} {date.getFullYear()}</Text>
                <TouchableOpacity style={styles.button} onPress={handleForwardButton}>
                    <Image style={{height: "60%", aspectRatio: 1}} source={require('../../assets/forward.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", width: "100%", alignItems: "center", justifyContent:"center" }}>
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
