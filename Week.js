import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Week({ first, isfirst, thisMonthDate }) {
    const currentDate = new Date();
    if(first === 0) {
        first = 7;
    }
    const renderDays = () => {
        if (isfirst) {
            const days = [];
            var dayNumber = 1;
            for (let index = 0; index < 7; index++) {

                if (first - 1 <= index) {
                    first++;
                    if(dayNumber === currentDate.getDate() && thisMonthDate.getMonth() === currentDate.getMonth() && thisMonthDate.getFullYear() === currentDate.getFullYear()) {
                        days.push(
                            <View key={index} style={styles.currentDay}>
                                <Text style={styles.currentDayNumber}>
                                    {dayNumber}
                                </Text>
                            </View>
                        );
                    }
                    else {
                        days.push(
                            <View key={index} style={styles.day}>
                                <Text style={styles.dayNumber}>
                                    {dayNumber}
                                </Text>
                            </View>
                        );

                    }
                   dayNumber++;
                }
                else {
                    days.push(
                        <View key={index} style={styles.dayWithoutNumber}></View>
                    );
                }

            }
            return days;
        }
        else {
            const actualDate = new Date();
            const lastDay = new Date(thisMonthDate.getFullYear(), thisMonthDate.getMonth() + 1, 0)
            const days = [];
            var dayNumber = first;
            for (let index = 0; index < 7; index++) {

                if (dayNumber <= lastDay.getDate()) {
                    if(dayNumber === currentDate.getDate() && thisMonthDate.getMonth() === currentDate.getMonth() && thisMonthDate.getFullYear() === currentDate.getFullYear()) {
                        days.push(
                            <View key={index} style={styles.currentDay}>
                                <Text style={styles.currentDayNumber}>
                                    {dayNumber}
                                </Text>
                            </View>
                        );
                    }
                    else {
                        days.push(
                            <View key={index} style={styles.day}>
                                <Text style={styles.dayNumber}>
                                    {dayNumber}
                                </Text>
                            </View>
                        );
                    }
                    
                    dayNumber++;
                }
                else {
                    days.push(
                        <View key={index} style={styles.dayWithoutNumber}></View>
                    );
                }
            }

            return days;
        }
    };

    return (
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            {renderDays()}
        </View>
    );
}

const styles = StyleSheet.create({
    day: {
        width: "13%",
        aspectRatio: 1,
        backgroundColor: "#F0F0F0",
        borderRadius: 12,
        margin: "0.5%",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "lightgray",
        borderWidth: 1,
    },
    dayNumber: {
        fontSize: 32,
        fontWeight: "bold",
        color: "lightgray",
    },
    dayWithoutNumber: {
        width: "13%",
        aspectRatio: 1,
        backgroundColor: "#F9F9F9",
        borderRadius: 12,
        margin: "0.5%",
        justifyContent: "center",
        alignItems: "center",
    },
    currentDay: {
        width: "13%",
        aspectRatio: 1,
        backgroundColor: "#3F2E3E",
        borderRadius: 12,
        margin: "0.5%",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#331D2C",
        borderWidth: 3,
    },
    currentDayNumber: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#A78295",
    }
});