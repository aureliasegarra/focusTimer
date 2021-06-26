import React, { useState, useEffect } from "react";
import  { Text, View, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}`:time;


export const CountDown = ({
    minutes = 0.1,
    isPaused,
    onProgress
}) => {

const interval = React.useRef(null);

 // I need milliseconde because I will use an interval
 const [millis, setMillis] = useState(null);

const countDown = () => {
  setMillis((time) => { //time is currentTime
    if(time === 0){
      // more staff here
      return time;
    }
    const timeleft = time - 1000;
    onProgress(timeleft / minutesToMillis(minutes))
    return timeleft;
  })
}

// any time a minute comes in => set the millis
useEffect(() => {
  setMillis(minutesToMillis(minutes))
}, [minutes])


// any time a millis comes => log it
useEffect(() => {
  console.log(millis);
}, [millis])

useEffect(() => {
  if(isPaused){
    if(interval.current) clearInterval(interval.current);
    return;
  }
  interval.current = setInterval(countDown, 1000);
  
  return () => clearInterval(interval.current);
}, [isPaused]) 


    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor(millis / 1000) % 60;

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
    backgroundColor: colors.dark,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  
})

