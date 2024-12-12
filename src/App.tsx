/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Welcome.tsx'
import HomeScreen from './Home.tsx'
import ChartScreen from './Chart.tsx'

const Stack = createNativeStackNavigator()
function App(): React.JSX.Element {
  // <Text>测试</Text>
  // <WelcomeScreen />
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    {/* <Stack.Navigator initialRouteName="Chart"> */}
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home List'}} />
      <Stack.Screen name="Chart" component={ChartScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
}); */

export default App;
