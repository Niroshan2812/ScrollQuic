import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

interface XPProgressBarProps {
  currentXP: number;
  maxXP: number;
}

export default function XPProgressBar({currentXP, maxXP} : XPProgressBarProps) {
    const progress = currentXP / maxXP;
  return (
   <View style={styles.container}>
        <Text style={styles.lable}>XP: </Text>
         <Progress.Bar progress={progress} width={250} height={15} color="#2196F3" />
         <Text style = {styles.text}>{currentXP} / {maxXP}</Text>
         
        
   </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
 lable:{
    fontWeight: 'bold',
    marginBottom:5
 }, 
  text: { 
    marginTop: 5 
  },
})
