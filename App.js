import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Focus from "./src/features/focus/Focus";
import Timer from "./src/features/timer/Timer";
import {paddingSizes} from "./src/utils/sizes";

export default function App() {
    const [focusSubject, setFocusSubject] = useState(null);

    return (
        <View style={styles.container}>
            {
                focusSubject ?
                    <Timer {...{focusSubject}}/>
                    :
                    <Focus addSubject={setFocusSubject}/>
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