import React from 'react';
import {View, StyleSheet, FlatList, Text, SafeAreaView} from "react-native";
import {fontSizes, marginSizes} from "../../utils/sizes";

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
                            renderItem={HistoryItem }
                        />
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
    }

});

export default FocusHistory;