import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Focus from "./src/features/focus/Focus";
import Timer from "./src/features/timer/Timer";
import {paddingSizes} from "./src/utils/sizes";
import FocusHistory from "./src/features/focus/FocusHistory";

export default function App() {
    const [focusSubject, setFocusSubject] = useState(null);
    const [focusHistory, setFocusHistory] = useState([]);

    const onClear = () => setFocusHistory([]);

    const addFocusHistoryWithStatus = (subject, completed) => {
        setFocusHistory([...focusHistory, {subject, completed}]);
    };
    return (
        <View style={styles.container}>
            {
                focusSubject ?
                    <Timer
                        {...{focusSubject}}
                        onTimerEnd={() => {
                            addFocusHistoryWithStatus(focusSubject, true);
                            setFocusSubject(null);
                        }}
                        clearSubject={() => {
                            addFocusHistoryWithStatus(focusSubject, false);
                            setFocusSubject(null);
                        }}
                    />
                    :
                    <>
                        <Focus addSubject={setFocusSubject}/>
                        <FocusHistory
                            {...{focusHistory}}
                            {...{onClear}}
                        />
                    </>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#104770',
        padding: paddingSizes.m
    }
});