import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type Props = {
    titile: string;
    onPress: () => void;
}
export default function QuectionSubCard({titile, onPress}: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Text style={styles.text}>{titile}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 100,
    backgroundColor: '#eee',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});