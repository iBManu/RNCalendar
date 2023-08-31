import React, { useState } from "react";
import { View, Text } from 'react-native';
import Week from "./Week";
import Top from "./Top";

export default function RNCalendar({options}) {
    const [date, setDate] = useState(new Date());
    
    const defaultOptions = {
        lang: 'en',
        oneCharDays: false,
        theme: "default",
        outOfMonthDaysTransparency: false,
        outOfMonthDaysNumbers: false,
        customDayLabels: false,
        customDayLabelsNames: {
            customLongDayNames: [],
            customShortDayNames: [],
        }
    };

    const mergedOptions = {...defaultOptions, ...options};

    const handleMonthChange = (newMonth) => {
        setDate(newMonth);
    };

    const firstday = new Date(date.getFullYear(), date.getMonth(), 1);
    const isfirst = true;

    const dayOffset = new Map();
    dayOffset.set(0, 2);
    dayOffset.set(1, 8);
    dayOffset.set(2, 7);
    dayOffset.set(3, 6);
    dayOffset.set(4, 5);
    dayOffset.set(5, 4);
    dayOffset.set(6, 3);
    return (
        <View style={{ width: "100%" }}>
            <Top date={date} onMonthChange={handleMonthChange} options={mergedOptions}/>
            <Week options={mergedOptions} isfirst={isfirst} first={firstday.getDay()} thisMonthDate={date} />
            <Week options={mergedOptions} first={dayOffset.get(firstday.getDay()) + 7 * 0} thisMonthDate={date} />
            <Week options={mergedOptions} first={dayOffset.get(firstday.getDay()) + 7 * 1} thisMonthDate={date} />
            <Week options={mergedOptions} first={dayOffset.get(firstday.getDay()) + 7 * 2} thisMonthDate={date} />
            <Week options={mergedOptions} first={dayOffset.get(firstday.getDay()) + 7 * 3} thisMonthDate={date} />
            <Week options={mergedOptions} first={dayOffset.get(firstday.getDay()) + 7 * 4} thisMonthDate={date} />
        </View>
    );
}
