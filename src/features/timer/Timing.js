import React from 'react';
import {StyleSheet, View} from "react-native";
import RoundedButton from "../../components/RoundedButton";
import {marginSizes} from "../../utils/sizes";

const Timing = ({onChangeTime}) => {
    return (
        <View style={styles.container}>
            <View style={styles.timingButton}>
                <RoundedButton
                    size={75}
                    title={'5'}
                    onPressEvent={() => onChangeTime(5)}
                />
            </View>
            <View style={styles.timingButton}>
                <RoundedButton
                    size={75}
                    title={'10'}
                    onPressEvent={() => onChangeTime(10)}
                />
            </View>
            <View style={styles.timingButton}>
                <RoundedButton
                    size={75}
                    title={'20'}
                    onPressEvent={() => onChangeTime(20)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: marginSizes.l
    },
    timingButton: {
        marginHorizontal: marginSizes.s
    }
});

export default Timing;