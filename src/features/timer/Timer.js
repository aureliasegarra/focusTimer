import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacing } from '../../utils/sizes';


export const Timer = ({ focusSubject }) => {


  return (
    <View style={styles.container}>
    
        <Text style={styles.title}>Timer goes here : {focusSubject}</Text>
     
    
    </View>
  );
};

const styles =StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Timer;
