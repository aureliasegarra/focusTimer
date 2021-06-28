import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item }) => (
        <Text>
            {item.subject}
        </Text>

)


export const FocusHistory = ({ focusHistory, onClear }) => {
    const clearHistory = () => {
        onClear();
    }

    return (
        <>
            <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Thing's we've focused on</Text>
                {focusHistory.length && (
                    <FlatList 
                        style={{ flex: 1 }}
                        contentContainerStyle={{ flex: 1, alignItems: 'center' }}
                        data={focusHistory}
                        renderItem={HistoryItem}
                    />
                )}
                {!focusHistory.length && (
                    <Text style={{ color: "white" }}>Nothing yet</Text>
                )}
            </SafeAreaView>
        </>
    )
};

