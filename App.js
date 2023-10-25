import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './components/Screen01';
import Screen02 from './components/Screen02';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen01'>
        <Stack.Screen
          name='Screen01' component={Screen01}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Screen02' component={Screen02}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

