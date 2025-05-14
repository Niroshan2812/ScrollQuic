import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'



type PerformanceMetric = {
    date: string;
    score: number;
    accuracy: number;
    timeSpent: number;
};

type PerformanceData = {
    userId: string;
    level: string;
    currentXP: number;
    maxXP: number;
    performanceMetrics: PerformanceMetric[];
};

export default function performance() {
    const params = useLocalSearchParams();
    const performanceData: PerformanceData = JSON.parse(params.data as string);
  return (
   <View style={styles.container}>
    <Text style = {styles.title}>Performacne Details</Text>
    <Text>User Id: {performanceData.userId}</Text>
    <Text>Level: {performanceData.level}</Text>
    <Text>Currant XP: {performanceData.currentXP}</Text>
    <Text>Max XP: {performanceData.maxXP}</Text>

    <Text style = {styles.subtitle}>Performance Metrix</Text>
    {performanceData.performanceMetrics.map((metric, index)=>(
         <View key={index} style={styles.metricContainer}>
          <Text>Date: {new Date(metric.date).toLocaleDateString()}</Text>
          <Text>Score: {metric.score}</Text>
          <Text>Accuracy: {metric.accuracy}%</Text>
          <Text>Time Spent: {metric.timeSpent} seconds</Text>
        </View>
    ))}
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  metricContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%'
  }
});
