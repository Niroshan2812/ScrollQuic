
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ActionBar from './ActionBar';

const { height } = Dimensions.get('window');

type Props = {
  question: string;
  author: string;
};

export default function QuectionCard({ question, author }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      <Text style={styles.author}>Posted by {author}</Text>
      <ActionBar />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000',
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
