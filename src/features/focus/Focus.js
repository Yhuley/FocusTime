import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import {marginSizes} from "../../utils/sizes";
import RoundedButton from "../../components/RoundedButton";

export default function Focus({addSubject}) {
    const [subject, setSubject] = useState(null)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What would you like to focus on?</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    onSubmitEditing={({nativeEvent}) => {
                        nativeEvent.text.trim().length > 0 ?
                            setSubject(nativeEvent.text)
                            :
                            Alert.alert('OOPS!', 'the subject can`t be empty', [{text: 'Understood'}])
                    }}
                />
                <RoundedButton
                    title={'+'}
                    size={50}
                    onPressEvent={() => addSubject(subject)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontWeight: "600",
        fontSize: 22
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
