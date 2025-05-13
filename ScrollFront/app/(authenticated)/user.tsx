import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import ProfileHeader from '../screens/ProfileHeader';
import XPProgressBar from '@/components/XPProgressBar';

export default function user() {
  const userName = "Niroshan Dh";
  const level = 8;
  const currntXP =4500;
  const maxXP = 5000;
  const badges = [
    {id:'1', name:'Streak'
    },
    { id:'2', name:'Top 10'}
  ] 
  return (
   <ScrollView contentContainerStyle = {styles.container}>
     <ProfileHeader userName={userName} level={level} />
     <XPProgressBar currentXP={currntXP} maxXP={maxXP} />
   </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    padding: 20,
  }
})