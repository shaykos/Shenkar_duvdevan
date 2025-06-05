import { Tabs } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabsLayout() {
    return (
        <Tabs
            initialRouteName="home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'home') iconName = 'home';
                    else if (route.name === 'gas') iconName = 'gas-station';
                    else if (route.name === 'bank') iconName = 'bank';
                    else if (route.name === 'post') iconName = 'email';
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',

            })}
        >
            <Tabs.Screen name="home" options={{ title: "בית" }} />
            <Tabs.Screen name="bank" options={{ title: "בנק" }} />
            <Tabs.Screen name="gas" options={{ title: "תחנות דלק" }} />
            <Tabs.Screen name="post" options={{ title: "דואר" }} />
        </Tabs>
    )
}