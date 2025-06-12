import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: '#8E8E93',
      tabBarStyle: {
        backgroundColor: '#fff',
      },
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleStyle: {
        color: '#000',
      }
    }}>
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Account',
          name: 'account',
          tabBarLabel: 'Account',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" size={24} color="black" />
          ),
        }} 
      />
      <Tabs.Screen 
        name="books" 
        options={{
          title: 'Library',
          name: 'library',
          tabBarLabel: 'Library',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="book" size={24} color="black" />
          ),
        }} 
      />
    </Tabs>
  );
}
