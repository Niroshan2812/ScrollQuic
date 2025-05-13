import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
interface XPProgressBarProps {
  currentXP: number;
  maxXP: number;
}

export default function XPProgressBar({currentXP, maxXP} : XPProgressBarProps) {
  return (
   <View style={styles.container}>
        <Text style={styles.lable}>XP Progress</Text>
        
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
 }
})
