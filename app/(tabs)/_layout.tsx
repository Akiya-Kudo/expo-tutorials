import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#fdd",
      headerStyle: {
        backgroundColor: "#25292e"
      },
      headerShadowVisible: false,
      headerTintColor: "#fff",
      tabBarStyle: {
        backgroundColor: "#25292e"
      }
    }}
  >
    <Tabs.Screen 
      name="index" 
      options={{ 
        headerTitle: 'StickerSmash',
        tabBarIcon: ({focused, color}) => (
          <Ionicons 
            name={ focused ? "home-sharp" : "home-outline" } 
            color={color}
            size={20}
          />
        )
      }} 
    />
    <Tabs.Screen
      name="about" 
      options={{
        headerTitle: 'About',
        tabBarIcon: ({focused, color}) => (
          <Ionicons 
            name={ focused ? "information-sharp" : "information-outline" } 
            color={color}
            size={20}
          />
        )
      }} 
    />
    <Tabs.Screen name="+not-found" options={{}}/> 
  </Tabs>
)}
