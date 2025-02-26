import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Trips",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
