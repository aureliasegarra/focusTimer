import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake'; // import the Hook, prevents the screen from sleeping

import { CountDown } from '../../components/CountDown';
import { RoundedButton } from '../../components/RoundedButton';

import { Timing } from './Timing';

export const Timer = ({ focusSubject }) => {
    useKeepAwake(); // execute the Hook 

    const [minutes, setMinutes] = useState(0.1);
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);

    const onProgress = (progress) => {
        setProgress(progress);
    }

    const changeTime = (min) => {
        setMinutes(min);
        setProgress(1);
        setIsStarted(false);
    }
    

  return (
    <View style={styles.container}>
        <View style={styles.countdown}>
            <CountDown 
                minutes={minutes}
                isPaused={!isStarted}
                onProgress={onProgress}
            />
        </View>
        <View style={{paddingTop: spacing.xxl}}> 
            <Text style={styles.title}>Focusing on :</Text>
            <Text style={styles.task}>Timer goes here : {focusSubject}</Text>
        </View>
        <View style={{ paddingTop: spacing.xxl }}>
            <ProgressBar 
                color='#5E84E2'
                style={{height: 10}}
                progress={progress}
            />
        </View>
        <View style={styles.buttonWrapper}>
            <Timing onChangeTime={changeTime} />
        </View>
        <View style={styles.buttonWrapper}>
            {isStarted ? (
                <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
            ) : (
                <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
            )
            }
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
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        alignItems:'center',
    }
})


