import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const RoundedButton = ({style = {}, textStyle = {}, size = 100, ...props}) => {
    return (
        <TouchableOpacity
            onPress={props.onPressEvent}
            style={[styles(size).radius, style]}
        >
            <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};
const styles = size => {
    return StyleSheet.create({
        radius: {
            width: size,
            height: size,
            borderRadius: size / 2,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#fff',
            borderWidth: 2
        },
        text: {
            color: '#fff',
            fontSize: size / 3
        }
    })
}
export default RoundedButton;