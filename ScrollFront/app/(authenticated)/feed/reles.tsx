// app/(authenticated)/reles.tsx

import { View, Text, FlatList } from 'react-native';
import QuectionCard from '@/components/QuectionCard';
import { getRandomColor } from '@/utils/getRandomColor';


const quection = [
  { id: '1', question: 'What is your biggest goal this year?', author: 'John' },
  { id: '2', question: 'If you could time travel, where would you go?', author: 'Siri' },
  { id: '3', question: 'What motivates you every day?', author: 'Alex' },
];

const data = quection.map((item) => ({
  ...item,
  backgroundColor: getRandomColor(),}));

export default function RelesScreen() {
  return (
   <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <QuectionCard
          question={item.question}
          author={item.author}
          backgroundColor={item.backgroundColor}
        />
      )}
      pagingEnabled
      showsVerticalScrollIndicator={false}
    />
  );
}
