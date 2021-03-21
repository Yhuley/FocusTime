import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from "react-native";
import {fontSizes, marginSizes, paddingSizes} from "../../utils/sizes";

const minutesToMillis = minutes => minutes * 1000 * 60;

const Countdown = ({minutes = 0.1, isPaused = true, onProgress, onEnd}) => {
    const [millis, setMillis] = useState(minutesToMillis(minutes));

    const interval = React.useRef(null);

    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor(millis / 1000) % 60;

    const formatTime = (time) => time < 10 ? `0${time}` : time;

    const countDown = () => {
        setMillis(time => {
            if (time === 0){
                clearInterval(interval.current);
                onEnd();
                return time;
            }
            const timeLeft = time - 1000;
            onProgress(timeLeft / minutesToMillis(minutes));
            return timeLeft;
        })
    }

    useEffect(() => {
        if(isPaused) {
            if(interval.current) clearInterval(interval.current);
            return;
        }
        interval.current = setInterval(countDown, 1000);

        return () => clearInterval(interval.current)
    }, [isPaused])

    useEffect(() => {
        setMillis(minutesToMillis(minutes))
    },[minutes])

    return (
        <View style={styles.countdown}>
            <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    countdown: {
        justifyContent: 'center',
        marginTop: marginSizes.xl
    },
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight: 'bold',
        color: '#fff',
        padding: paddingSizes.m,
        backgroundColor: '#6c8bd0'
    }
});

export default Countdown;