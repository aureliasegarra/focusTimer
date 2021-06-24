import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

import { CountDown } from '../../components/CountDown';

export const Timer = ({ focusSubject }) => {


  return (
    <View style={styles.container}>
        <CountDown />
        <View style={{paddingTop: spacing.xxl}}> 
            <Text style={styles.title}>Focusing on :</Text>
            <Text style={styles.task}>Timer goes here : {focusSubject}</Text>
        </View>
    </View>
  );
};

const styles =StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: colors.white,
        textAlign: 'center',
    },
    task: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})

export default Timer;
