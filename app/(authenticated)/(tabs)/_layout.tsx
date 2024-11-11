import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        tabBarActiveTintColor: Colors.primary,
        headerRight: () => (
          <Link href={"/"} replace asChild>
            <Ionicons name="log-out"  />
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "My Homefeed",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "My Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
