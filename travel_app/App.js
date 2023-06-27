import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View } from 'react-native';

import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Discover from './screens/Discover';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <TailwindProvider>
    <NavigationContainer>

    <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Discover" component={Discover}/>
      </Stack.Navigator>

    </NavigationContainer>
   </TailwindProvider>
  );
}


{/*58.43*/}
{/*https://www.youtube.com/watch?v=JqPezeQiwxk*/}
