import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import TodayScreen from "../screens/TodayScreen";
import performanceEvalScreen from "../screens/PerformanceEvalScreen";
import userProfileScreen from "../screens/UserProfileScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="today-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Performance"
        component={performanceEvalScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="graph-trend" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={userProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
