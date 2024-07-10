import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ScoresScreen from '../screens/ScoresScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#8E3A38' }, headerTintColor: '#fff' }} >
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    headerRight: () => (
                        <Image
                            source={require('../../assets/logo.png')}
                            style={{ width: 70, height: 70, marginRight: 15, aspectRatio: 1.5 }}
                        />
                    ),
                }} />
                <Stack.Screen name="Scores" component={ScoresScreen} options={{
                    headerRight: () => (
                        <Image
                            source={require('../../assets/logo.png')}
                            style={{ width: 70, height: 70, marginRight: 15, aspectRatio: 1.5 }}
                        />
                    ),
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;