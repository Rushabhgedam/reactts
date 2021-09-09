import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Home';
import DetailsScreen from './Details';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName="Home" headerMode="none">
        <Stack.Screen headerMode={"none"} name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
