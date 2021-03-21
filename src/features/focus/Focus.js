import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { fontSizes, marginSizes } from "../../utils/sizes";
import RoundedButton from "../../components/RoundedButton";

export default function Focus({addSubject}) {
    const [tmpItem, setTmpItem] = useState(null)


    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What would you like to focus on?</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onSubmitEditing={({nativeEvent}) => {
                           setTmpItem(nativeEvent.text)
                        }}
                    />
                    <RoundedButton
                        title={'+'}
                        size={50}
                        onPressEvent={() => addSubject(tmpItem)}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        justifyContent: 'center',
        flex: 0.5
    },
    title: {
        color: 'white',
        fontWeight: "600",
        fontSize: fontSizes.l
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: marginSizes.s,
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        marginRight: marginSizes.m,
    }
});
