import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { Icon } from 'react-native-elements';
import SettingsScreen from './BarScreen';
import DashScreen from './DashScreen';
import EducationScreen from './EducationScreen';
import icontest from './icontest';
import BarScreen from './BarScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Dashboard" component={DashScreen} />
                <Tab.Screen name="Education" component={EducationScreen} />
                <Tab.Screen name="Bar" component={icontest} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}