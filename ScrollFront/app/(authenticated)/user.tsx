import React from 'react'
import { View, Text, ScrollView, StyleSheet, Button, FlatList } from 'react-native'
import ProfileHeader from '../screens/ProfileHeader';
import XPProgressBar from '@/components/XPProgressBar';
import PerformanceButton from '@/components/PerformacneButton';
import { useRouter } from 'expo-router';


export default function user({}) {
  const userName = "Niroshan Dh";
  const level = 8;
  const currntXP =4500;
  const maxXP = 5000;
  const badges = [
    {id:'1', name:'Streak'
    },
    { id:'2', name:'Top 10'}
  ] 

  const performanceData = {
    userId: "user123",
    level: level,
    currentXP: currntXP,
    maxXP: maxXP,
    badges: badges,
    performanceMetrics: [
      {
        date: "2023-10-26T10:00:00Z",
        score: 85,
        accuracy: 90,
        timeSpent: 120
      },
      {
        date: "2023-10-25T14:30:00Z",
        score: 78,
        accuracy: 85,
        timeSpent: 150
      }
    ]
  };
  const router = useRouter();

  const renderBadgeItem = ({item}: {item: {id: string, name: string}}) => (
    <View style={styles.badgeContainer}>
      <Text>{item.name}</Text>
    </View>
  );
  return (
   <FlatList data={badges} keyExtractor={(item) => item.id} 
   renderItem={renderBadgeItem} 
   numColumns={2} 
   contentContainerStyle={styles.container}
   ListHeaderComponent={()=>(
    <View>
      <ProfileHeader userName={userName} level={level} />
      <XPProgressBar currentXP={currntXP} maxXP={maxXP} />
     <Text style={styles.title}>Earned Badges</Text>
    </View>
   )}
   ListFooterComponent={()=>(
    <PerformanceButton onPress={() => router.push({pathname:'/(authenticated)/performance',params: {data: JSON.stringify(performanceData)}})} />
   )}
   />
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    padding: 20,
  }, 

  badgeContainer:{
       width: '45%',
    height: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  }, 
  title:{
      fontSize: 18, 
     fontWeight: 'bold',
      marginVertical: 10
  }
   
  
})