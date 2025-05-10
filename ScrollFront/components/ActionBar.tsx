import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ActionBar() {
    return (
       <View style={{ flexDirection: 'row', gap: 20 }}>
        <TouchableOpacity>
        <Ionicons name="heart-outline" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="share-social-outline" size={28} color="white" />
      </TouchableOpacity>
      </View>
    );
}