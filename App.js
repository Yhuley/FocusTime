import React, {useState, useEffect} from 'react';
import {StyleSheet, View, AsyncStorage} from 'react-native';
import Focus from "./src/features/focus/Focus";
import Timer from "./src/features/timer/Timer";
import {paddingSizes} from "./src/utils/sizes";
import FocusHistory from "./src/features/focus/FocusHistory";

export default function App() {
    const [focusSubject, setFocusSubject] = useState(null);
    const [focusHistory, setFocusHistory] = useState([]);

    const onClear = () => setFocusHistory([]);

    const addFocusHistoryWithStatus = (subject, completed, key = Date.now().toString()) => {
        setFocusHistory([...focusHistory, {subject, completed, key}]);
    };

    const saveFocusHistory = async () => {
        try {
            await AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory));
        } catch (e) {
            console.log(e);
        }
    };

    const loadFocusHistory = async () => {
        try {
            const history = await AsyncStorage.getItem('focusHistory');

            if (focusHistory && JSON.parse(history).length) {
                setFocusHistory(JSON.parse(history));
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(()=>{
        loadFocusHistory();
    },[]);

    useEffect(() => {
        saveFocusHistory();
    }, [focusHistory]);


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
                    <View style={{flex: 0.5}}>
                        <Focus addSubject={setFocusSubject}/>
                        <FocusHistory
                            {...{focusHistory}}
                            {...{onClear}}
                        />
                    </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#104770',
        padding: paddingSizes.l
    }
});