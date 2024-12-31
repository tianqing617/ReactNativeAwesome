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
import ShoppingCart from './views/shopping-cart'
import ImageManager from './views/image-manager'

const Stack = createNativeStackNavigator()
function App(): React.JSX.Element {
  // <Text>测试</Text>
  // <WelcomeScreen />
  return (
  <NavigationContainer>
    {/* Home */}
    <Stack.Navigator initialRouteName="ImageManager">
    {/* <Stack.Navigator initialRouteName="Chart"> */}
      {/* TODO: 这里有类型问题，没有解决。去掉any可复现？ */}
      <Stack.Screen name="Home" component={HomeScreen as any} options={{title: 'Home'}} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Chart" component={ChartScreen} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      <Stack.Screen name="ImageManager" component={ImageManager} />
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
