import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/app/(tabs)/index";
import MoviesScreen from "@/app/(tabs)/explore"
//import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                // options={{
                //     tabBarIcon: ({color, size}) => (
                //         <Icon name="home-outline" color={color} size={size} />
                //     ),
                //     headerShown: false
                // }}
            />
            <Tab.Screen
                name="Filmes"
                component={MoviesScreen}
                // options={{
                //     tabBarIcon: ({color, size}) => (
                //         <Icon name="document-outline" color={color} size={size} />
                //     ),
                //     headerShown: false
                // }}
            />
        </Tab.Navigator>
    );
}
export default TabNavigator;