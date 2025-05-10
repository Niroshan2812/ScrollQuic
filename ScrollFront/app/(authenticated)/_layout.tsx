import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AuthenticatedLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'reles':
              iconName = 'albums';
              break;
            case 'discover':
              iconName = 'compass';
              break;
            case 'user':
              iconName = 'person';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    />
  );
}
