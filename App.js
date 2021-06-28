import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { FocusHistory } from './src/features/focus/FocusHistory';
import { colors } from './src/utils/colors';
import { Timer } from './src/features/timer/Timer';
import { spacing } from './src/utils/sizes';


const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
}

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

 const addFocusHistorySubjectWithState = (focusSubject, status) => {
  setFocusHistory([...focusHistory, { suject: focusSubject, status: status }])
 }
 
  const onClear = () => {
    // Todo later
  }

  return (
    <View style={styles.container}>
     {focusSubject ? (
      <Timer 
        focusSubject={focusSubject} 
        onTimerEnd={() => {
          addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE);
          setFocusSubject(null)
        }}
        clearSubject={() => {
          addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCELLED);
          setFocusSubject(null)
        }}
      />
     ) : (
       <View>
        <Focus addSubject={setFocusSubject} />
        <FocusHistory  focusHistory={focusHistory} onClear={onClear} />
       </View> 
     )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: colors.purple,
    
  },
});
