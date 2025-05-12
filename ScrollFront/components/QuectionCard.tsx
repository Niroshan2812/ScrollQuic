
import React, { use, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated,{
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import ActionBar from './ActionBar';

const { width,height } = Dimensions.get('window');

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
     
        <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.question}>{question}</Text>
          
        </View>
        <View style={styles.actionContainer}>
          <ActionBar />
        </View>
     </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    height,
    width,
    padding: 16,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
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
    textAlign: 'center',
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
  },
});
