import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "explore") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (route.name === "reels") {
            iconName = focused ? "film" : "film-outline";
          } else if (route.name === "shop") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FF6347",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="reels" />
      <Tabs.Screen name="shop" />
    </Tabs>
  );
};

export default TabLayout;
