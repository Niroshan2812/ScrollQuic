import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import QuestionCard from '../../components/QuectionSubCard';

type Props = {
    titile: string;
    quections: string[];
}
export default function DiscoveryScreen({titile, quections}: Props) {
  return (
     <View style={styles.container}>
      <Text style={styles.title}>#{titile}</Text>
      <FlatList
        horizontal
        data={quections}
        keyExtractor={(item, index) => `${titile}-${index}`}
        renderItem={({ item }) => <QuestionCard titile={item} onPress={() => console.log(`Pressed on ${item}`)} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 8,
  },
});
