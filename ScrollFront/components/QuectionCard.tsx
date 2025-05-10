
import React, { use, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated,{
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import ActionBar from './ActionBar';

const { height } = Dimensions.get('window');

type Props = {
  question: string;
  author: string;
  backgroundColor: string;
};

export default function QuectionCard({ question, author, backgroundColor }: Props) {
    const bgcolor = useSharedValue(backgroundColor);
    useEffect(()=>{
        bgcolor.value=backgroundColor
    },[backgroundColor]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: withTiming(bgcolor.value, {duration: 800}),
        };
    });
  return (
    <Animated.View style={[styles.card, animatedStyle]}>
      <Text style={styles.question}>{question}</Text>
      <Text style={styles.author}>Posted by {author}</Text>
      <ActionBar />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    height,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    
  },
  question: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  author: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 20,
  },
});
