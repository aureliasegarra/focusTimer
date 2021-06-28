import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { colors } from './src/utils/colors';
import { Timer } from './src/features/timer/Timer';
import { spacing } from './src/utils/sizes';


export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  // any time the focus subject changed => set the focus history
  useEffect(() => {
    if(focusHistory) {
      setFocusHistory([...focusHistory, focusSubject]);
    }
  }, [focusSubject])
 
  return (
    <View style={styles.container}>
     {focusSubject ? (
      <Timer 
        focusSubject={focusSubject} 
        onTimerEnd={() => setFocusSubject(null)} 
        clearSubject={() => setFocusSubject(null)}
      />
     ) : (
       <Focus addSubject={setFocusSubject} />
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
