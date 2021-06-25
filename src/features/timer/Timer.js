import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

import { CountDown } from '../../components/CountDown';
import { RoundedButton } from '../../components/RoundedButton';

export const Timer = ({ focusSubject }) => {
    const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
        <View style={styles.countdown}>
            <CountDown isPaused={!isStarted} />
        </View>
        <View style={{paddingTop: spacing.xxl}}> 
            <Text style={styles.title}>Focusing on :</Text>
            <Text style={styles.task}>Timer goes here : {focusSubject}</Text>
        </View>
        <RoundedButton 
            title="start" 
            size={50} 
            onPress={() => setIsStarted(true)} 
        />
         <RoundedButton 
            title="stop" 
            size={50} 
            onPress={() => setIsStarted(false)}
        />
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
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Timer;
