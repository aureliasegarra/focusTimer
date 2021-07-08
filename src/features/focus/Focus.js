import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Focus = ({ addSubject }) => {
const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on ? 🤔</Text>
        <View style={styles.innerContainer}>
          <TextInput 
            style={{ flex: 1, marginRight: spacing.md }}
            onSubmitEditing={({ nativeEvent }) => { 
                setSubject(nativeEvent.text)
              }}
          />
          <RoundedButton 
            size={50} 
            title="+"
            onPress={()=> {
              addSubject(subject)}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: spacing.xl,
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  innerContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  }
});

export default Focus;
