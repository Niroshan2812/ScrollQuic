import React from 'react'
import { ScrollView,StyleSheet } from 'react-native'
import DiscoveryScreen from '../screens/DiscoveryScreen';

const mockData = {
 PsychologyQuestions: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
  Mathematics: ['Q4', 'Q5', 'Q6'],
  Science: ['Q7', 'Q8'],
}



export default function discovers() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <DiscoveryScreen titile="PsycologyQuestions" quections={mockData.PsychologyQuestions} />
      <DiscoveryScreen titile="Mathemetics" quections={mockData.Mathematics} />
      <DiscoveryScreen titile="Science" quections={mockData.Science} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export const options = {
  title:"Discover",
  headerShown: false,
};