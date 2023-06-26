import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View } from 'react-native';

import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <TailwindProvider>
    <NavigationContainer>

    <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
      </Stack.Navigator>

    </NavigationContainer>
   </TailwindProvider>
  );
}

