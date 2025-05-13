import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface PerformacneButtonProps {
    onPress: () => void;
    }
export default function PerformacneButton({onPress} : PerformacneButtonProps) {
  return (
  <View style={styles.container}>
      <Button title="View Performance Details" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20, width: '100%' },
});