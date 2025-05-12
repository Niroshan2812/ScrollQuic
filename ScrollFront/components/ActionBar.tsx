import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ActionBar() {
    return (
       <View style={{ flexDirection: 'column', gap: 30 }}>

         <TouchableOpacity>
        <Ionicons name="person" size={30} color="white" />
      </TouchableOpacity>
        
        <TouchableOpacity>
        <Ionicons name="heart-outline" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="share-social-outline" size={30} color="white" />
      </TouchableOpacity>
       <TouchableOpacity>
        <Ionicons name="chatbox-ellipses-outline" size={30} color="white" />
      </TouchableOpacity>
      
      </View>
    );
}