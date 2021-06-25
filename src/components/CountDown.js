import React, { useState, useEffect } from "react";
import  { Text, View, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}`:time;


export const CountDown = ({
    minutes = 20,
    isPaused,
}) => {

const interval = React.useRef(null);

const countDown = () => {
  setMillis((time) => { //time is currentTime
    if(time === 0){
      // more staff here
      return time;
    }
    const timeleft = time - 1000;
    // report the progress here
    return timeleft;
  })
}

useEffect(() => {
  interval.current = setInterval(countDown, 1000);
  return () => clearInterval(interval.current);
}, [])

    // I need milliseconde because I will use an interval
    const [millis, setMillis] = useState(minutesToMillis(minutes));

    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor(millis / 1000) % 60;;
 return (
   
    <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
   
 )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: fontSizes.xxxl,
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',

   
  },
  
})

