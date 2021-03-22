import React from 'react';
import {View, StyleSheet, FlatList, Text, SafeAreaView} from "react-native";
import {fontSizes, marginSizes} from "../../utils/sizes";
import RoundedButton from "../../components/RoundedButton";

const HistoryItem = ({item, index}) => {
    return(
        <Text style={styles.historyItem(item.completed)}>
            {item.subject}
        </Text>
    )
}

const FocusHistory = ({focusHistory, onClear}) => {
    const clearHistory = () => onClear();
    return (
        <>
            <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
                {!!focusHistory.length &&
                    <>
                        <Text style={styles.title}>Focusing subjects:</Text>
                        <FlatList
                            style={{flex: 1}}
                            contentContainerStyle={{flex: 1, alignItems: 'center'}}
                            data={focusHistory}
                            renderItem={HistoryItem}
                        />
                        <View style={styles.clearContainer}>
                            <RoundedButton
                                size={65}
                                title={'clear'}
                                onPressEvent={onClear}
                            />
                        </View>
                    </>
                }
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    historyItem: completed => ({
        color: completed ? 'green' : 'red',
        fontSize: fontSizes.l,
        marginTop: marginSizes.m
    }),
    title: {
        fontSize: fontSizes.xl,
        color: '#fff'
    },
    clearContainer: {

    }
});

export default FocusHistory;