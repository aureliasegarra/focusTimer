import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item, index }) => {
    console.log(item);
    return (
        <Text style={styles.historyItem}>
            {item.suject}
        </Text>

)}


export const FocusHistory = ({ focusHistory, onClear }) => {
    const clearHistory = () => {
        onClear();
    }

    return (
        <>
            <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
                <Text style={styles.title}>Thing's we've focused on</Text>
                {focusHistory.length && (
                   <>
                   <FlatList 
                        style={{ flex: 1 }}
                        contentContainerStyle={{ flex: 1, alignItems: 'center' }}
                        data={focusHistory}
                        renderItem={HistoryItem}
                    />
                    <View style={styles.clearContainer}>
                        <RoundedButton size={75} title={"Clear"} onPress={() => onClear()} />
                    </View>
                    </>
                )}
                {!focusHistory.length && (
                    <Text>Nothing yet</Text>
                )}
            </SafeAreaView>
        </>
    )
};

const styles = StyleSheet.create({
    historyItem: {
        color: 'red',
        fontSize: fontSizes.md
    },
    title: {
        color: 'white',
        fontSize: fontSizes.lg
    }, 
    clearContainer: {
        alignItems: 'center',
        padding: spacing.md
    }
})

