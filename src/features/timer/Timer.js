import React, {useState} from 'react';
import {StyleSheet, View, Text, Vibration, Platform} from "react-native";
import * as Progress from 'react-native-progress';
import {fontSizes, marginSizes} from "../../utils/sizes";
import {useKeepAwake} from "expo-keep-awake";
import Countdown from "../countdown/Countdown";
import RoundedButton from "../../components/RoundedButton";
import Timing from "./Timing";

const Timer = ({focusSubject, onTimerEnd, clearSubject}) => {
    useKeepAwake();

    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);

    const switchStart = () => setIsStarted(!isStarted);

    const onProgress = progress => setProgress(progress);

    const vibrate = () => {
        if(Platform.OS === 'ios'){
            const interval = setInterval(() => Vibration.vibrate(), 500);
            setTimeout(() => clearInterval(interval), 5000);
        }else{
            Vibration.vibrate(5000);
        }
    }

    const changeTime = minutes => {
        setMinutes(minutes);
        setProgress(1);
        setIsStarted(false);
    };

    const onEnd = () => {
        vibrate();
        setMinutes(5);
        setProgress(1);
        setIsStarted(false);
        onTimerEnd();
    };

    return (
        <View style={styles.container}>
            <Countdown
                {...{minutes}}
                isPaused={!isStarted}
                {...{onProgress}}
                {...{onEnd}}
            />
            <Progress.Bar
                style={styles.progress}
                progress={progress}
                borderRadius={0}
                height={20}
                width={250}
                color={'#6c8bd0'}
            />
            <View style={styles.taskContainer}>
                <Text style={styles.title}>We are focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            <Timing onChangeTime={changeTime}/>
            <View style={styles.buttonContainer}>
                <RoundedButton
                    title={isStarted ? 'pause' : 'start'}
                    onPressEvent={switchStart}
                />
                <View style={styles.clearSubject}>
                    <RoundedButton
                        title={'-'} size={50}
                        onPressEvent={clearSubject}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    taskContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: marginSizes.l
    },
    progress: {
        marginTop: marginSizes.l
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: marginSizes.l
    },
    clearSubject: {
        marginLeft: marginSizes.m
    },
    title: {
        color: '#fff',
        fontSize: fontSizes.l
    },
    task: {
        color: '#fff',
        fontWeight: '600',
        fontSize: fontSizes.xl
    }
});

export default Timer;